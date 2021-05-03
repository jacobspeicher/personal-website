import React from "react";
import "../css/Button.css";

interface ButtonProps {
  text: string;
  handleClick: (dest?: number, link?: string) => void;
  dest?: number;
}

interface LinkButtonProps extends ButtonProps {
  link?: string;
}

interface DownloadButtonProps extends LinkButtonProps {
  filename?: string;
}

function Button(props: ButtonProps) {
  return (
    <>
      <div className="button" onClick={() => props.handleClick(props.dest)}>
        <div className="buttonText">{props.text}</div>
      </div>
    </>
  );
}

export function LinkButton(props: LinkButtonProps) {
  return (
    <>
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="button">
          <div className="buttonText">{props.text}</div>
        </div>
      </a>
    </>
  );
}

export function DownloadButton(props: DownloadButtonProps) {
  return (
    <>
      <a href={props.link} download={props.filename}>
        <div className="button">
          <div className="buttonText">{props.text}</div>
        </div>
      </a>
    </>
  );
}

export default Button;
