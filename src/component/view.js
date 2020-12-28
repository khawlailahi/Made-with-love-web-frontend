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

<<<<<<< HEAD

                <Button variant="primary" size="lg" active style={{ width: '50%', backgroundColor: 'black' }}>
                    Find The Best Homemade Products
  </Button></Link>
            <Link to="/seller/signup">
                <Button size="lg" active style={{ width: '50%', backgroundColor: 'black' }} >
                    Get Started With Your Business
=======
             <Button variant="primary" size="lg" active style={{width:'48%', backgroundColor:'#b5aeae',borderRadius:'9px', marginLeft:'20px',borderColor:'black',borderStyle:'solid', borderWidth:'2px'}}>
   Find The Best Homemade Products
  </Button></Link>
  <Link  to="/seller/signup">
  <Button  size="lg" active style={{width:'48%', backgroundColor:'#b5aeae',borderRadius:'9px', marginLeft:'20px', borderColor:'black',borderStyle:'solid', borderWidth:'2px'}} >
 Get Started With Your Business
>>>>>>> 79fcb5d77bd63205ede57d91c50658805394cea8
  </Button></Link>


        </div>
    )
}

export default View;