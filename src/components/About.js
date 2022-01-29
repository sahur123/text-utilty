import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btnText, setbtnText] = useState("Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color == "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtnText("Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });

      setbtnText("Light Mode");
    }
  };

  return (
    <>
      <div className="container mt-4" style={myStyle}>
        <h1 className="p-3">About Us</h1>
        <div className="accordion p-3" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                To know more please click here!
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This is my first React app which I made while practicing and
                learning React. I found it very inetersting and I wish I could
                make much more than this.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                How I made it?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                I tried to learn the basic React and then using Components,
                states and props and then used some concepts like React Router
                for navigation.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3 p-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </>
  );
}
