import React, { useState } from "react";
import Button from "./components/Button";
import Content, { CurrentPage } from "./components/Content";
import "./css/Home.css";

function Home() {
  const [page, setPage] = useState(CurrentPage.Home);

  function changePage(dest?: number, link?: string) {
    if (dest !== undefined) {
      setPage(dest);
    } else if (link !== undefined) {
      window.open(link, "_blank");
    }
  }

  return (
    <div className="home">
      <div className="navHeader">
        <div className="header" onClick={() => setPage(CurrentPage.Home)}>
          Jacob Speicher
        </div>
        <div className="nav">
          <Button
            text="Github"
            handleClick={changePage}
            link="https://github.com/jacobspeicher"
          />
          <Button text="Resume" handleClick={changePage} />
          <Button
            text="Games"
            handleClick={changePage}
            dest={CurrentPage.Games}
          />
        </div>
      </div>
      <Content page={page} />
    </div>
  );
}

export default Home;
