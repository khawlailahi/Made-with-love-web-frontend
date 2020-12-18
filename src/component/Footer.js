import React from 'react';
import '../Style/footer.css'

function Footer() { 
    return (
  <div className="main-footer">
      <div className="container">
          <div  className="row">
          <div className="col">
             <h1>Made With Love</h1>   
             <ul className="list-unstyled">
              <li>0797828117</li>
              <li>Amman, Jordan</li>
            </ul>
          </div>
          <div className="col">
             <h1>Categories</h1>   
             <ul className="list-unstyled">
              <li>Food</li>
              <li>Clothes</li>
              <li>Accessories</li>
              <li>Baby Shower Accessories</li>
            </ul>
          </div>

          </div>
        <hr/>
      <div className='row'>
          <p className='col-sm'>
          &copy;{new Date().getFullYear()} Made With Love | All rights reserved |
            Terms Of Service | Privacy

          </p>

      </div>
      
      </div>
      

  </div>

    )

}




export default Footer;