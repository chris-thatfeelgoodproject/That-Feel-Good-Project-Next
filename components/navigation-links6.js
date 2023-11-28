import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks6 = (props) => {
  return (
    <>
      <nav className={`navigation-links6-nav ${props.rootClassName} `}>
        <Link href="/">
          <a className="navigation-links6-link">{props.text}</a>
        </Link>
        <Link href="/about">
          <a className="navigation-links6-link1">{props.text1}</a>
        </Link>
        <Link href="/partners">
          <a className="navigation-links6-link2">{props.text2}</a>
        </Link>
        <Link href="/calculator">
          <a className="navigation-links6-link3">{props.text3}</a>
        </Link>
        <Link href="/info">
          <a className="navigation-links6-link4">{props.text4}</a>
        </Link>
        <Link href="/blog">
          <a className="navigation-links6-link5">{props.text41}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .navigation-links6-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links6-link {
            font-size: 22px;
            transition: 0.3s;
            font-family: 'Poppins';
            text-decoration: none;
          }
          .navigation-links6-link:hover {
            color: var(--dl-color-act60directory-c20);
            border-color: var(--dl-color-act60directory-c20);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2px;
          }
          .navigation-links6-link1 {
            font-size: 22px;
            transition: 0.3s;
            font-family: 'Poppins';
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links6-link1:hover {
            color: var(--dl-color-act60directory-c20);
            border-color: var(--dl-color-act60directory-c20);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2px;
          }
          .navigation-links6-link2 {
            font-size: 22px;
            transition: 0.3s;
            font-family: 'Poppins';
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links6-link2:hover {
            color: var(--dl-color-act60directory-c20);
            border-color: var(--dl-color-act60directory-c20);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2px;
          }
          .navigation-links6-link3 {
            font-size: 22px;
            transition: 0.3s;
            font-family: 'Poppins';
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links6-link3:hover {
            color: var(--dl-color-act60directory-c20);
            border-color: var(--dl-color-act60directory-c20);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2px;
          }
          .navigation-links6-link4 {
            font-size: 22px;
            transition: 0.3s;
            font-family: 'Poppins';
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links6-link4:hover {
            color: var(--dl-color-act60directory-c20);
            border-color: var(--dl-color-act60directory-c20);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2px;
          }
          .navigation-links6-link5 {
            font-size: 22px;
            transition: 0.3s;
            font-family: 'Poppins';
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links6-link5:hover {
            color: var(--dl-color-act60directory-c20);
            border-color: var(--dl-color-act60directory-c20);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2px;
          }

          .navigation-links6-root-class-name14 {
            align-self: flex-start;
          }
          @media (max-width: 767px) {
            .navigation-links6-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links6-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links6-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links6-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links6-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links6-link4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links6-link5 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks6.defaultProps = {
  text2: 'Partners',
  text3: 'Calculator',
  text: 'Home',
  rootClassName: '',
  text1: 'About',
  text41: 'Blog',
  text4: 'Info',
}

NavigationLinks6.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text41: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks6
