import React, { useState } from 'react'

export default function TextForm(props) {
   const btnStyle = {
  backgroundColor: props.color !== 'white' ? props.color : (props.mode === 'dark' ? '#0A0924' : 'white'),
  borderColor: props.color !== 'white' ? props.color : (props.mode === 'dark' ? 'white' : 'black'),
  color: props.color !== 'white' ? 'white' : (props.mode === 'dark' ? 'white' : 'black')
};

const textareaStyle = {
  backgroundColor: props.color !== 'white' ? props.color : (props.mode === 'dark' ? '#0A0924' : 'white'),
  borderColor: props.color !== 'white' ? props.color : (props.mode === 'dark' ? 'white' : 'black'),
  color: props.color !== 'white' ? 'white' : (props.mode === 'dark' ? 'white' : 'black')
};
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleProperClick = () => {
        let newText = text.split(" ").map((word) =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
        setText(newText)
        props.showAlert("Converted to ProperCase", "success")
    }

    const handleCamelCase = () => {
        let newText = text.split("").map((char, index) =>
            index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join("")
        setText(newText)
        props.showAlert("Converted to CamelCase", "success")
    }

    const handleClearText = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Text cleared successfully", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)

    }
    const [text, setText] = useState('');//array destructuring
    return (
        <>
            <div className='container' style={{
                backgroundColor: props.mode === 'dark' ? '#0A0924' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black'
            }} >
                <h2 className="my-3">{props.heading}</h2>
                <div className='mb-3'>
                    <textarea className="form-control" value={text} style={btnStyle}
                    onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn mx-2 my-2" style={btnStyle} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn mx-2 my-2" style={btnStyle} onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn mx-2 my-2" style={btnStyle} onClick={handleProperClick}>Convert to Propercase</button>
                <button disabled={text.length === 0} className="btn mx-2 my-2" style={btnStyle} onClick={handleCamelCase}>Convert to CamelCase</button>
                <button disabled={text.length === 0} className="btn mx-2 my-2" style={btnStyle} onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3" style={{
                backgroundColor: props.mode === 'light' ? 'dark' : 'light',
                color: props.mode === 'dark' ? 'white' : 'black'
            }} >
                <h3>Your text summary</h3>
                <p><b>{text.split(" ").filter((w) => w !== "").length}</b> and <b>{text.length}</b> characters</p>
                <p><b>{0.008 * text.split(" ").filter((w) => w !== "").length}</b> minutes to read</p>
                <h4>Preview</h4>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}
