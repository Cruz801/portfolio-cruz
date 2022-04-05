import React from 'react'
import linkedIn from '../assets/link.png'
// import {NavLink} from 'react-router-dom';




export default function Footer() {
  return (
    <div>Footer
    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/steven-cruz-256b99222/"> <img className='linked' src={linkedIn} alt="linkedin logo"/></a>
    </div>
  )
}
