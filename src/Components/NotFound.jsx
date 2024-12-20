import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-10 rounded shadow-md text-center">
                <h1 className="text-5xl font-bold mb-4">404</h1>
                <p className="text-xl mb-6">Page Not Found</p>
                <Link to="/" className="text-blue-500 hover:underline">
                    Go Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;