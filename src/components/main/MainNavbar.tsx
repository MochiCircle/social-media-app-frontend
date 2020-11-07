import React from 'react';
 
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
  Button
} from 'reactstrap';
import { LoginComp } from '../login/LoginComp';
import { LogoutComp } from './LogoutComp';
import { WelcomeMessage } from './WelcomeMessage';

const MainNavbar = () => {
  
  return (
    <Navbar color="dark" dark expand="md">
      <ul className='nav navbar-nav navbar-inverse navbar-custom'>
        <li><Button href="/">MC</Button></li><li><Button href="/">My Profile</Button> </li>       
        <li>
          <NavItem>
            <div className="search-container">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
          </NavItem></li>
          <li> 
            <NavItem>
              <Button>
                Settings
              </Button>
            </NavItem>
          </li>
          <li>
              <NavItem>
                <LoginComp/>
              </NavItem>
          </li>
        </ul>
    </Navbar>
  );
}

export default MainNavbar;