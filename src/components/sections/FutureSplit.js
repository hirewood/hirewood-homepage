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

  const sectionHeader = {
    title: "Langfristig und nachhaltig.",
    // paragraph: "Wir bringen moderne Technologien in den Recruiting Markt.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            style={{ width: "100%", textAlign: "left" }}
          />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
                // style={{ textAlign: "center" }}
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Was uns stört
                </div> */}
                {/* <h3 className="mt-0 mb-12">Was uns stört.</h3> */}
                <p className="m-6">
                  Wir wachsen als Plattform indem wir neue Technologien
                  entwickeln und starke Produkte von Partnern integrieren, damit
                  Sie die besten Teams aufbauen können.
                </p>

                <p className="mb-0 mt-12">POTENZIAL</p>
                <p className="m-6">
                  Nutzen Sie die vollen Möglichkeiten Ihres neuen Netzwerks und
                  multiplizieren Sie es.
                </p>
                <p className="mb-0 mt-12">VERTRAUEN</p>
                <p className="m-6">
                  Finden Sie neue Kontakte in einem Recruiting-Netzwerk, dem Sie
                  vertrauen.
                </p>

                <p className="mb-0 mt-12">DISKRETION</p>

                <p className="m-6">
                  Wir machen digitale und zeitgleich diskrete Geschäfte möglich.
                </p>
                <p className="mb-0 mt-12">WHY NOT?</p>
                <p className="m-6">
                  Es gibt für Sie keinen Grund, ohne hirewood zu arbeiten. Wir
                  alle suchen Sicherheit, Vertrauen und eine regulierte
                  Grundlage mit einheitlichen Regeln. Warum sollten Sie bei der
                  Arbeit im Recruiting darauf verzichten?
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={
                    "https://sajadghawami.github.io/hirewood-homepage/public/assets/images/homepage/future.svg"
                  }
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
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
