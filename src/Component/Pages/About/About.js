import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const About = () => {
    const myName = useContext(AuthContext);
    console.log(myName);
    return (
        <div>
            <h3 className='bg-yellow-500 text-center'>This is about.js file</h3>
        </div>
    );
};

export default About;