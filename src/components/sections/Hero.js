import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
// import VideoPlaceholder from "./../../assets/images/video-placeholder.jpg";
import PexelsPhoto from "./../../assets/images/pexels-photo-01.jpeg";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section
      {...props}
      className={outerClasses}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Finden Sie den besten Personalberater für Ihre Vakanz.
            </h1>
            {/* <br /> */}
            {/* <span className="text-color-primary">- Komm recscouten</span> */}
            <div>
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
                style={{ fontWeight: 400 }}
              >
                Wir verknüpfen HR-Teams und Personalberater auf der Grundlage
                von Technologien und Daten - komm' recscouten.
              </p>
              <div
                className="reveal-from-bottom"
                data-reveal-delay="600"
                // style={{ textAlign: "left" }}
              >
                <ButtonGroup style={{ justifyContent: "flex-start" }}>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="/de/signup"
                    size="large"
                  >
                    Jetzt recscouten
                  </Button>
                  <Button
                    color="primary"
                    tag="div"
                    wideMobile
                    // href="#"
                    size="large"
                    onClick={() =>
                      document.getElementById("call-container").scrollIntoView()
                    }
                  >
                    Mehr Infos
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/start.png"
              alt="#"
            />
          </div>

          {/* <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          > */}
          {/* <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            > */}
          {/* </a> */}
          {/* </div> */}
          {/* <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          /> */}
        </div>
      </div>
      {/* <Image
        className="has-shadow"
        src={PexelsPhoto}
        alt="Hero"
        // width={896}
        // height={504}
        style={{
          minHeight: "100vh",
          height: "auto",
          width: "auto",
          minWidth: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      /> */}
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
