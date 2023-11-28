import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard11 = (props) => {
  return (
    <>
      <div className={`feature-card11-feature-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="feature-card11-image"
        />
      </div>
      <style jsx>
        {`
          .feature-card11-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 10px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card11-feature-card:hover {
            transform: scale(1.02);
          }
          .feature-card11-image {
            width: auto;
            height: var(--dl-size-size-medium);
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .feature-card11-root-class-name {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name1 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name2 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name3 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name4 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name5 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name6 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name7 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name8 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name9 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name10 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name11 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name12 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name13 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name14 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name15 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name16 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name17 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name18 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name19 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name20 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name21 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name22 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name23 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name24 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name25 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name26 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name27 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name28 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name29 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name30 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name31 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name32 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name33 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name34 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name35 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name36 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name37 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name38 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name39 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name40 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name41 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name42 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name43 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name44 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name45 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name46 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name47 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name48 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name49 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name50 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name51 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name52 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name53 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name54 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name55 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name56 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name57 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name58 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name59 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name60 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name61 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name62 {
            max-width: 100%;
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name63 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name64 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name65 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name66 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name67 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name68 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name69 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name70 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name71 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name72 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name73 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name75 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name76 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name77 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name78 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name79 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name80 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name81 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name82 {
            max-width: 100%;
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name83 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name84 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name85 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name86 {
            background-color: var(--dl-color-act60directory-c30);
          }
          .feature-card11-root-class-name87 {
            background-color: var(--dl-color-act60directory-c30);
          }
        `}
      </style>
    </>
  )
}

FeatureCard11.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200',
  rootClassName: '',
  title: 'Lorem ipsum',
}

FeatureCard11.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard11
