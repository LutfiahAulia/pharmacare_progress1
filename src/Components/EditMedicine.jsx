import React, { useEffect, useState, useCallback } from 'react';
import { editMedicine, getAllMedicines } from '../service/api';
import { useHistory, useParams } from 'react-router-dom';

const initialValue = {
    namedoctor: "",
    name: "",
    stock: "",
    price: "",
    expiryDate: "",
}

const EditMedicine = () => {

    const [medicine, setMedicine] = useState(initialValue);
    const { doctorname, medicinename, stock, price, expiryDate } = medicine;

    const { id } = useParams();

    const history = useHistory();

    const loadMedicineData = useCallback(async () => {
        const response = await getAllMedicines(id);
        setMedicine(response.data);
    }, [id]);

    useEffect(() => {
        loadMedicineData();
    }, [loadMedicineData]);

    const onValueChange = (e) => {
        setMedicine({ ...medicine, [e.target.name]: e.target.value });
    }

    const editMedicineDetails = async () => {
        await editMedicine(id, medicine);
        history.push('/all');
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Update Medicine Details</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700">DoctorName</label>
                        <input
                            type="text"
                            name="doctorname"
                            value={doctorname}
                            onChange={onValueChange}
                            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">MedicineName</label>
                        <input
                            type="text"
                            name="medicinename"
                            value={medicinename}
                            onChange={onValueChange}
                            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Stock</label>
                        <input
                            type="number"
                            name="stock"
                            value={stock}
                            onChange={onValueChange}
                            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={price}
                            onChange={onValueChange}
                            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Expiry Date</label>
                        <input
                            type="date"
                            name="expiryDate"
                            value={expiryDate}
                            onChange={onValueChange}
                            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={editMedicineDetails}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Update Medicine
                        </button>
                        <button
                            onClick={() => history.push("/all")}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditMedicine;