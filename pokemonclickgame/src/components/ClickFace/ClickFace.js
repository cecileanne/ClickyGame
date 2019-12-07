import React from "react";
import "./clickfacestyle.css";

function ClickFace(props) {
  return (
    <div className="img-container">
      <img
        alt={props.name}
        src={props.image}
        onClicki={() => props.method(props.id)}
      />
    </div>
  );
}

export default ClickFace;
