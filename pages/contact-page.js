import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const ContactPage = (props) => {
  return (
    <>
      <div className="contact-page-container">
        <Head>
          <title>Contact-Page - Tax Savings Feel Good</title>
          <meta
            property="og:title"
            content="Contact-Page - Tax Savings Feel Good"
          />
        </Head>
        <Header rootClassName="header-root-class-name4"></Header>
        <div className="contact-page-hero">
          <div className="contact-page-container1">
            <h1 className="contact-page-text">Get In Touch With Us</h1>
            <h1 className="contact-page-text1">Send Us A Message:</h1>
            <a
              href="mailto:mj@thatfeelgoodproject.org?subject=Contact Page"
              className="contact-page-link"
            >
              inquiries@thatfeelgoodproject.org
            </a>
          </div>
          <form
            action="https://formsubmit.co/adrian@adrianbyrdcounseling.com"
            method="POST"
            enctype="application/x-www-form-urlencoded"
            className="contact-page-form"
          >
            <input
              type="email"
              name="name"
              required
              placeholder="name:"
              className="contact-page-input input"
            />
            <input
              type="tel"
              name="number"
              required
              placeholder="number:"
              className="contact-page-textinput input"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="email:"
              className="contact-page-textinput1 input"
            />
            <textarea
              name="message"
              placeholder="leave a message:"
              className="contact-page-textarea textarea"
            ></textarea>
            <button type="submit" className="contact-page-button button">
              Submit
            </button>
          </form>
        </div>
        <img
          alt="image"
          src="https://i.imgur.com/36NBKAe.png"
          className="contact-page-image"
        />
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .contact-page-container {
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
          .contact-page-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-page-container1 {
            width: auto;
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .contact-page-text {
            color: var(--dl-color-act60directory-c30);
            font-size: 3rem;
            max-width: 450px;
            font-family: 'Poppins';
          }
          .contact-page-text1 {
            color: var(--dl-color-act60directory-c30);
            font-size: 1.5rem;
            max-width: 450px;
          }
          .contact-page-link {
            color: var(--dl-color-act60directory-c30);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .contact-page-form {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-start;
            align-items: flex-start;
            border-color: var(--dl-color-act60directory-c30);
            border-width: 2px;
            border-radius: 25px;
            flex-direction: column;
            justify-content: center;
          }
          .contact-page-input {
            color: var(--dl-color-act60directory-c30);
            width: 500px;
            font-size: 15px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Poppins';
            margin-left: 0px;
            border-color: var(--dl-color-act60directory-c30);
            border-width: 2.5px;
            border-radius: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-bottom: 0.5rem;
            text-transform: capitalize;
            background-color: transparent;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .contact-page-textinput {
            color: var(--dl-color-act60directory-c10);
            width: 500px;
            font-size: 15px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Poppins';
            margin-left: 0px;
            border-color: var(--dl-color-act60directory-c30);
            border-width: 2.5px;
            border-radius: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: capitalize;
            background-color: transparent;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .contact-page-textinput1 {
            width: 500px;
            font-size: 15px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Poppins';
            margin-left: 0px;
            border-color: var(--dl-color-act60directory-c30);
            border-width: 2.5px;
            border-radius: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: capitalize;
            background-color: transparent;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .contact-page-textarea {
            color: var(--dl-color-act60directory-c30);
            width: 500px;
            height: 166px;
            font-size: 15px;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Poppins';
            margin-left: 0px;
            padding-top: 11px;
            border-color: var(--dl-color-act60directory-c30);
            border-width: 2.5px;
            padding-left: 11px;
            border-radius: 0px;
            margin-bottom: var(--dl-space-space-unit);
            padding-right: 11px;
            padding-bottom: 11px;
            text-transform: capitalize;
            background-color: transparent;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .contact-page-button {
            color: var(--dl-color-act60directory-c30);
            align-self: flex-end;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-act60directory-c30);
            border-width: 2px;
            border-radius: 15px;
            margin-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-act60directory-c20);
          }
          .contact-page-image {
            width: 55%;
            object-fit: cover;
          }
          @media (max-width: 479px) {
            .contact-page-hero {
              width: 100%;
              min-width: auto;
              align-self: center;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .contact-page-container1 {
              align-self: flex-start;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
              padding-right: 0px;
            }
            .contact-page-form {
              width: 100%;
              align-self: center;
              align-items: flex-start;
            }
            .contact-page-input {
              width: 350px;
              align-self: center;
              margin-top: var(--dl-space-space-halfunit);
              margin-left: 0px;
              padding-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .contact-page-textinput {
              width: 350px;
              align-self: center;
              margin-left: 0px;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .contact-page-textinput1 {
              width: 350px;
              align-self: center;
              margin-left: 0px;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .contact-page-textarea {
              width: 350px;
              height: 100px;
              align-self: center;
              margin-left: 0px;
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .contact-page-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default ContactPage
