import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Tax Savings Feel Good</title>
          <meta property="og:title" content="Tax Savings Feel Good" />
        </Head>
        <Header></Header>
        <div className="home-hero">
          <h1 className="home-text">Transform Your Business’s Tax Strategy.</h1>
          <span className="home-text01">
            <br></br>
            <span>
              Our expertise guides you through the process, ensuring you
              leverage every opportunity for growth and savings.
            </span>
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
          <Link href="/contact-page">
            <a className="home-link button">
              <span className="home-text06">Learn More</span>
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </a>
          </Link>
          <div className="home-btn-group"></div>
        </div>
        <div className="home-banner">
          <h1 className="home-text07">Why Do You Need Section 60?</h1>
          <span className="home-text08">
            <span>
              Entertaining the idea of relocating to Puerto Rico? Picture this:
              an amazing 4% tax rate, absolute property tax exemption, and a
              fresh start with export service dividends. Your business’s perfect
              move.
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
        <div className="home-hero1">
          <img
            alt="image"
            src="https://i.imgur.com/h3ToT9c.png"
            className="home-image"
          />
          <div className="home-container1">
            <h1 className="home-text13">
              Professional help guaranteed throughout the entire process.
            </h1>
            <span className="home-text14">
              <br></br>
              <br></br>
              <span>
                Your financial ambitions take center stage with our dedicated
                team devoted to achieving excellence every step of the way.
                Level up your wealth journey with our rock-solid, dependable,
                and always-on-point professional support.
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
            <div className="home-btn-group1">
              <Link href="/contact-page">
                <a className="home-link1 button">
                  <span className="home-text21">Let&apos;s Talk</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-hero2">
          <div className="home-container2">
            <h1 className="home-text22">Retire In Paradise</h1>
            <span className="home-text23">
              <span>
                With reduced tax burdens on income and gains, this setup
                preserves wealth, letting you enjoy a tropical haven without
                sacrificing financial security.
              </span>
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
            <ul className="home-ul list">
              <li className="home-li list-item">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon04"
                >
                  <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="home-text27">
                  <span>
                    Customized Strategies for Long-Term Wealth Growth in Puerto
                    Rico
                  </span>
                  <span></span>
                </span>
              </li>
              <li className="home-li1 list-item">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="home-text30">
                  Experts to help guide you through the process.
                </span>
              </li>
              <li className="home-li2 list-item">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon08"
                >
                  <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="home-text31">
                  Committed to Helping Small Businesses and Entrepreneurs
                  Flourish in Puerto Rico
                </span>
              </li>
            </ul>
            <div className="home-btn-group2">
              <Link href="/contact-page">
                <a className="home-link2 button">
                  <span className="home-text32">Contact Us</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="https://i.imgur.com/14vnqSM.png"
            className="home-image1"
          />
        </div>
        <div className="home-banner1">
          <h1 className="home-text33">Find Out What We Can Do For You</h1>
          <span className="home-text34">
            Entertaining the idea of relocating to Puerto Rico? Picture this: an
            amazing 4% tax rate, absolute property tax exemption, and a fresh
            start with export service dividends. Your business’s perfect move.
          </span>
          <Link href="/contact-page">
            <a className="home-link3 button">
              <span className="home-text35">Learn More</span>
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </a>
          </Link>
        </div>
        <div className="home-testimonial">
          <div className="home-container3">
            <div className="home-testimonial-card">
              <div className="home-container4">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
                </svg>
              </div>
              <div className="home-testimonial1">
                <span className="home-text36">
                  Make Business in Puerto Rico Easy
                </span>
              </div>
              <Link href="/info">
                <a className="home-link4 button">Learn More</a>
              </Link>
            </div>
            <div className="home-testimonial-card1">
              <div className="home-container5">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M726 726v-172h-86v172h86zM554 726v-428h-84v428h84zM384 726v-300h-86v300h86zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596z"></path>
                </svg>
              </div>
              <div className="home-testimonial2">
                <span className="home-text37">
                  Investment and Financial Planning
                </span>
              </div>
              <Link href="/info">
                <a className="home-link5 button">Learn More</a>
              </Link>
            </div>
            <div className="home-testimonial-card2">
              <div className="home-container6">
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M504 466q44 12 73 24t61 33 49 53 17 76q0 62-41 101t-109 51v92h-128v-92q-66-14-109-56t-47-108h94q8 90 126 90 62 0 89-23t27-53q0-72-128-104-200-46-200-176 0-58 42-99t106-55v-92h128v94q66 16 101 60t37 102h-94q-4-90-108-90-52 0-83 22t-31 58q0 58 128 92z"></path>
                </svg>
              </div>
              <div className="home-testimonial3">
                <span className="home-text38">
                  Unlock Tax Savings with Act 60
                </span>
              </div>
              <Link href="/info">
                <a className="home-link6 button">Learn More</a>
              </Link>
            </div>
          </div>
          <h1 className="home-text39">What They’re Saying About Us</h1>
          <div className="home-pricing">
            <div className="home-container7">
              <div className="home-pricing-card">
                <img
                  alt="image"
                  src="https://i.imgur.com/pER90tx.png"
                  className="home-image2"
                />
                <span className="home-text40">Alexander Barnes</span>
                <span className="home-text41">
                  Life-changing! Moving my business to Puerto Rico with their
                  Act 60 expertise was the best decision. Their guidance on tax
                  incentives was spot-on, and now I&apos;m reaping the benefits
                  while enjoying the island life. Highly recommended!
                </span>
              </div>
              <div className="home-pricing-card1">
                <img
                  alt="image"
                  src="https://i.imgur.com/rDruSNO.png"
                  className="home-image3"
                />
                <span className="home-text42">Lucas Parker</span>
                <span className="home-text43">
                  With their knowledgeable team, they go beyond traditional
                  strategies, providing personalized tax solutions tailored to
                  individual needs. I would reccomend them to anyone trying to
                  maximize their wealth.
                </span>
              </div>
              <div className="home-pricing-card2">
                <img
                  alt="image"
                  src="https://i.imgur.com/I433XN5.png"
                  className="home-image4"
                />
                <span className="home-text44">Isabella Thompson</span>
                <span className="home-text45">
                  Incredible service! The team&apos;s knowledge of Act 60 and
                  its intricacies made my transition to Puerto Rico seamless.
                  They ensured I understood every step, and now I&apos;m
                  thriving financially in this beautiful setting. Thank you!
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-hero3">
          <div className="home-container8">
            <h1 className="home-text46">Get In Touch With Us</h1>
            <h1 className="home-text47">Send Us A Message:</h1>
            <a
              href="mailto:mj@thatfeelgoodproject.org?subject=Contact Page"
              className="home-link7"
            >
              inquiries@thatfeelgoodproject.org
            </a>
          </div>
          <img
            alt="image"
            src="https://i.imgur.com/DOLJcjK.png"
            className="home-image5"
          />
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
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
          .home-hero {
            width: var(--dl-size-size-maxwidth);
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: 100%;
            min-height: 50vh;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('https://i.pinimg.com/originals/d2/e4/33/d2e433a119194661db9909a4162bcd36.gif');
          }
          .home-text {
            color: var(--dl-color-act60directory-c30);
            font-size: 3rem;
            align-self: center;
            text-align: left;
            font-family: 'Poppins';
          }
          .home-text01 {
            color: var(--dl-color-act60directory-c30);
            font-size: 18px;
            align-self: center;
            margin-top: 0px;
            font-family: 'Quicksand';
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-link {
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
          .home-link:hover {
            font-size: 20px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text06 {
            color: var(--dl-color-act60directory-c60);
            align-self: center;
            font-family: 'Poppins';
          }
          .home-icon {
            fill: var(--dl-color-act60directory-c30);
            width: 24px;
            height: 24px;
          }
          .home-btn-group {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-banner {
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
          .home-text07 {
            color: var(--dl-color-act60directory-c30);
            font-size: 3rem;
            text-align: center;
            font-family: 'Poppins';
          }
          .home-text08 {
            color: var(--dl-color-act60directory-c30);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: 'Quicksand';
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            width: 25rem;
            height: auto;
            object-fit: cover;
          }
          .home-container1 {
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text13 {
            color: var(--dl-color-act60directory-c30);
            font-size: 3rem;
            font-family: 'Poppins';
          }
          .home-text14 {
            color: var(--dl-color-act60directory-c30);
            margin-top: 0px;
            font-family: 'Quicksand';
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-threeunits);
          }
          .home-btn-group1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-link1 {
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
          .home-link1:hover {
            font-size: 20px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text21 {
            color: var(--dl-color-act60directory-c60);
            align-self: center;
            font-family: 'Poppins';
          }
          .home-icon02 {
            fill: var(--dl-color-act60directory-c30);
            width: 24px;
            height: 24px;
          }
          .home-hero2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container2 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text22 {
            color: var(--dl-color-act60directory-c30);
            font-size: 3rem;
            max-width: 450px;
            font-family: 'Poppins';
          }
          .home-text23 {
            color: var(--dl-color-act60directory-c30);
            margin-top: var(--dl-space-space-unit);
            font-family: 'Quicksand';
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-ul {
            align-self: stretch;
            margin-top: 0px;
            margin-left: 0px;
            margin-right: 0px;
            padding-left: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-li {
            text-align: left;
          }
          .home-icon04 {
            fill: var(--dl-color-act60directory-c20);
            width: 24px;
            height: 24px;
          }
          .home-text27 {
            color: var(--dl-color-act60directory-c30);
            font-family: 'Poppins';
          }
          .home-li1 {
            color: var(--dl-color-act60directory-c60);
            text-align: left;
          }
          .home-icon06 {
            fill: var(--dl-color-act60directory-c20);
            width: 24px;
            height: 24px;
          }
          .home-text30 {
            color: var(--dl-color-act60directory-c30);
            font-family: 'Poppins';
          }
          .home-li2 {
            color: var(--dl-color-act60directory-c60);
            text-align: left;
          }
          .home-icon08 {
            fill: var(--dl-color-act60directory-c20);
            width: 24px;
            height: 24px;
          }
          .home-text31 {
            color: var(--dl-color-act60directory-c30);
            font-family: 'Poppins';
          }
          .home-btn-group2 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link2 {
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
          .home-link2:hover {
            font-size: 20px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text32 {
            color: var(--dl-color-act60directory-c60);
            align-self: center;
            font-family: 'Poppins';
          }
          .home-icon10 {
            fill: var(--dl-color-act60directory-c30);
            width: 24px;
            height: 24px;
          }
          .home-image1 {
            width: 25rem;
            object-fit: cover;
          }
          .home-banner1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-text33 {
            color: var(--dl-color-act60directory-c30);
            font-size: 3rem;
            text-align: center;
            font-family: 'Poppins';
          }
          .home-text34 {
            color: var(--dl-color-act60directory-c30);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: 'Quicksand';
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-link3 {
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
          .home-link3:hover {
            font-size: 20px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text35 {
            color: var(--dl-color-act60directory-c60);
            align-self: center;
            font-family: 'Poppins';
          }
          .home-icon12 {
            fill: var(--dl-color-act60directory-c30);
            width: 24px;
            height: 24px;
          }
          .home-testimonial {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-testimonial-card {
            display: flex;
            padding: var(--dl-space-space-twounits);
            background: #fff;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-act60directory-c30);
            border-width: 2px;
            border-radius: 25px;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-act60directory-c20);
          }
          .home-testimonial-card:hover {
            padding: var(--dl-space-space-threeunits);
          }
          .home-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-icon14 {
            fill: var(--dl-color-act60directory-c30);
            width: 3rem;
            height: 3rem;
          }
          .home-testimonial1 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text36 {
            color: var(--dl-color-act60directory-c30);
            font-size: 1.5rem;
            font-family: 'Poppins';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-link4 {
            color: var(--dl-color-act60directory-c30);
            padding: 0px;
            align-self: flex-start;
            text-align: left;
            font-family: 'Quicksand';
            border-color: var(--dl-color-act60directory-c30);
            border-radius: 0px;
            text-decoration: none;
            background-color: transparent;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-testimonial-card1 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-act60directory-c30);
            border-width: 2px;
            border-radius: 25px;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-act60directory-c20);
          }
          .home-testimonial-card1:hover {
            padding: var(--dl-space-space-threeunits);
          }
          .home-container5 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-icon16 {
            fill: var(--dl-color-act60directory-c30);
            width: 3rem;
            height: 3rem;
          }
          .home-testimonial2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text37 {
            color: var(--dl-color-act60directory-c30);
            font-size: 1.5rem;
            font-family: 'Poppins';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-link5 {
            color: var(--dl-color-act60directory-c30);
            padding: 0px;
            align-self: flex-start;
            text-align: left;
            font-family: 'Quicksand';
            border-color: var(--dl-color-act60directory-c30);
            border-radius: 0px;
            text-decoration: none;
            background-color: transparent;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-testimonial-card2 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            padding-top: 32px;
            border-color: var(--dl-color-act60directory-c30);
            border-width: 2px;
            border-radius: 25px;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-act60directory-c20);
          }
          .home-testimonial-card2:hover {
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-container6 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-icon18 {
            fill: var(--dl-color-act60directory-c30);
            width: 3rem;
            height: 3rem;
          }
          .home-testimonial3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text38 {
            color: var(--dl-color-act60directory-c30);
            font-size: 1.5rem;
            font-family: 'Poppins';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-link6 {
            color: var(--dl-color-act60directory-c30);
            padding: 0px;
            align-self: flex-start;
            text-align: left;
            font-family: 'Quicksand';
            border-color: var(--dl-color-act60directory-c30);
            border-radius: 0px;
            text-decoration: none;
            background-color: transparent;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text39 {
            color: var(--dl-color-act60directory-c30);
            font-size: 3em;
            align-self: center;
            text-align: center;
            font-family: 'Poppins';
          }
          .home-pricing {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-container7 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            background-size: cover;
            justify-content: center;
          }
          .home-pricing-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            min-height: auto;
            transition: 0.3s;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            border-radius: 25px;
            flex-direction: column;
            background-color: var(--dl-color-act60directory-c30);
          }
          .home-pricing-card:hover {
            transform: scale(1.02);
          }
          .home-image2 {
            width: 75px;
            align-self: center;
            object-fit: cover;
          }
          .home-text40 {
            color: var(--dl-color-act60directory-c10);
            font-size: 1.5rem;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: capitalize;
          }
          .home-text41 {
            color: var(--dl-color-act60directory-c10);
            font-size: 0.75rem;
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-pricing-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            min-height: auto;
            transition: 0.3s;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            border-radius: 25px;
            flex-direction: column;
            background-color: var(--dl-color-act60directory-c30);
          }
          .home-pricing-card1:hover {
            transform: scale(1.02);
          }
          .home-image3 {
            width: 125px;
            align-self: center;
            object-fit: cover;
          }
          .home-text42 {
            color: var(--dl-color-act60directory-c10);
            font-size: 1.5rem;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: capitalize;
          }
          .home-text43 {
            color: var(--dl-color-act60directory-c10);
            font-size: 0.75rem;
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-pricing-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            min-height: auto;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 25px;
            flex-direction: column;
            background-color: var(--dl-color-act60directory-c30);
          }
          .home-pricing-card2:hover {
            transform: scale(1.02);
          }
          .home-image4 {
            width: 75px;
            align-self: center;
            object-fit: cover;
          }
          .home-text44 {
            color: var(--dl-color-act60directory-c10);
            font-size: 1.5rem;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: capitalize;
          }
          .home-text45 {
            color: var(--dl-color-act60directory-c10);
            font-size: 0.75rem;
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-hero3 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container8 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text46 {
            color: var(--dl-color-act60directory-c30);
            font-size: 3rem;
            max-width: 450px;
            font-family: 'Poppins';
          }
          .home-text47 {
            color: var(--dl-color-act60directory-c30);
            font-size: 1.5rem;
            max-width: 450px;
          }
          .home-link7 {
            color: var(--dl-color-act60directory-c30);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-image5 {
            width: 25rem;
            object-fit: cover;
            border-radius: 25px;
          }
          @media (max-width: 479px) {
            .home-hero {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text {
              text-align: center;
            }
            .home-text01 {
              text-align: center;
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-hero1 {
              align-items: center;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text14 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-btn-group1 {
              align-items: center;
              flex-direction: column;
            }
            .home-link1 {
              align-self: flex-start;
              justify-content: center;
            }
            .home-hero2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container2 {
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group2 {
              flex-direction: column;
            }
            .home-link2 {
              align-self: flex-start;
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container3 {
              position: relative;
              align-items: center;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-testimonial-card {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text36 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-testimonial-card1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text37 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-testimonial-card2 {
              align-self: center;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text38 {
              color: var(--dl-color-act60directory-c30);
              font-size: 1.5rem;
              font-family: Poppins;
              font-weight: 300;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-container7 {
              gap: var(--dl-space-space-oneandhalfunits);
              max-width: 100%;
              align-items: stretch;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-hero3 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container8 {
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-image5 {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
