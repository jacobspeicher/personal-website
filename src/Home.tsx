import React, { useState } from "react";
import Button, { LinkButton, DownloadButton } from "./components/Button";
import Content, { CurrentPage } from "./components/Content";
import "./css/Home.css";

function Home() {
  const [page, setPage] = useState(CurrentPage.Home);

  function changePage(dest?: number) {
    if (dest !== undefined) {
      setPage(dest);
    }
  }

  return(
    <div>
      A website? For Jacob Speicher? It might be more likely than you think.
    </div>
  );

  /*
  return (
    <div className="home">
      <div className="navHeader">
        <div className="header" onClick={() => setPage(CurrentPage.Home)}>
          Jacob Speicher
        </div>
        <div className="nav">
          <LinkButton
            text="Github"
            handleClick={changePage}
            link="https://github.com/jacobspeicher"
          />
          <DownloadButton
            text="Resume"
            handleClick={changePage}
            link="Jacob Speicher Resume.pdf"
            filename=""
          />
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
  */
}

export default Home;
