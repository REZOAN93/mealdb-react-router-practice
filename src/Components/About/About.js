import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <main>
                <h2>Welcome to the About!</h2>
                <p>You can do this, I believe in you.</p>
                <p>Hi I am About</p>
            </main>
            <nav>
                <Link to="/home">Home</Link>
            </nav>
        </>
    );
};

export default About;