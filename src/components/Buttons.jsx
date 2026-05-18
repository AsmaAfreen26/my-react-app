import React from 'react'

export default function Buttons(props) {
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
        <div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleProperClick}>Convert to Propercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCamelCase}>Convert to CamelCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
        </div>
    )
}
