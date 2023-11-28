import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Blog = (props) => {
  return (
    <>
      <div className="blog-container">
        <Head>
          <title>Blog - Tax Savings Feel Good</title>
          <meta property="og:title" content="Blog - Tax Savings Feel Good" />
        </Head>
        <Header rootClassName="header-root-class-name1"></Header>
        <div className="blog-banner">
          <h1 className="blog-text">Check Out Our Blog!</h1>
        </div>
        <div className="blog-blog">
          <Link href="/blog-post-1">
            <a className="blog-link">
              <div className="blog-container01">
                <div className="blog-blog-post-card">
                  <img
                    alt="image"
                    src="https://i.imgur.com/hObg0MQ.jpg"
                    className="blog-image"
                  />
                  <div className="blog-container02">
                    <span className="blog-text01">
                      Unlocking Financial Freedom: Why Puerto Rico Is Your Tax
                      Haven with Act 60
                    </span>
                    <span className="blog-text02">
                      Seeking a tax haven that transcends the ordinary? Look no
                      further than Puerto Rico, where Act 60 offers a gateway to
                      unparalleled tax benefits. Imagine a place where your
                      financial aspirations align seamlessly with tax savings.
                      Puerto Rico beckons as a haven for those yearning to
                      optimize their wealth. Act 60, also known as the Puerto
                      Rico Incentives Code, opens doors to a realm of
                      unprecedented tax advantages.
                    </span>
                    <div className="blog-container03">
                      <div className="blog-profile">
                        <img
                          alt="profile"
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          className="blog-image01"
                        />
                        <span className="blog-text03">Noah Harper</span>
                      </div>
                      <span className="blog-text04">5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/blog-post-2">
            <a className="blog-link1">
              <div className="blog-container04">
                <div className="blog-blog-post-card1">
                  <img
                    alt="image"
                    src="https://i.imgur.com/WPc9dB3.jpg"
                    className="blog-image02"
                  />
                  <div className="blog-container05">
                    <span className="blog-text05">
                      Puerto Rico&apos;s Appeal Beyond Tax Incentives: Embracing
                      Lifestyle and Culture
                    </span>
                    <span className="blog-text06">
                      <span>
                        Puerto Rico isn&apos;t just a tax haven; it&apos;s a
                        vibrant tapestry woven with rich culture, stunning
                        landscapes, and a lifestyle that complements its
                        financial perks. Beyond the tax incentives offered under
                        Act 60, this Caribbean gem has much more to offer.
                      </span>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                    </span>
                    <div className="blog-container06">
                      <div className="blog-profile1">
                        <img
                          alt="profile"
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          className="blog-image03"
                        />
                        <span className="blog-text13">Noah Harper</span>
                      </div>
                      <span className="blog-text14">5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/blog-post-3">
            <a className="blog-link2">
              <div className="blog-container07">
                <div className="blog-blog-post-card2">
                  <img
                    alt="image"
                    src="https://i.imgur.com/ojX9ajZ.jpg"
                    className="blog-image04"
                  />
                  <div className="blog-container08">
                    <span className="blog-text15">
                      FAQs: Answering Common Questions About Act 60 and Puerto
                      Rico
                    </span>
                    <span className="blog-text16">
                      <span>
                        As interest in Act 60 and its benefits for individuals
                        and businesses considering Puerto Rico continues to
                        grow, it&apos;s essential to address some common
                        queries. Here&apos;s a roundup of frequently asked
                        questions:
                      </span>
                      <br className="blog-text18"></br>
                      <br className="blog-text19"></br>
                      <br className="blog-text20"></br>
                      <br className="blog-text21"></br>
                      <br className="blog-text22"></br>
                      <br></br>
                    </span>
                    <div className="blog-container09">
                      <div className="blog-profile2">
                        <img
                          alt="profile"
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          className="blog-image05"
                        />
                        <span className="blog-text24">Noah Harper</span>
                      </div>
                      <span className="blog-text25">5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="blog-blog1">
          <Link href="/blog-post-4">
            <a className="blog-link3">
              <div className="blog-container10">
                <div className="blog-blog-post-card3">
                  <img
                    alt="image"
                    src="https://i.imgur.com/rB8CkPb.jpg"
                    className="blog-image06"
                  />
                  <div className="blog-container11">
                    <span className="blog-text26">
                      Legal and Financial Considerations When Moving to Puerto
                      Rico
                    </span>
                    <span className="blog-text27">
                      <span>
                        Delve deeply into the multifaceted legal and financial
                        aspects that necessitate consideration when
                        contemplating a relocation to Puerto Rico under Act 60.
                        Explore the intricate legal frameworks and comprehensive
                        financial implications inherent in making such a
                        significant move to ensure a well-informed and strategic
                        decision-making process.
                      </span>
                      <br className="blog-text29"></br>
                      <br></br>
                      <br></br>
                    </span>
                    <div className="blog-container12">
                      <div className="blog-profile3">
                        <img
                          alt="profile"
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          className="blog-image07"
                        />
                        <span className="blog-text32">Noah Harper</span>
                      </div>
                      <span className="blog-text33">5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/blog-post-5">
            <a className="blog-link4">
              <div className="blog-container13">
                <div className="blog-blog-post-card4">
                  <img
                    alt="image"
                    src="https://i.imgur.com/2OjKNFW.jpg"
                    className="blog-image08"
                  />
                  <div className="blog-container14">
                    <span className="blog-text34">
                      <span>The Future of Act 60: Trends and Forecasts</span>
                      <br></br>
                      <br></br>
                    </span>
                    <span className="blog-text38">
                      <span>
                        As Act 60 continues to shape Puerto Rico&apos;s economic
                        landscape with its enticing tax incentives, speculation
                        and curiosity about its future trajectory emerge.
                        Let&apos;s explore some trends and forecasts that might
                        influence the future of Act 60:
                      </span>
                      <br className="blog-text40"></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                    </span>
                    <div className="blog-container15">
                      <div className="blog-profile4">
                        <img
                          alt="profile"
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          className="blog-image09"
                        />
                        <span className="blog-text45">Noah Harper</span>
                      </div>
                      <span className="blog-text46">5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/blog-post-6">
            <a className="blog-link5">
              <div className="blog-container16">
                <div className="blog-blog-post-card5">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1682685797168-613fd0cae41d?q=80&amp;w=1400&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="blog-image10"
                  />
                  <div className="blog-container17">
                    <span className="blog-text47">
                      Demystifying Act 60: A Comprehensive Guide
                    </span>
                    <span className="blog-text48">
                      <span>
                        Navigating the intricate landscape of Act 60, also known
                        as the Puerto Rico Incentives Code, might seem like
                        traversing uncharted territory. However, understanding
                        its provisions is key to unlocking the potential
                        benefits it offers. Here&apos;s a comprehensive guide to
                        demystify Act 60:
                      </span>
                      <br className="blog-text50"></br>
                      <br className="blog-text51"></br>
                      <br className="blog-text52"></br>
                      <br className="blog-text53"></br>
                      <br className="blog-text54"></br>
                      <br className="blog-text55"></br>
                      <br></br>
                    </span>
                    <div className="blog-container18">
                      <div className="blog-profile5">
                        <img
                          alt="profile"
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          className="blog-image11"
                        />
                        <span className="blog-text57">Noah Harper</span>
                      </div>
                      <span className="blog-text58">5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="blog-blog2">
          <Link href="/blog-post-7">
            <a className="blog-link6">
              <div className="blog-container19">
                <div className="blog-blog-post-card6">
                  <img
                    alt="image"
                    src="https://i.imgur.com/MalXhxK.jpg"
                    className="blog-image12"
                  />
                  <div className="blog-container20">
                    <span className="blog-text59">
                      The Financial Advantages of Relocating to Puerto Rico
                      Under Act 60
                    </span>
                    <span className="blog-text60">
                      <span>
                        When it comes to strategic financial planning, few
                        options rival the advantages offered by relocating to
                        Puerto Rico under Act 60. This legislation, designed to
                        attract individuals and businesses, presents a myriad of
                        compelling financial benefits that can reshape your
                        financial landscape.
                      </span>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br className="blog-text65"></br>
                    </span>
                    <div className="blog-container21">
                      <div className="blog-profile6">
                        <img
                          alt="profile"
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          className="blog-image13"
                        />
                        <span className="blog-text66">Noah Harper</span>
                      </div>
                      <span className="blog-text67">5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/blog-post-8">
            <a className="blog-link7">
              <div className="blog-container22">
                <div className="blog-blog-post-card7">
                  <img
                    alt="image"
                    src="https://i.imgur.com/zGfCiOG.jpg"
                    className="blog-image14"
                  />
                  <div className="blog-container23">
                    <span className="blog-text68">
                      <span>
                        Navigating Act 60: Tips and Insights for a Smooth
                        Transition
                      </span>
                      <br></br>
                      <br></br>
                    </span>
                    <span className="blog-text72">
                      <span>
                        Embarking on the journey to leverage Act 60 in Puerto
                        Rico for its tax incentives requires meticulous planning
                        and a clear roadmap. Here are some essential tips and
                        insights to ensure a seamless transition:
                      </span>
                      <br className="blog-text74"></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                    </span>
                    <div className="blog-container24">
                      <div className="blog-profile7">
                        <img
                          alt="profile"
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          className="blog-image15"
                        />
                        <span className="blog-text79">Noah Harper</span>
                      </div>
                      <span className="blog-text80">5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/blog-post-9">
            <a className="blog-link8">
              <div className="blog-container25">
                <div className="blog-blog-post-card8">
                  <img
                    alt="image"
                    src="https://i.imgur.com/TB3bJTW.jpg"
                    className="blog-image16"
                  />
                  <div className="blog-container26">
                    <span className="blog-text81">
                      <span>
                        Puerto Rico&apos;s Business Climate: Opportunities and
                        Challenges
                      </span>
                      <br></br>
                      <br></br>
                    </span>
                    <span className="blog-text85">
                      <span>
                        Puerto Rico&apos;s business landscape is a tapestry
                        woven with both promising opportunities and unique
                        challenges. Understanding the intricacies of this
                        environment is crucial for entrepreneurs and businesses
                        looking to thrive on the island. Let&apos;s explore the
                        diverse facets of Puerto Rico&apos;s business climate
                      </span>
                      <br className="blog-text87"></br>
                      <br className="blog-text88"></br>
                      <br></br>
                    </span>
                    <div className="blog-container27">
                      <div className="blog-profile8">
                        <img
                          alt="profile"
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                          className="blog-image17"
                        />
                        <span className="blog-text90">Noah Harper</span>
                      </div>
                      <span className="blog-text91">5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <Footer rootClassName="footer-root-class-name7"></Footer>
      </div>
      <style jsx>
        {`
          .blog-container {
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
          .blog-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-text {
            font-size: 3rem;
            text-align: center;
            font-family: 'Poppins';
          }
          .blog-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            justify-content: space-between;
          }
          .blog-link {
            display: contents;
          }
          .blog-container01 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            justify-content: center;
            text-decoration: none;
          }
          .blog-blog-post-card {
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
          }
          .blog-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .blog-container02 {
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
          .blog-text01 {
            color: var(--dl-color-act60directory-c10);
            font-size: 1.5rem;
            font-family: 'Poppins';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text02 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-container03 {
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
          .blog-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-image01 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-text03 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-text04 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
          }
          .blog-link1 {
            display: contents;
          }
          .blog-container04 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
            text-decoration: none;
          }
          .blog-blog-post-card1 {
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
          }
          .blog-blog-post-card1:hover {
            transform: scale(1.02);
          }
          .blog-image02 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .blog-container05 {
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
          .blog-text05 {
            color: var(--dl-color-act60directory-c10);
            font-size: 1.5rem;
            font-family: 'Poppins';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text06 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-container06 {
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
          .blog-profile1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-image03 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-text13 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-text14 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
          }
          .blog-link2 {
            display: contents;
          }
          .blog-container07 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-decoration: none;
          }
          .blog-blog-post-card2 {
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
          }
          .blog-blog-post-card2:hover {
            transform: scale(1.02);
          }
          .blog-image04 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .blog-container08 {
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
          .blog-text15 {
            color: var(--dl-color-act60directory-c10);
            font-size: 1.5rem;
            font-family: 'Poppins';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text16 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text18 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-text19 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-text20 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-text21 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-text22 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-container09 {
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
          .blog-profile2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-image05 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-text24 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-text25 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
          }
          .blog-blog1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            justify-content: space-between;
          }
          .blog-link3 {
            display: contents;
          }
          .blog-container10 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            justify-content: center;
            text-decoration: none;
          }
          .blog-blog-post-card3 {
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
          }
          .blog-blog-post-card3:hover {
            transform: scale(1.02);
          }
          .blog-image06 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .blog-container11 {
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
          .blog-text26 {
            color: var(--dl-color-act60directory-c10);
            font-size: 1.5rem;
            font-family: 'Poppins';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text27 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text29 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-container12 {
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
          .blog-profile3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-image07 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-text32 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-text33 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
          }
          .blog-link4 {
            display: contents;
          }
          .blog-container13 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
            text-decoration: none;
          }
          .blog-blog-post-card4 {
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
          }
          .blog-blog-post-card4:hover {
            transform: scale(1.02);
          }
          .blog-image08 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .blog-container14 {
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
          .blog-text34 {
            color: var(--dl-color-act60directory-c10);
            font-size: 1.5rem;
            font-family: 'Poppins';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text38 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text40 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-container15 {
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
          .blog-profile4 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-image09 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-text45 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-text46 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
          }
          .blog-link5 {
            display: contents;
          }
          .blog-container16 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-decoration: none;
          }
          .blog-blog-post-card5 {
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
          }
          .blog-blog-post-card5:hover {
            transform: scale(1.02);
          }
          .blog-image10 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .blog-container17 {
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
          .blog-text47 {
            color: var(--dl-color-act60directory-c10);
            font-size: 1.5rem;
            font-family: 'Poppins';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text48 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text50 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-text51 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-text52 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-text53 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-text54 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-text55 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-container18 {
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
          .blog-profile5 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-image11 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-text57 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-text58 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
          }
          .blog-blog2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            justify-content: space-between;
          }
          .blog-link6 {
            display: contents;
          }
          .blog-container19 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            justify-content: center;
            text-decoration: none;
          }
          .blog-blog-post-card6 {
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
          }
          .blog-blog-post-card6:hover {
            transform: scale(1.02);
          }
          .blog-image12 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .blog-container20 {
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
          .blog-text59 {
            color: var(--dl-color-act60directory-c10);
            font-size: 1.5rem;
            font-family: 'Poppins';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text60 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text65 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-container21 {
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
          .blog-profile6 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-image13 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-text66 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-text67 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
          }
          .blog-link7 {
            display: contents;
          }
          .blog-container22 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
            text-decoration: none;
          }
          .blog-blog-post-card7 {
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
          }
          .blog-blog-post-card7:hover {
            transform: scale(1.02);
          }
          .blog-image14 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .blog-container23 {
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
          .blog-text68 {
            color: var(--dl-color-act60directory-c10);
            font-size: 1.5rem;
            font-family: 'Poppins';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text72 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text74 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-container24 {
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
          .blog-profile7 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-image15 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-text79 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-text80 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
          }
          .blog-link8 {
            display: contents;
          }
          .blog-container25 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-decoration: none;
          }
          .blog-blog-post-card8 {
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
          }
          .blog-blog-post-card8:hover {
            transform: scale(1.02);
          }
          .blog-image16 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .blog-container26 {
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
          .blog-text81 {
            color: var(--dl-color-act60directory-c10);
            font-size: 1.5rem;
            font-family: 'Poppins';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text85 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-text87 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-text88 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 400;
          }
          .blog-container27 {
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
          .blog-profile8 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-image17 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-text90 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-text91 {
            color: var(--dl-color-act60directory-c10);
            font-weight: 300;
          }
          @media (max-width: 767px) {
            .blog-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .blog-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .blog-blog {
              align-self: center;
              align-items: center;
              margin-left: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .blog-container01 {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-container04 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-container07 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .blog-blog1 {
              align-self: center;
              align-items: center;
              margin-left: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .blog-container10 {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-container13 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-container16 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .blog-blog2 {
              align-self: center;
              align-items: center;
              margin-left: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .blog-container19 {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-container22 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-container25 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Blog
