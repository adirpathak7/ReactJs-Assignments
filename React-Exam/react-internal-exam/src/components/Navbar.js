import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <div>
            <nav id='navbar'>
                <Link to='/' className='link'>Home</Link>
                <Link to='/about' className='link'>About</Link>
                <Link to='/contact' className='link'>Contact Us</Link>
                <Link to='/fq' className='link'>F&Q</Link>
            </nav>
        </div>
    )
}
