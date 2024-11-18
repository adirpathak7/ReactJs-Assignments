import React, { useState } from 'react'

export default function FQ() {
    const [isToggel, setIsToggel] = useState(false)

    const [state, setState] = useState('')
    const [city, setCity] = useState([])
    const [counter, setCounter] = useState(0)

    const handleStateChange = (e) => {
        const selectedState = e.target.value
        setState(selectedState)

        const cityOptions = {
            Gujarat: ['Surat', 'Bharuch'],
            Maharashtra: ['Mumbai', 'Pune']
        }
        setCity(cityOptions[selectedState] || [])
    }

    const handelIncrement = () => {
        setCounter(counter + 1)
    }

    const handelDecrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    return (
        <div>
            <h1>F&Q</h1>
            <div>

                <button onClick={() => setIsToggel(!isToggel)}>
                    {isToggel ? 'On' : 'Off'}
                </button>
                <p>The Toggle is {isToggel ? 'On' : 'Off'}</p>
            </div>

            <div>
                <label htmlFor="state">State
                    <select name="state" id="state" value={state} onChange={handleStateChange}>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Maharashtra">Maharashtra</option>
                    </select>
                </label>
            </div>

            <div>
                <label htmlFor="city">City
                    <select name="city" id="city" value="">
                        {
                            city.map((cities, index) => (
                                <option key={index} value={cities}>{cities}</option>
                            ))
                        }
                    </select>
                </label>
            </div>

            <div>
                <p>{counter}</p>
                <button onClick={handelIncrement}>Increment</button>
                <button onClick={handelDecrement}>Decrement</button>
            </div>
        </div>
    )
}
