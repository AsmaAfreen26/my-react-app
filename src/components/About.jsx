import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState(
        {
            color: 'black',
            background: 'white'
        })

    const[btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                background: 'black'
            })
            setBtnText("Enable Light Mode")
        } else {
            setMyStyle({
                color: 'black',
                background: 'white'
            })
            setBtnText("Enable Dark Mode")
        }

    }
    return (
        <div className="container" style={myStyle}>
            <h2 className="my-3 ">About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               <b> Contact Details</b>
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            Name: Asma Afreen<br/>
                            Mobile No: +971565883230<br/>
                            Role: Mobile Application Developer<br/>
                            E-mail: asmaafreen26@gmail.com
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              <b> Address</b>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            Country: United Arab Emirates<br/>
                            City: Fujairah<br/>
                            Area: New Sakamkam<br/>
                            Postal code: 00000<br/>
                            Country Code: +971
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <b>Projects</b>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                            PDF Merger Tool <br/>
                            TextUtils
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-3 py-2'>
                <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
            </div>
        </div>
    )
}
