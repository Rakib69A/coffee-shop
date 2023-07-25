import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h3 className='bg-red-700 h-100'>This is 404 page</h3>
            <Link to='\home'>Back to Home page</Link>
        </div>
    );
};

export default ErrorPage;