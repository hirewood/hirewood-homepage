import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top",
    "container",
    "container-fluid"
  );

  // const sectionHeader = {
  //   title: "Die Vision von hirewood.",
  //   paragraph:
  //     "Denken Sie an zahlreiche Anrufe, Mails, unterschiedliche Erwartungen ... und vergessen Sie diese. Wir laden HR-Teams und Berater ein, die Highlights im Recruiting zusammen auf hirewood zu erleben. Wir wissen wovon wir reden - Unser Team setzt sich aus erfahrenen Gründern, Beratern und HR Business Partnern zusammen. Wir vereinen alle Blickwinkel und Anforderungen an HR-Dienstleistungen in einer Plattform.",
  // };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader
            data={sectionHeader}
            className="center-content"
            style={{ width: "100%", textAlign: "left" }}
          /> */}
          <div className={splitClasses}>
            <div
              className="split-item three-features"
              style={{
                alignItems: "flex-start",
              }}
            >
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
                style={{ marginRight: 0 }}
              >
                <h3 className="mt-0 mb-12 mt-32">Unternehmen.</h3>
                <div
                  style={{
                    backgroundColor: "#00a6ed",
                    padding: 15,
                    borderRadius: 15,
                    marginTop: 50,
                    color: "#FFF",
                  }}
                >
                  <p>1. können Personalberater:innen beauftragen</p>
                  <p>
                    2. können uns beauftragen, Kandidat:innen oder
                    Personalberater:innen zu finden
                  </p>
                  <p>3. können auf den Kandidatenpool zugreifen</p>
                </div>
              </div>
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
                style={{ marginRight: 0 }}
              >
                <h3 className="mt-0 mb-12 mt-32">Kandidat:innen.</h3>
                <div
                  style={{
                    backgroundColor: "rgb(47, 46, 65)",
                    padding: 15,
                    borderRadius: 15,
                    marginTop: 50,
                    color: "#FFF",
                  }}
                >
                  <p>
                    1. können anonym Ziele, Gehalt, Motivation etc. präsentieren
                  </p>
                  <p>2. können von Firmen passiv angesprochen werden</p>
                  <p>
                    3. können von Personalberater:innen angesprochen und betreut
                    werden
                  </p>
                </div>
              </div>
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
                style={{ marginRight: 0 }}
              >
                <h3 className="mt-0 mb-12 mt-32">Personalberater:innen.</h3>
                <div
                  style={{
                    backgroundColor: "#00a6ed",
                    padding: 15,
                    borderRadius: 15,
                    marginTop: 50,
                    color: "#FFF",
                  }}
                >
                  <p>1. können Aufträge generieren</p>
                  <p>2. können Kandidat:innen anonym präsentieren</p>
                  <p>3. können auf den Kandidatenpool zugreifen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
