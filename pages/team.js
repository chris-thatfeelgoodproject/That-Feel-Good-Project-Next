import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Team = (props) => {
  return (
    <>
      <div className="team-container">
        <Head>
          <title>Team - Tax Savings Feel Good</title>
          <meta property="og:title" content="Team - Tax Savings Feel Good" />
        </Head>
        <Header rootClassName="header-root-class-name15"></Header>
        <div className="team-banner">
          <h1 className="team-text">Meet Our Team</h1>
        </div>
        <div className="team-hero">
          <img
            alt="image"
            src="https://i.imgur.com/ubGH6bZ.png"
            className="team-image"
          />
          <div className="team-container1">
            <h1 className="team-text01">Matthew James, Founder | CEO | CFO</h1>
            <span className="team-text02">
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
                My mission is to provide our clients with an amazing rental
                property in Puerto Rico, where they can enjoy the island&apos;s
                beauty and culture, while saving a significant amount of money
                on their taxes. I am passionate about creating value for our
                clients, our team, and our community, by leveraging my skills in
                process improvement, financial accounting, financial reporting,
                and tax optimization. I am also the founder of That Feel Good
                Project, a social enterprise that supports local causes and
                initiatives in Puerto Rico.
              </span>
            </span>
          </div>
        </div>
        <div className="team-hero1">
          <div className="team-container2">
            <h1 className="team-text07">Chris Pettyjohn, Co-Founder | CTO</h1>
            <span className="team-text08">
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
            className="team-image1"
          />
        </div>
        <Footer rootClassName="footer-root-class-name17"></Footer>
      </div>
      <style jsx>
        {`
          .team-container {
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
          .team-banner {
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
          .team-text {
            color: var(--dl-color-act60directory-c30);
            font-size: 3rem;
            text-align: center;
            font-family: 'Poppins';
          }
          .team-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .team-image {
            width: 20rem;
            object-fit: cover;
            border-radius: 25px;
          }
          .team-container1 {
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .team-text01 {
            color: var(--dl-color-act60directory-c30);
            font-size: 2rem;
            align-self: flex-start;
            text-align: center;
            font-family: 'Poppins';
          }
          .team-text02 {
            color: var(--dl-color-act60directory-c30);
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Quicksand';
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .team-hero1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .team-container2 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .team-text07 {
            color: var(--dl-color-act60directory-c30);
            font-size: 2rem;
            max-width: auto;
            font-family: 'Poppins';
          }
          .team-text08 {
            color: var(--dl-color-act60directory-c30);
            margin-top: var(--dl-space-space-unit);
            font-family: 'Quicksand';
            margin-bottom: var(--dl-space-space-unit);
          }
          .team-image1 {
            width: 20rem;
            object-fit: cover;
            border-radius: 25px;
          }
          @media (max-width: 479px) {
            .team-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .team-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .team-container1 {
              position: relative;
              margin-bottom: var(--dl-space-space-unit);
            }
            .team-text01 {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: left;
            }
            .team-text02 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .team-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .team-container2 {
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

export default Team
