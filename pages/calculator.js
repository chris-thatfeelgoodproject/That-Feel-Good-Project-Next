import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'
import Footer from '../components/footer'

const Calculator = (props) => {
  return (
    <>
      <div className="calculator-container">
        <Head>
          <title>Calculator - Tax Savings Feel Good</title>
          <meta
            property="og:title"
            content="Calculator - Tax Savings Feel Good"
          />
        </Head>
        <Header rootClassName="header-root-class-name3"></Header>
        <div className="calculator-container1">
          <span className="calculator-text">
            <span>Household Income</span>
            <br></br>
            <br></br>
          </span>
          <div className="calculator-container2">
            <span className="calculator-text04">
              <span>0</span>
              <br></br>
            </span>
            <span className="calculator-text07">
              <span>$100,000,00</span>
              <br></br>
            </span>
          </div>
          <div>
            <div className="calculator-container4">
              <Script
                html={`  <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
`}
              ></Script>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .calculator-container {
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
          .calculator-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .calculator-text {
            color: var(--dl-color-act60directory-c10);
          }
          .calculator-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .calculator-text04 {
            color: var(--dl-color-act60directory-c10);
          }
          .calculator-text07 {
            color: var(--dl-color-act60directory-c10);
            margin-left: var(--dl-space-space-fiveunits);
          }
          .calculator-container4 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Calculator
