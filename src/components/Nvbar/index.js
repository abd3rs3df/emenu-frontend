import React from 'react'
import {Nav,Bars} from './navbarelements'
import {Order ,Menu} from './navbarelements'

 const Navbar = () => {
    return (
        <>
        <Nav>
        <Order href='/index'>Order</Order>
        <Menu href ='/#'>Mnue</Menu>
        <Bars/>
        </Nav>
        </>
    )
}

export default Navbar

