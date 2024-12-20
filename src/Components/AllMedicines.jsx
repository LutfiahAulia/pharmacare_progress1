import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { deleteMedicine, getAllMedicines } from '../service/api';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 100px 100px 140px',
    },
    thead:{
        '& > *':{
            background: '#000000',
            color:'#FFFFFF',
            fontSize: '16px'
        }
    },
    trow:{
        '& > *':{
            fontSize: '16px'
        }
    }
})

const AllMedicines = () => {

    const classes = useStyle();

    const [medicines, setMedicines] = useState([]);
    useEffect(() => {
        getMedicines();
    }, [])

    const getMedicines = async () =>{
        const response = await getAllMedicines();
        console.log(response);
        setMedicines(response.data);
    }

    const deleteData = async (id) => {
        await deleteMedicine(id);
        getMedicines();
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>DoctorName</TableCell>
                    <TableCell>MedicineName</TableCell>
                    <TableCell>Stock</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Expiry Date</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                medicines.map((data) => (
                    <TableRow className={classes.trow}>
                        <TableCell>{data.id}</TableCell>
                        <TableCell>{data.doctorname}</TableCell>
                        <TableCell>{data.medicinename}</TableCell>
                        <TableCell>{data.stock}</TableCell>
                        <TableCell>{data.price}</TableCell>
                        <TableCell>{data.expiryDate}</TableCell>
                        <TableCell>
                            <Button variant="contained" color="primary" style={{margin: '0px 20px'}} component={Link} to={`/edit/${data.id}`}>Edit</Button>
                            <Button variant="contained" color="secondary" style={{margin: '0px 20px'}} onClick={() => deleteData(data.id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))
            }
            </TableBody>
        </Table>
    )
}

export default AllMedicines;
