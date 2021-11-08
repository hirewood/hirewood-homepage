import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Button from "../elements/Button";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section section-inner",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "RECSCOUT - More Trust Less Bullshit.",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container container-fluid" style={{ width: "100%" }}>
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            style={{ width: "100%", textAlign: "left" }}
          />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/quick_start.svg"
                      }
                      alt="Features tile icon 01"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Kostenlose Anmeldung</h4>
                  <p className="m-0">
                    Für Unternehmen ist die Nutzung kostenfrei. RECSCOUT
                    berechnet Personalberatern bei erfolgreicher Vermittlung 12%
                    des Honorars.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/matching.svg"
                      }
                      alt="Features tile icon 02"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Matching</h4>
                  <p className="m-0">
                    Vermeiden Sie Risiken. Finden und beauftragen Sie über
                    unsere spezifische Suchfunktion den richtigen Berater für
                    Ihre Vakanz.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/rating.svg"
                      }
                      alt="Features tile icon 03"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Bewertungen</h4>
                  <p className="m-0">
                    Unser Bewertungssystem schafft einen transparenten Markt und
                    macht Hidden-Champions im Recruiting sichtbar.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/communicate.svg"
                      }
                      alt="Features tile icon 05"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Kommunikation</h4>
                  <p className="m-0">
                    Die gesamte Kommunikation erfolgt über RECSCOUT - Der
                    Erstkontakt kann nur durch Unternehmen erfolgen.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/commitment.svg"
                      }
                      alt="Features tile icon 04"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Commitment</h4>
                  <p className="m-0">
                    Über Bewertungen ermöglichen wir ein verbindliches
                    Commitment direkt bei der ersten Zusammenarbeit.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/payment.svg"
                      }
                      alt="Features tile icon 06"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Zahlungen</h4>
                  <p className="m-0">
                    Zahlungen werden bequem digital abgewickelt. Nutzen Sie
                    moderne E-Rechnungen oder Factoring.
                  </p>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://recscout.medium.com/e-rechnung-und-factoring-im-recruitment-519d0b3cd8f2"
                    target="_blank"
                    size="sm"
                    style={{ marginTop: 5 }}
                  >
                    LINK ZUM BLOG
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
