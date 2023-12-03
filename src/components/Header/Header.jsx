import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

import click from '../../assets/sounds/clicksound.mp3'
export const Header = () => {
    const playClick=()=>{
      new Audio(click).play();
    }
  return (
    <>
    <div className="headerNav">
    <Link to='/'>
    <div className="homeButton" onClick={()=>{playClick()}}>
        Home
    </div>
    </Link>
    <Link to='/about'>
    <div className="aboutButton" onClick={()=>{playClick()}}>
        Instructions
    </div>
    </Link>
    <Link to='/contact'>
    <div className="contactButton" onClick={()=>{playClick()}}>
        Contact Us
    </div>
    </Link>
    </div>
    <hr className='headingHR'/>
    <div className="headerTitle">
        POMODORO TIMER
    </div>
    <div className="headerDesc">
        <b>Start Now!</b> sky rocket your productivity with <b>POMODORO technique</b>.
    </div>

    
    </>
  )
}
