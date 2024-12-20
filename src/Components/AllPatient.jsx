import React from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addMedicine } from '../service/api';
import { useHistory } from 'react-router-dom'
const prescriptions = [
  {
    patientName: "John Doe",
    doctorName: "Dr. Smith",
    status: "Processed",
    medicines: ["Paracetamol"],
    price: "2000",
    id: "1",
  },
  {
    patientName: "Jane Doe",
    doctorName: "Dr. Brown",
    status: "Pending",
    medicines: ["Ibuprofen"],
    price: "2000",
    id: "2",
  },
  {
    patientName: "Alice Johnson",
    doctorName: "Dr. White",
    status: "Processed",
    medicines: ["Aspirin"],
    price: "2000",
    id: "3",
  },
  {
    patientName: "Bob Smith",
    doctorName: "Dr. Green",
    status: "Pending",
    medicines: ["Amoxicillin"],
    price: "2000",
    id: "4",
  },
  {
    patientName: "Charlie Brown",
    doctorName: "Dr. Black",
    status: "Processed",
    medicines: ["Cetirizine"],
    price: "2000",
    id: "5",
  },
];

const PatientList = () => {
  return (
    <div>
      <h1>All Patients</h1>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Doctor Name</th>
            <th>Status</th>
            <th>Price</th>
            <th>Medicines</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((prescription) => (
            <tr key={prescription.id}>
              <td>{prescription.patientName}</td>
              <td>{prescription.doctorName}</td>
              <td>{prescription.status}</td>
              <td>{prescription.price}</td>
              <td>{prescription.medicines.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default PatientList;
