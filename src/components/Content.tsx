import React from "react";
import { LinkButton } from "./Button";
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
            Hey, I'm a software developer and game developer in Madison, WI.
          </div>
        )}
        {props.page === CurrentPage.Games && (
          <>
            <div className="intro">
              This is a selection of games and concepts that I've worked on. You
              can find more on itch.io, along with videos of each on YouTube.
              <div className="buttons">
                <LinkButton
                  text="itch.io"
                  handleClick={() => {}}
                  link="https://paetramon.itch.io"
                />
                <LinkButton
                  text="YouTube"
                  handleClick={() => {}}
                  link="https://www.youtube.com/playlist?list=PLbuObtcAq9ynW75KqUrJElv9oEFbYoxDf"
                />
              </div>
            </div>
            <div className="game">
              <iframe
                src="https://itch.io/embed/1015414?border_width=0&amp;bg_color=6c597f&amp;fg_color=e5b487&amp;link_color=e58c80&amp;border_color=6c597f"
                width="206"
                height="165"
                frameBorder="0"
                title="AMIAPSDD"
                className="gameLink"
              >
                <a href="https://paetramon.itch.io/amiaps-dd">
                  AMIAPS DD: A Man In A Potato Sack Digs Deep by Jacob Speicher
                </a>
              </iframe>
              <div className="gameDescription">
                <div className="gameTitle">
                  AMIAPS DD: A Man In A Potato Sack Digs Deep
                </div>
                The shopkeepers brother is lost! He's pretty sure his brother
                ended up at the bottom of the world somehow, and he needs your
                help to find him. Dig deeper and deeper as you gain more energy,
                better your digging efficiency, and unlock a few upgrades. Help
                the shopkeep find his brother!
              </div>
            </div>
            <div className="game">
              <iframe
                src="https://itch.io/embed/353966?border_width=0&amp;bg_color=6c597f&amp;fg_color=e5b487&amp;link_color=e58c80&amp;border_color=6c597f"
                width="208"
                height="167"
                frameBorder="0"
                title="PONG"
                className="gameLink"
              >
                <a href="https://paetramon.itch.io/pong-nes">
                  NES Pong by Jacob Speicher
                </a>
              </iframe>
              <div className="gameDescription">
                <div className="gameTitle">NES PONG</div>
                Relive the 80s today with a friend and an NES emulator with this
                two-player Pong written in 6502 assembly!
              </div>
            </div>
            <div className="game">
              <iframe
                src="https://itch.io/embed/16330?border_width=0&amp;bg_color=6c597f&amp;fg_color=e5b487&amp;link_color=e58c80&amp;border_color=6c597f"
                width="208"
                height="167"
                frameBorder="0"
                title="WORMHOLE"
                className="gameLink"
              >
                <a href="https://paetramon.itch.io/wormhole">
                  WORMHOLE by Jacob Speicher
                </a>
              </iframe>
              <div className="gameDescription">
                <div className="gameTitle">WORMHOLE</div>
                Find the rest of your past to press on in this puzzle parkour
                game and solve the secrets of the wormhole.
              </div>
            </div>
            <div className="game">
              <iframe
                src="https://itch.io/embed/21105?border_width=0&amp;bg_color=6c597f&amp;fg_color=e5b487&amp;link_color=e58c80&amp;border_color=6c597f"
                width="208"
                height="167"
                frameBorder="0"
                title="Beacon"
              >
                <a href="https://paetramon.itch.io/beacon">
                  Beacon by Jacob Speicher
                </a>
              </iframe>
              <div className="gameDescription">
                <div className="gameTitle">Beacon</div>
                The story of people on a planet that stopped rotating, and the
                ships that followed their beacons.
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Content;
