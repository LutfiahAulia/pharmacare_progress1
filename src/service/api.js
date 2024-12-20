import axios from 'axios';

const baseUrl = "http://localhost:3004"; // Ensure this matches your JSON server URL
const medicineUrl = `${baseUrl}/medicines`;
const prescriptionUrl = `${baseUrl}/prescriptions`;
const orderUrl = `${baseUrl}/orders`;

export const getAllMedicines = async (id) => {
    id = id || '';
    return await axios.get(`${medicineUrl}/${id}`);
}

export const addMedicine = async (medicine) => {
    return await axios.post(medicineUrl, medicine);
}

export const editMedicine = async (id, medicine) => {
    return await axios.put(`${medicineUrl}/${id}`, medicine);
}

export const deleteMedicine = async (id) => {
    return await axios.delete(`${medicineUrl}/${id}`);
}

// Similar functions for prescriptions and orders
// ...