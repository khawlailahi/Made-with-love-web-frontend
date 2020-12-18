import React from 'react';
import { Link }  from 'react-router-dom';


const Navbar = () => {
    return (
        // <Navbar bg="dark" variant="dark">
        // <Navbar.Brand href="#home">Made With Love</Navbar.Brand>
        <nav >
            <div>
                <Link to='/'>Home</Link>
                <Link to='/category'>Category</Link>
                <Link to='/about'>About Us</Link>
            </div>
        </nav>
        // </Navbar>
    )
}

export default Navbar