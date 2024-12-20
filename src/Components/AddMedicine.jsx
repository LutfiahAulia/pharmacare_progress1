import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addMedicine } from '../service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    doctorname: "",
    medicinename: "",
    stock: "",
    price: "",
    expiryDate: "",
}

const AddMedicine = () => {

    const [medicine, setMedicine] = useState(initialValue);
    const { doctorname, medicinename, stock, price, expiryDate } = medicine;

    const history = useHistory();

    const onValueChange = (e) => {
        setMedicine({ ...medicine, [e.target.name]: e.target.value });
    }

    const addMedicineDetails = async () =>{
       await addMedicine(medicine);
       history.push('/all');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">Add Medicine Details</Typography>
                <FormGroup>
                <FormControl>
                        <InputLabel>DoctorName</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="doctorname" value={doctorname} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>MedicineName</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="medicinename" value={medicinename} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Stock</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="stock" value={stock} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Price</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="price" value={price} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Expiry Date</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="expiryDate" value={expiryDate} />
                    </FormControl>
                    <Box my={3}>
                        <Button variant="contained" onClick={() => addMedicineDetails() } color="primary" align="center">Add Medicine</Button>
                        <Button onClick={()=> history.push("/all")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
    )
}

export default AddMedicine;