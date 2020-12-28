import React from 'react';
import ReactPlayer from 'react-player';
import NavBar from "./layout/Navbar.js";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
function View() {
    return (
        <div>
            <NavBar />

            <ReactPlayer url='https://www.youtube.com/watch?v=JwVBbAXN0hg' width="100%" height="500px" /><br />
            <Link to="/buyer/signup">


                <Button variant="primary" size="lg" active style={{ width: '50%', backgroundColor: 'black' }}>
                    Find The Best Homemade Products
  </Button></Link>
            <Link to="/seller/signup">
                <Button size="lg" active style={{ width: '50%', backgroundColor: 'black' }} >
                    Get Started With Your Business
  </Button></Link>


        </div>
    )
}

export default View;