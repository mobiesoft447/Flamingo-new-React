import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './contact-us.css'

const ContactUs = (props) => {
  return (
    <div className="contact-us-container10">
      <Helmet>
        <title>Contact-Us - Flamingo new</title>
        <meta property="og:title" content="Contact-Us - Flamingo new" />
      </Helmet>
      <header data-thq="thq-navbar" className="contact-us-navbar-interactive">
        <Link to="/" className="contact-us-navlink10">
          <img
            alt="logo"
            src="/flamingo-tissue-1500h.png"
            className="contact-us-image"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="contact-us-desktop-menu">
          <nav className="contact-us-links">
            <Link to="/" className="contact-us-navlink11">
              <span>Home</span>
              <br></br>
            </Link>
            <Link to="/about" className="contact-us-navlink12">
              About Flamingo
            </Link>
            <Link to="/wholesale" className="contact-us-navlink13">
              Wholesale
            </Link>
            <Link to="/mgt" className="contact-us-navlink14">
              Management
            </Link>
            <span className="contact-us-text12">FAQ</span>
            <Link to="/products" className="contact-us-navlink15">
              Products
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="contact-us-burger-menu">
          <svg viewBox="0 0 1024 1024" className="contact-us-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="contact-us-mobile-menu">
          <div className="contact-us-nav">
            <div className="contact-us-top">
              <img
                alt="image"
                src="/flamingo-tissue-1500h.png"
                className="contact-us-logo"
              />
              <div data-thq="thq-close-menu" className="contact-us-close-menu">
                <svg viewBox="0 0 1024 1024" className="contact-us-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <Link to="/" className="contact-us-navlink16">
              <span>Home</span>
              <br></br>
            </Link>
            <Link to="/about" className="contact-us-navlink17">
              About Flamingo
            </Link>
            <Link to="/wholesale" className="contact-us-navlink18">
              Wholesale
            </Link>
            <Link to="/mgt" className="contact-us-navlink19">
              Management
            </Link>
            <Link to="/faqs" className="contact-us-navlink20">
              FAQ
            </Link>
            <Link to="/products" className="contact-us-navlink21">
              Products
            </Link>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="contact-us-icon14"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="contact-us-icon16"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="contact-us-icon18"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="contact-us-container11">
        <div className="contact-us-container12">
          <span className="contact-us-text15">Contact Us</span>
          <span className="contact-us-text16">
            <span className="contact-us-text17">Our Location</span>
            <br></br>
            <br className="contact-us-text19"></br>
            <span className="contact-us-text20">Flamingo Tissue</span>
            <br></br>
            <span>Flamingo Tissue</span>
            <br></br>
            <span>15117 Salt Lake Avenue</span>
            <br></br>
            <span>City of Industry, CA 91746</span>
          </span>
          <span className="contact-us-text27">
            <span className="contact-us-text28">Telephone</span>
            <br></br>
            <span>888-580-8091</span>
          </span>
        </div>
      </div>
      <div className="contact-us-container13">
        <div className="contact-us-container14">
          <span className="contact-us-text31">Information</span>
          <Link to="/faqs" className="contact-us-navlink22">
            FAQs
          </Link>
          <Link to="/legal-agg" className="contact-us-navlink23">
            Legal Agreement
          </Link>
          <Link to="/about" className="contact-us-navlink24">
            About Flamingo
          </Link>
          <Link to="/mgt" className="contact-us-navlink25">
            Management
          </Link>
          <Link to="/delivery-info" className="contact-us-navlink26">
            Delivery Information
          </Link>
          <Link to="/priv-pol" className="contact-us-navlink27">
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" className="contact-us-navlink28">
            Terms &amp; Conditions
          </Link>
        </div>
        <div className="contact-us-container15">
          <span className="contact-us-text32">Customer Service</span>
          <Link to="/contact-us" className="contact-us-navlink29">
            Contact Us
          </Link>
          <a
            href="https://web.archive.org/web/20180825010204/https://flamingotissue.com/index.php?route=account/return/add"
            className="contact-us-link1"
          >
            Returns
          </a>
          <a
            href="https://web.archive.org/web/20180825001909/http://flamingotissue.com/index.php?route=information/sitemap"
            className="contact-us-link2"
          >
            Site Map
          </a>
        </div>
        <div className="contact-us-container16">
          <span className="contact-us-text33">Extras</span>
          <a
            href="https://web.archive.org/web/20180825012304/https://flamingotissue.com/index.php?route=account/voucher"
            className="contact-us-link3"
          >
            Gift Certificates
          </a>
          <a
            href="https://web.archive.org/web/20181109163624/https://flamingotissue.com/index.php?route=affiliate/login"
            className="contact-us-link4"
          >
            Affiliates
          </a>
          <Link to="/specials" className="contact-us-navlink30">
            Specials
          </Link>
        </div>
        <div className="contact-us-container17">
          <span className="contact-us-text34">My Account</span>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="contact-us-link5"
          >
            My Account
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="contact-us-link6"
          >
            Order History
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="contact-us-link7"
          >
            Wish List
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="contact-us-link8"
          >
            Newsletter
          </a>
        </div>
      </div>
      <div className="contact-us-container18">
        <div className="contact-us-container19"></div>
        <span className="contact-us-text35">
          Copyright © 1965 - 2017 Flamingo Paper Products, Inc. All Rights
          Reserved.
        </span>
      </div>
    </div>
  )
}

export default ContactUs
