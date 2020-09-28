import React from "react";
import { useState } from "react";

function Background(props) {
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  // const [text, setText] = useState("white")

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "#fff" ? "#f00" : "#fff");
    // setText(text ==="white" ? "red": "white")

    // if (backgroundColor === "#fff"){
    //   setBackgroundColor("#f00")
    // } else
    //   setBackgroundColor("#fff")
  };

  return (
    <div onClick={handleClick} style={{ backgroundColor }}>
      {props.children}
      {backgroundColor === "#fff" ? "White" : "Red"}
      {/* {text} */}
    </div>
  );
}

export default Background;
