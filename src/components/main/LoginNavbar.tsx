

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
  Button,
  Form
} from 'reactstrap';

import { LoginComp } from './LoginComp';

interface IProps{

}

export const LoginNavbar: React.FC<IProps> = (props:IProps) => 
{
  return (
    <div>
      <Navbar color="dark" right expand="md">
        <Button href="/">Register
        </Button>
        <LoginComp />
      </Navbar>
    </div>
  );
}

export default LoginNavbar;