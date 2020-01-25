import React from 'react'
import {NavContainer,Logo,Nav} from '../styles/NavbarStyles'
import logo from '../images/bouncecode-01.png'

const Navbar = ()=>{
    return (
        <NavContainer>
            <Logo> 
                <img className = "logo"src = {logo} alt = "Logo image"/> 
            </Logo>
            <Nav>
                <ul className = "ul">
                    <li active={true} className = "li">Home</li>
                    <li className = "li">Courses</li>
                    <li className = "li">About</li>
                    <li className = "li">Contact</li>
                </ul>
            </Nav>
        </NavContainer>
    )
}
export default Navbar;