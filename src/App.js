import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AllMedicines from './Components/AllMedicines'; // Ensure this matches the renamed file
import AddMedicine from './Components/AddMedicine'; // Ensure this matches the renamed file
import EditMedicine from './Components/EditMedicine'; // Ensure this matches the renamed file
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PatientList from './Components/AllPatient';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/all" component={AllMedicines} exact />
        <Route path="/add" component={AddMedicine} exact />
        <Route path="/edit/:id" component={EditMedicine} exact />
        <Route path="/patient" component={PatientList} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
