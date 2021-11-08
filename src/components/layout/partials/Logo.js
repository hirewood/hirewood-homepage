import React from "react";
import classNames from "classnames";
// import { Link } from 'react-router-dom';
import Image from "../../elements/Image";
import LogoSrc from "./../../../assets/images/logo.svg";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <a href="/">
          <Image src={LogoSrc} alt="Open" width={32} height={32} />
        </a>
      </h1>
    </div>
  );
};

export default Logo;
