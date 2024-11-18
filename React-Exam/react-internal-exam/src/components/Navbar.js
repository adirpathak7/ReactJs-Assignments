import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    // useEffect(() => {
    //     sessionStorage.setItem('username', 'Adi');
    //     const sessionUser = sessionStorage.getItem('username');
    //     if (sessionUser) {
    //         console.log("Session storage username: " + sessionUser);
    //     }

    //     sessionStorage.clear();
    // }, []);

    return (
        <div>
            <nav id='navbar'>
                <Link to='/' className='link'>Home</Link>
                <Link to='/about' className='link'>About</Link>
                <Link to='/contact' className='link'>Contact Us</Link>
                <Link to='/fq' className='link'>F&Q</Link>
                <Link to='/login' className='link'>Login</Link>
            </nav>

        </div>
    )
}
