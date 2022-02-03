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
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
                // style={{ textAlign: "center" }}
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Was uns stört
                </div> */}
                <h2 className="mt-0 mb-12">Die Vision.</h2>
                <p className="m-6">
                  Unsere Vision ist eine Recruiting-Community, die offen und
                  transparent miteinander arbeiten kann. Unternehmen,
                  Kandidat:innen und Personalberater:innen sollen miteinander
                  frei agieren können, um gemeinsam die best möglichen Teams
                  aufzubauen.
                </p>

                <h2 className="mt-0 mb-12 mt-32">Die Mission.</h2>
                <p className="m-6">
                  Wir bauen an einer Plattform, über die wir Unternehmen mit
                  Personalberater:innen und wechselbereiten Kandidat:innen
                  vernetzen, die nicht per Stellenausschreibungen erreicht,
                  sondern aktiv angesprochen werden müssen.
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
                    "https://sajadghawami.github.io/hirewood-homepage/public/assets/images/homepage/change.svg"
                  }
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>
            {/* 
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"

              >
                <h2 className="mt-0 mb-12">Was wir ändern.</h2>
                <p className="m-6">
                  Wir schaffen für Sie auf der Grundlage von Technik und Daten
                  einen vertraulichen und transparenten Markt, machen per
                  Schnell-Suche Hidden-Champions im Recruiting sichtbar und
                  ermöglichen so einen optimalen Prozess für BEIDE Seiten. So
                  findet jede Vakanz ihren optimalen Berater.
                </p>

                <p className="m-6">
                  Verstehen Sie hirewood als bewegliche Plattform. Wir ergänzen
                  hirewood stets mit Funktionen, aus denen Sie ganz nach Bedarf
                  wählen können.
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
                    "https://sajadghawami.github.io/hirewood-homepage/public/assets/images/homepage/change.svg"
                  }
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div> */}

            {/* <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast recruitment
                </div> 
                <h2 className="mt-0 mb-12">Ein Blick in die Zukunft.</h2>
                <p className="m-0">
                  Weitere Features, wie der Zugriff auf einen nach
                  Fachrichtungen spezialisierten Researcher Pool mit ergänzenden
                  wechselbereiten Kandidaten oder die Nutzung eines Spec-Streams
                  sorgen für eine zusätzliche Wertschöpfung, welche hirewood in
                  einem Abo-Modell anbieten möchte.
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
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
