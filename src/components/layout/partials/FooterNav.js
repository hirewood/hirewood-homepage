import React from "react";
import classNames from "classnames";
// import { Link } from 'react-router-dom';

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="https://recscout.com/de/user_feedbacks/new">Contact</a>
        </li>
        <li>
          <a href="https://recscout.com/de/infos/about">About us</a>
        </li>
        <li>
          <a href="#0">FAQ's</a>
        </li>
        {/* <li>
          <a href="#0">Support</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default FooterNav;
