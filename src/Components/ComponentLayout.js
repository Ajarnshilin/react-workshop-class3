import React from "react";

function ComponentLayout(props) {
  return (
    <div>
      <div className="Title">{props.title}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
}

export default ComponentLayout;
