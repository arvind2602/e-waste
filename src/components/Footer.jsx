import React from 'react'
import '../Style/Footer.css'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo} alt="ok"/>
        <br/>   
        <br/>
        <ul>
           
            <li><a href='/'>Home</a></li>
            <li><a href='fixit'> Fixit</a></li>
            <li><a href='shopping'> Shopping</a></li>
            <li><a href='contacts'>Repair Near me</a></li>
        </ul>
        <br/>
        <br/>
        
        <p>@Designed by <a href='https://github.com/arvind2602'>Arvind Gupta</a> and team</p>
    </div>
  )
}

export default Footer