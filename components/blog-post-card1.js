import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const BlogPostCard1 = (props) => {
  return (
    <>
      <Link href="/blog-post-1">
        <a>
          <div
            className={`blog-post-card1-blog-post-card ${props.rootClassName} `}
          >
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="blog-post-card1-image"
            />
            <div className="blog-post-card1-container">
              <span className="blog-post-card1-text">{props.label}</span>
              <span className="blog-post-card1-text1">{props.title}</span>
              <span className="blog-post-card1-text2">{props.description}</span>
              <div className="blog-post-card1-container1">
                <div className="blog-post-card1-profile">
                  <img
                    alt={props.profile_alt}
                    src={props.profile_src}
                    image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                    className="blog-post-card1-image1"
                  />
                  <span className="blog-post-card1-text3">{props.author}</span>
                </div>
                <span className="blog-post-card1-text4">{props.time}</span>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .blog-post-card1-blog-post-card {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            border-radius: 25px;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .blog-post-card1-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card1-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .blog-post-card1-container {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-act60directory-c30);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 25px;
            border-bottom-right-radius: 25px;
          }
          .blog-post-card1-text {
            color: var(--dl-color-act60directory-c10);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .blog-post-card1-text1 {
            color: var(--dl-color-act60directory-c10);
            font-size: 1.5rem;
            font-family: 'Poppins';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card1-text2 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card1-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-act60directory-c10);
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .blog-post-card1-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-post-card1-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-post-card1-text3 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-post-card1-text4 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
          }
        `}
      </style>
    </>
  )
}

BlogPostCard1.defaultProps = {
  author: 'John Doe',
  profile_alt: 'profile',
  title:
    'Unlocking Financial Freedom: Why Puerto Rico Is Your Tax Haven with Act 60',
  description:
    'Seeking a tax haven that transcends the ordinary? Look no further than Puerto Rico, where Act 60 offers a gateway to unparalleled tax benefits. Imagine a place where your financial aspirations align seamlessly with tax savings. Puerto Rico beckons as a haven for those yearning to optimize their wealth. Act 60, also known as the Puerto Rico Incentives Code, opens doors to a realm of unprecedented tax advantages.',
  image_alt: 'image',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  time: '5 min read',
  label: 'ENTERPRISE',
}

BlogPostCard1.propTypes = {
  author: PropTypes.string,
  profile_alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  profile_src: PropTypes.string,
  time: PropTypes.string,
  label: PropTypes.string,
}

export default BlogPostCard1
