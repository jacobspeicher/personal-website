import React from "react";

export enum CurrentPage {
  Home,
  Games,
}

function Content(props: { page: CurrentPage }) {
  return (
    <>
      {props.page === CurrentPage.Home && (
        <div className="text">"What a guy" - Jacob Speicher</div>
      )}
      {props.page === CurrentPage.Games && (
        <div className="text">"games!" - games</div>
      )}
    </>
  );
}

export default Content;
