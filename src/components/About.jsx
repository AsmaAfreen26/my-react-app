import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState(
    //     {
    //         color: 'black',
    //         background: 'white'
    //     })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#1e3368',
        backgroundColor: props.mode === 'light' ? 'white' : '#061641'
    }
    return (
        <div className="container" style={myStyle}>
            <h2 className="my-3 ">About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <b> What is Text Analyzer?</b>
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            Text analysis (or text analytics) is the process of using computational methods and artificial intelligence to extract meaningful, structured information from unstructured human text. A text analyzer refers to the software or tool used to automate this process.
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <b> Use-case</b>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            TextUtils is an intuitive, web-based utility designed to analyze and format raw, unstructured text. It functions as a text analyzer by instantly processing your input to generate vital statistics, manipulate text formatting, and clean up messy characters.
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <b>Browser Compatibility</b>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                            Google Chrome, Microsoft Edge, Brave, and Opera: Powered by the Blink/V8 engine. These offer the highest performance for heavy JavaScript-based text analyzers, offering robust support for modern web APIs.
                            Apple Safari: Powered by the WebKit engine. It generally adheres tightly to web standards but occasionally lacks support for highly experimental, proprietary web APIs used by some heavy-duty machine learning or native file-system text tools.
                            Mozilla Firefox: Powered by the Gecko engine. It is excellent for privacy-focused text analysis, though sometimes lags in supporting certain newer hardware-accelerated APIs.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
