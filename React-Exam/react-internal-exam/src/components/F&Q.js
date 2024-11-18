import React, { useState } from 'react'

export default function FQ() {
    const [isToggel, setIsToggel] = useState(false)

    return (
        <div>
            <h1>F&Q</h1>
            <button onClick={() => setIsToggel(!isToggel)}>
                {isToggel ? 'On' : 'Off'}
            </button>
            <p>The Toggle is {isToggel ? 'On' : 'Off'}</p>
        </div>
    )
}
