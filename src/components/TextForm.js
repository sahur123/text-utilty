import React, { useState } from "react";

export default function TextForm(props) {
  const upClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");

  return (
    <>
      <div className=" container mt-5">
        <h2 className="my-3">{props.heading}</h2>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="7"
        ></textarea>
        <button className="btn btn-primary m-3" onClick={upClick}>
          To Uppercase
        </button>
        <button className="btn btn-success m-3" onClick={lowClick}>
          To Lowercase
        </button>
      </div>
      <div className="container mt-3">
        <h1>Your Text Summary :</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          Typing Speed :{" "}
          {Math.round((text.split(" ").length / 60) * 10000) / 100} wpm
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something in textarea!"}</p>
      </div>
    </>
  );
}
