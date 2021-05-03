import React from "react";
//import Button from "./Button";
import "../css/Content.css";

export enum CurrentPage {
  Home,
  Games,
}

function Content(props: { page: CurrentPage }) {
  return (
    <>
      <div className="content">
        {props.page === CurrentPage.Home && (
          <div className="intro">
            Hey, I'm a software developer and aspiring game developer in
            Madison, WI.
          </div>
        )}
        {props.page === CurrentPage.Games && (
          <div className="intro">
            Here's some games and concepts I've worked on
          </div>
        )}
      </div>
    </>
  );
}

export default Content;
