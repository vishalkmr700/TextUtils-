import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
    };
    
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText);
      };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [Text, setText] = useState("Enter text here");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>

        <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>
            {Text.split(" ").length} words and {Text.length} character
          </p>
          <p>{0.008 * Text.split(" ").length} minutes read</p>
          <h2>Preview</h2>
          <p>{Text}</p>
        </div>
      </div>
    </>
  );
}
