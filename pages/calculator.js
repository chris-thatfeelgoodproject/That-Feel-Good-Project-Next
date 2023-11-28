import React, { useMemo, useState } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'
import Footer from '../components/footer'

const ONE_BILLION = 1000000000;

const AVG_FED_TAX_REMAIN = .60;

const AVG_ACT_60_REMAIN = .96;

const Calculator = (props) => {
  const [currentIncome, setCurrentIncome] = useState(0);

  const onChangeIncome = (event) => {
    setCurrentIncome(event.target.value);
  }

  const formattedIncome = useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(currentIncome);
  }, [currentIncome]);

  const netIncomeAverageFederalTaxes = useMemo(() => {
    const net = currentIncome <= 0 ? 0 : Number(currentIncome * AVG_FED_TAX_REMAIN);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(net);
  }, [currentIncome]);

  const netIncomeAverageAct60 = useMemo(() => {
    const net = currentIncome <= 0 ? 0 : Number(currentIncome * AVG_ACT_60_REMAIN);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(net);
  }, [currentIncome]);

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
        <div>
          <div style={{ fontSize: 30 }}>
            <b>Gross Income</b>
            <br />
            <span>{formattedIncome}</span>
            <br></br>
            <b>Net Income <i>after deducting average taxes</i></b>
            <br />
            <span>{netIncomeAverageFederalTaxes}</span>
            <br></br>
            <b>Net Income <i>under act 60</i></b>
            <br />
            <span>{netIncomeAverageAct60}</span>
            <br></br>
          </div>
          <input type="range" style={{ width: '100%' }} min={0} max={ONE_BILLION} value={currentIncome} onChange={onChangeIncome} class="slider" />
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
