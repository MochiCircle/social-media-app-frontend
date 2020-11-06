import React, { useState } from "react";
import {Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { LoginComp } from "./LoginComp";

interface IProps{

}

export const NavComp: React.FC<IProps> = (props:IProps) => 
{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
    <div>
        <Navbar color="dark" className="nav-bg">
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