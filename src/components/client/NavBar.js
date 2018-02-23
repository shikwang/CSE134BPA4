import React from 'react';
import { Link } from 'react-router';
import { Button,Navbar,NavItem,Nav } from 'react-bootstrap';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a>Food-Delivery</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem>
              <Link to="restaurants" >Restaurants</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="cart" >My Cart</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="order" >My Order</Link>
            </NavItem>
            {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown> */}
          </Nav>
        </Navbar>
      </div>
    );
  }
}


export default NavBar;
