import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FutureSplit from "../components/sections/FutureSplit";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import ClimateSplit from "../components/sections/ClimateSplit";
import CallSplit from "../components/sections/CallSplit";
import CircularSplit from "../components/sections/CircularSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import classNames from "classnames";

// <div style={{ backgroundColor: "#f7f7f7" }}>
const Home = () => {
  const outerClasses = classNames("homepage-wrapper");

  return (
    <div className={outerClasses}>
      <Hero />
      <FeaturesSplit
        invertMobile
        // topDivider
        imageFill
        className="illustration-section-02"
      />
      {/* Der RECSCOUT-Kreislauf */}
      {/* <CircularSplit
        invertMobile
        // topDivider
        imageFill
        className="illustration-section-02"
      /> */}
      <FeaturesTiles className="illustration-section-01" />
      {/* Langfristig und nachhaltig. */}
      {/* <FutureSplit
        invertMobile
        // topDivider
        imageFill
        className="illustration-section-02"
      /> */}
      <ClimateSplit
        invertMobile
        // topDivider
        imageFill
        className="illustration-section-02"
      />
      <CallSplit
        invertMobile
        // topDivider
        imageFill
        className="illustration-section-02"
      />

      {/* <Testimonial topDivider /> */}
      {/* <Cta split /> */}
    </div>
  );
};

export default Home;
