import React from "react";
import classNames from "classnames";

const FooterSocial = ({ className, ...props }) => {
  const classes = classNames("footer-social", className);

  return (
    <div {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a
            href="https://recscout.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              height="16px"
              // style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
              version="1.1"
              viewBox="0 0 512 512"
              width="16px"
            >
              <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm149.439,390.919l0,-5.04l-23.389,-22.963c-2.065,-1.573 -3.089,-4.161 -2.661,-6.721l0,-168.719c-0.428,-2.561 0.596,-5.148 2.661,-6.722l23.95,-22.962l0,-5.041l-82.912,0l-59.105,147.438l-67.227,-147.438l-86.975,0l0,5.041l28.012,33.744c2.751,2.478 4.154,6.119 3.781,9.802l0,132.595c0.815,4.782 -0.692,9.669 -4.06,13.161l-31.514,38.224l0,5.04l89.356,0l0,-5.04l-31.513,-38.224c-3.394,-3.485 -4.995,-8.34 -4.342,-13.161l0,-114.673l78.433,171.098l9.103,0l67.367,-171.098l0,136.376c0,3.639 0,4.34 -2.382,6.719l-24.229,23.524l0,5.04l117.646,0Z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/recscout"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter</title>
              <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/recscout.blog/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram</title>
              <g>
                <circle cx="12.145" cy="3.892" r="1" />
                <path d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                <path d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z" />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
