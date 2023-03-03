import React, {useState} from 'react'

export default function TextForm(props) {

    const hanldleUpClick = () => {
        console.log("UpperCase was clicked" + text)
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }

    const hanldleLoClick = () => {
        console.log("LowerCase was clicked" + text)
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }

    const hanldleClClick = () => {
        let newText=''
        setText(newText)
        props.showAlert("Text cleared", "danger")
    }

    const hanldleSpellCheck = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const hanldleOnChange = (event) => {
        console.log("OnChange")
        setText(event.target.value)
    }

    const [text, setText] = useState(" ")
    return (
        <>
        <div className='container' style={{color : props.mode==='dark' ? 'white' : '#042743'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Enter your text below</label>
                <textarea className="form-control" value={text} onChange={hanldleOnChange}
                        style={{backgroundColor : props.mode==='dark' ? 'grey' : 'white',
                                color: props.mode==='dark' ? 'white' : '#042743'
                        }} 
                        id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-secondary mx-2" onClick={hanldleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={hanldleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-danger mx-2" onClick={hanldleClClick}>Clear Text</button>
            <button className="btn btn-success mx-2" onClick={hanldleSpellCheck}>Speak</button>

        </div>
        <div className='container my-3' style={{color : props.mode==='dark' ? 'white' : '#042743'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
