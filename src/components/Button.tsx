import React from "react";
import "../css/Button.css";

interface ButtonProps {
  text: string;
  handleClick: (dest?: number, link?: string) => void;
  dest?: number;
  link?: string;
}

function Button(props: ButtonProps) {
  return (
    <>
      <div
        className="button"
        onClick={() => props.handleClick(props.dest, props.link)}
      >
        <div>{props.text}</div>
      </div>
    </>
  );
}

export default Button;
