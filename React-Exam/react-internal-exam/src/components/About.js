import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'

export default function About() {

    const [data, setData] = useState(null)

    //  1st way to fetch data using ajax
    // useEffect(() => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET', 'http://127.0.0.1:5500/react-internal-exam/src/components/index.json', true);
    //     xhr.onreadystatechange = function () {
    //         if (xhr.readyState === 4 && xhr.status === 200) {
    //             const responsData = JSON.parse(xhr.responseText);
    //             setData(responsData)
    //         }
    //     }
    //     xhr.send();
    // }, [])

    
    //  2nd way fetch data using Axios 
    // if you are using this so please install [ npm i axios ]
    useEffect(() => {
        axios.get('http://127.0.0.1:5500/react-internal-exam/src/components/index.json')
            .then((res) => setData(res.data.slice(0, 5)))
            .catch((err) => console.error('Error ' + err))
    }, [])
    console.log(data);

    return (
        <div>
            <h1>About</h1>
            <div>
                {
                    data ? (
                        <div>
                            <h1>User Information</h1>
                            <table border="2px solid black" cellPadding="10" cellSpacing="0" id='tbl'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Dob</th>
                                        <th>Marriage</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {data.map((userData, id) => (
                                        <tr key={id}>
                                            <td>{userData.name}</td>
                                            <td>{userData.dob}</td>
                                            <td>{userData.isMarriage ? 'Yes' : 'No'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        'Loading Data...'
                    )
                }
            </div>
        </div>
    )
}
