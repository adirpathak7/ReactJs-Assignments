import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../App.css';

export default function Navbar() {
    return (
        <div>
            <nav className='text-blue-500 justify-around space-x-52'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
            </nav>
        </div>
    )
}
