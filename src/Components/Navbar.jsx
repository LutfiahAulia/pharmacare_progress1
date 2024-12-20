import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-blue-500 text-white flex justify-around p-4 shadow-lg">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/all" className="hover:text-gray-300">All Medicines</Link>
            <Link to="/add" className="hover:text-gray-300">Add Medicine</Link>
            <Link to="/patient" className="hover:text-gray-300">All Patient</Link>
        </nav>
    );
}

export default Navbar;