import React from "react";

import { Helmet } from "react-helmet";

import "./screen-dekstop.css";

const ScreenDekstop = (props) => {
  return (
    <div className="screen-dekstop-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="screen-dekstop-screen-dekstop">
        <div className="screen-dekstop-hero-section-frame">
          <button className="screen-dekstop-hero-text-buttons">
            <div className="screen-dekstop-headline-subhead">
              <span className="screen-dekstop-text H1-WorkSans">
                <span>Discover digital art &amp; Collect NFTs</span>
              </span>
              <span className="screen-dekstop-text02 BodyText-WorkSans">
                NFT marketplace UI created with Anima for Figma 12. Collect, buy
                and sell art from more than 20k NFT artists. and more
              </span>
            </div>
            <span className="screen-dekstop-text03 H4-SpaceMono">
              <span>
                240k+
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            <button
              className="screen-dekstop-button"
              onClick={() => alert("Hello")}
            >
              <img
                alt="RocketLaunchI1433"
                src="/playground_assets/rocketlaunchi1433-56v.svg"
                className="screen-dekstop-rocket-launch"
              />
              <span className="screen-dekstop-text07">Get Started</span>
            </button>
            <div className="screen-dekstop-additional-info">
              <div className="screen-dekstop-total-sale">
                <span className="screen-dekstop-text08 H4-SpaceMono">
                  <span>
                    240k+
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                </span>
                <span className="screen-dekstop-text10">
                  <span>Total Sale</span>
                </span>
              </div>
              <div className="screen-dekstop-auctions">
                <span className="screen-dekstop-text12 H4-SpaceMono">
                  <span>100k+</span>
                </span>
                <span className="screen-dekstop-text14">
                  <span>Auctions</span>
                </span>
              </div>
              <div className="screen-dekstop-artists">
                <span className="screen-dekstop-text16 H4-SpaceMono">
                  <span>240k+</span>
                </span>
                <span className="screen-dekstop-text18">
                  <span>Artists</span>
                </span>
              </div>
            </div>
          </button>
          <div className="screen-dekstop-highlighted-n-f-t">
            <img
              alt="ImagePlaceholderI1318"
              src="/playground_assets/imageplaceholderi1318-mz9l-200h.png"
              className="screen-dekstop-image-placeholder"
            />
            <div className="screen-dekstop-frame230">
              <span className="screen-dekstop-text20 H5-WorkSans">
                <span>Space Walking</span>
              </span>
              <div className="screen-dekstop-artist-card">
                <div className="screen-dekstop-avatar">
                  <div className="screen-dekstop-asset122">
                    <img
                      alt="AvatarPlaceholderI1318"
                      src="/playground_assets/avatarplaceholderi1318-xgqh-200h.png"
                      className="screen-dekstop-avatar-placeholder"
                    />
                  </div>
                </div>
                <span className="screen-dekstop-text22 Base(Body)-WorkSans">
                  <span>Animakid</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenDekstop;
