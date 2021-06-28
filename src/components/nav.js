import React from 'react'
import Classes from '../../src/App.module.css'
import imag from '../images/logo.svg'
const Nav= ()=>{

 return (
     <>
    <nav className={Classes.nav} >
    <a href="/" className= {Classes.a}>
    <h2 className ={Classes.h2}>القائمة الرئسية</h2>
    </a>
</nav>
</>
 )
}
export default Nav