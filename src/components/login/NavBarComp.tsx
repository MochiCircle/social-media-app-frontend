import React, { useState } from "react";
import {Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { LoginComp } from "./LoginComp";

interface IProps{

}

const NavBarComp: React.FC<IProps> = (props:IProps) => 
{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
    <div className="style-width">
        <Navbar>
            {/* Menu Open Toggle functionality for mobile */}
            <NavbarToggler onclick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem className="justify-right">
                        
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
    )
}

export default NavBarComp;