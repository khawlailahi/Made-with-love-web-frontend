import React , {Component} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../../Style/navbar.css'
import app  from '../fireConfig'
import { render } from '@testing-library/react';
if(localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))["type"] === 'seller' ){
   var id = JSON.parse(localStorage.getItem('token'))['id']
  var url = `/seller/profile/${id}`}

  
//  import firebase from 'firebase'

 
class NavbarSeller extends Component {
  constructor(props){
    super(props)
  this.state={
    not:0
  }
  }

  componentDidMount(){
    var that = this
   
    if(localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))["type"] === 'seller' ){
    var store = JSON.parse(localStorage.getItem('token'))['id']
         var child = localStorage.getItem('not2')
    console.log(store,child, "heeeeeelp")

    app.database().ref('notification').child(child+'').on('value', snap =>{
console.log(child )
      console.log("iiiin")
      if(snap.val()){
      console.log(snap.val()[JSON.parse(localStorage.getItem('token'))['id']], "vaaaaal")
      that.setState({
          not:snap.val()[JSON.parse(localStorage.getItem('token'))['id']]
      })}

  }) 
  }
}
   signout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('not2')
  }
 
  render(){
     if (this.state.not){
      var  notification =  <Navbar.Brand  >{this.state.not}<i class="fas fa-bell"></i></Navbar.Brand>
     }
  return (
<div className="App">
<Navbar collapseOnSelect expand="lg" bg="#800000" variant="dark">
  <Navbar.Brand href="/home" >Made With Love</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Navbar.Brand href="/home" >HOME</Navbar.Brand>
  <Nav className="mr-auto">
      <NavDropdown title="category" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/buyer/food">Food</NavDropdown.Item>
        <NavDropdown.Item href="/buyer/clothes">Clothes</NavDropdown.Item>
        <NavDropdown.Item href="/buyer/accessories">Accessories</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/buyer/babyproducts">Baby  Accessories</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   {notification}
    <Nav>
    <NavDropdown  id="collasible-nav-dropdown" style ={{padding :'15px'}}>
        <NavDropdown.Item href="/orderList"> Views Orders</NavDropdown.Item>
        <NavDropdown.Item href="/settings">Setting</NavDropdown.Item>
        <NavDropdown.Item href="/" onClick={this.signout}>Sign Out</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
        )}
}
export default NavbarSeller









