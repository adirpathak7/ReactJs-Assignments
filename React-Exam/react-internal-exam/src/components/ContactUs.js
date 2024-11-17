import React, { useState } from 'react'
import '../App.css'
export default function ContactUs() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handelFormSubmit = (e) => {
        e.preventDefault()
        const { name, email, password } = formData
        const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!name) {
            document.getElementById('name-error').innerHTML = "Please enter the Name!"
            document.getElementById('name-error').style.color = 'red'
            return false
        }

        if (!email) {
            document.getElementById('email-error').innerHTML = "Please enter the Email!"
            document.getElementById('email-error').style.color = 'red'
            return false
        }

        if (!email.match(validEmail)) {
            document.getElementById('email-error').innerHTML = "Please enter valid Email!"
            document.getElementById('email-error').style.color = 'red'
            return false
        }

        if (!password) {
            document.getElementById('password-error').innerHTML = "Please enter the Password!"
            document.getElementById('password-error').style.color = 'red'
            return false
        }

        alert("Form is submited.")
        setFormData({
            name: '',
            email: '',
            password: ''
        })
        return true
    }

    const clearError = (id) => {
        document.getElementById(id).innerHTML = ''
    }
    const handelInputChange = (e) => {
        const { id, value } = e.target
        clearError(`${id}-error`)
        setFormData((data) => ({
            ...data,
            [id]: value,
        }))
    }
    return (
        <div>
            <h1>Contact Us</h1>

            <form method='post' onSubmit={handelFormSubmit}>
                Name
                <input type="text" id='name' value={formData.name} onChange={handelInputChange} />
                <span id='name-error'></span><br />
                Email
                <input type="text" id='email' value={formData.email} onChange={handelInputChange} />
                <span id='email-error'></span><br />
                Password
                <input type="text" id='password' value={formData.password} onChange={handelInputChange} />
                <span id='password-error'></span> <br /> <br />

                <button>Submit</button>
                <button type='reset'>Reset</button>
            </form>
        </div>
    )
}