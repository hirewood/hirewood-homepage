import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Button from "../elements/Button";

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
    // title: "Ein Blick in die Zukunft.",
    // paragraph: "Wir bringen moderne Technologien in den Recruiting Markt.",
  };

  return (
    <section {...props} className={outerClasses} id="call-container">
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
                <h2 className="mt-0 mb-12">Rückruf vereinbaren.</h2>
                <p className="m-6">
                  Unser Team ist werktags von 9 bis 18 Uhr persönlich für Sie
                  erreichbar.
                </p>
                <Button
                  tag="a"
                  color="dark"
                  wideMobile
                  href="/user_feedbacks/new"
                  size="large"
                >
                  Rückruf buchen
                </Button>
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
                    "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/contact.svg"
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
