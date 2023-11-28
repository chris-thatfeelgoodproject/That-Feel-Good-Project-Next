import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Tax Savings Feel Good</title>
          <meta property="og:title" content="About - Tax Savings Feel Good" />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
        <div className="about-hero">
          <img
            alt="image"
            src="https://i.imgur.com/9Cer6E4.png"
            className="about-image"
          />
          <div className="about-container1">
            <h1 className="about-text">
              We Who Are We?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <span className="about-text01">
              <span>
                We specialize in unlocking unparalleled wealth opportunities
                under Act 60 in Puerto Rico. Our mission is simple: to guide
                individuals and businesses towards financial prosperity in this
                thriving economic landscape.
              </span>
              <br></br>
              <br></br>
              <span>
                We understand the power of Act 60 and its potential to transform
                your financial future. Our tailored expertise ensures that you
                harness the full spectrum of benefits offered by this
                legislation, maximizing your wealth growth and securing a
                prosperous tomorrow.
              </span>
              <br></br>
              <br></br>
              <span>
                With a team of seasoned professionals deeply rooted in Puerto
                Rico&apos;s financial ecosystem, we pave the way for your
                success. From strategic consultation to seamless execution,
                we&apos;re dedicated to empowering you with the knowledge and
                tools needed to thrive.
              </span>
            </span>
          </div>
        </div>
        <div className="about-banner">
          <h1 className="about-text09">Your Success Is Our Success</h1>
          <span className="about-text10">
            <span>
              We&apos;re passionate about maximizing your financial potential by
              leveraging Act 60 in Puerto Rico. Our commitment lies in ensuring
              you benefit from every possible avenue of tax savings, empowering
              your transition with tailored strategies to optimize your wealth
              and financial well-being.
            </span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <div className="about-hero1">
          <div className="about-container2">
            <h1 className="about-text15">We Maximize Your Wealth.</h1>
            <span className="about-text16">
              Join us on this journey to unparalleled financial growth and
              discover the endless possibilities awaiting you under Act 60 in
              Puerto Rico. Let&apos;s sculpt your path to lasting wealth
              together.
            </span>
            <div className="about-btn-group">
              <Link href="/contact-page">
                <a className="about-link button">
                  <span className="about-text17">Let&apos;s Talk</span>
                  <svg viewBox="0 0 1024 1024" className="about-icon">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="https://i.imgur.com/LzQQu6B.png"
            className="about-image1"
          />
        </div>
        <div className="about-banner1">
          <h1 className="about-text18">Meet Our Team</h1>
        </div>
        <div className="about-hero2">
          <img
            alt="image"
            src="https://i.imgur.com/ubGH6bZ.png"
            className="about-image2"
          />
          <div className="about-container3">
            <h1 className="about-text19">Matthew James, Founder | CEO | CFO</h1>
            <span className="about-text20">
              <span>
                As the CEO and CFO of Feel Good Worldwide, I have over six years
                of experience in leading and managing the financial operations
                and strategy of a company that helps Americans take advantage of
                Act 60, a law that allows them to pay only 4% federal income tax
                if they live in Puerto Rico for 60 days of the year.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                I'm committed to supplying our clients with exceptional Puerto Rico rentals, letting them bask in the island's beauty and culture while reaping substantial tax benefits.
              </span>
            </span>
          </div>
        </div>
        <div className="about-hero3">
          <div className="about-container4">
            <h1 className="about-text25">Chris Pettyjohn, Co-Founder | CTO</h1>
            <span className="about-text26">
              <span>
                As the Co-founder and CTO of our company, I bring over a decade
                of technical expertise and leadership in driving technological
                innovation and infrastructure. My extensive background spans
                designing robust systems that streamline the relocation process
                for our clients leveraging Act 60 in Puerto Rico.
              </span>
              <br></br>
              <br></br>
              <span>
                My focus is on revolutionizing our technological infrastructure
                to provide seamless solutions for our clients, ensuring an
                effortless transition while optimizing tax benefits. I&apos;m
                driven by a passion for leveraging cutting-edge technology to
                enhance our clients&apos; experiences, delivering innovative
                tools that facilitate their journey to Puerto Rico.
              </span>
              <br></br>
            </span>
          </div>
          <img
            alt="image"
            src="https://i.imgur.com/Uc4tAq5.png"
            className="about-image3"
          />
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-image: linear-gradient(
              135deg,
              rgb(238, 85, 144) 46%,
              rgb(52, 251, 237) 97%
            );
          }
          .about-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-image {
            width: 25rem;
            object-fit: cover;
          }
          .about-container1 {
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .about-text {
            color: var(--dl-color-act60directory-c30);
            font-size: 2rem;
            align-self: flex-start;
            text-align: center;
            font-family: 'Poppins';
          }
          .about-text01 {
            color: var(--dl-color-act60directory-c30);
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Quicksand';
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .about-banner {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .about-text09 {
            color: var(--dl-color-act60directory-c30);
            font-size: 3rem;
            text-align: center;
            font-family: 'Poppins';
          }
          .about-text10 {
            color: var(--dl-color-act60directory-c30);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: 'Quicksand';
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-hero1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-container2 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .about-text15 {
            color: var(--dl-color-act60directory-c30);
            font-size: 2rem;
            max-width: 450px;
            font-family: 'Poppins';
          }
          .about-text16 {
            color: var(--dl-color-act60directory-c30);
            margin-top: var(--dl-space-space-unit);
            font-family: 'Quicksand';
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .about-link {
            color: var(--dl-color-act60directory-white);
            display: flex;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            align-items: center;
            border-color: var(--dl-color-act60directory-c30);
            border-width: 2px;
            border-radius: 15px;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-act60directory-c20);
          }
          .about-link:hover {
            font-size: 20px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .about-text17 {
            color: var(--dl-color-act60directory-c60);
            align-self: center;
            font-family: 'Poppins';
          }
          .about-icon {
            fill: var(--dl-color-act60directory-c30);
            width: 24px;
            height: 24px;
          }
          .about-image1 {
            width: 25rem;
            object-fit: cover;
          }
          .about-banner1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .about-text18 {
            color: var(--dl-color-act60directory-c30);
            font-size: 3rem;
            text-align: center;
            font-family: 'Poppins';
          }
          .about-hero2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-image2 {
            width: 20rem;
            object-fit: cover;
            border-radius: 25px;
          }
          .about-container3 {
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .about-text19 {
            color: var(--dl-color-act60directory-c30);
            font-size: 2rem;
            align-self: flex-start;
            text-align: center;
            font-family: 'Poppins';
          }
          .about-text20 {
            color: var(--dl-color-act60directory-c30);
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Quicksand';
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .about-hero3 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-container4 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .about-text25 {
            color: var(--dl-color-act60directory-c30);
            font-size: 2rem;
            max-width: auto;
            font-family: 'Poppins';
          }
          .about-text26 {
            color: var(--dl-color-act60directory-c30);
            margin-top: var(--dl-space-space-unit);
            font-family: 'Quicksand';
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-image3 {
            width: 20rem;
            object-fit: cover;
            border-radius: 25px;
          }
          @media (max-width: 479px) {
            .about-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-container1 {
              position: relative;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-text {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: left;
            }
            .about-text01 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .about-container2 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
              padding-right: 0px;
              justify-content: center;
            }
            .about-btn-group {
              flex-direction: column;
            }
            .about-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-hero2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-container3 {
              position: relative;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-text19 {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: left;
            }
            .about-text20 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-hero3 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .about-container4 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
              padding-right: 0px;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default About
