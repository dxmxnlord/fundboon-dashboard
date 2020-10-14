import React from 'react';
import { Link } from 'react-router-dom';

import Icons8 from './Icons8';
import CallBack from './CallBack';
import fundboonLogoFullWhite from '../../assets/img/fundboon-logo-full-white.png';

const Footer = () => {
  return (
    <div id="Footer" className="">
      {/* <CallBack /> */}
      <div className="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 198.97">
          <title>Small Waves</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="cls-1"
                d="M1601,2V201H1V83a223.13,223.13,0,0,1,80-8.44c4.3.31,8.63.23,13,.33,4.53.69,9,1.59,13.6,2C130,79.05,151.79,84,173.27,90.6c37.07,11.35,70.54,30.09,103.43,50.13,16.74,10.21,33.56,20.4,51,29.38,27.69,14.29,57,23.49,88.35,26.1,24.65,2,48.72.39,72.37-7.14,23-7.33,43.93-19,64.56-31.18,1.39-.82,2.13-2.74,3.17-4.15,2-.45,4.25-.44,5.9-1.44,10.54-6.39,21-13,31.38-19.54,35.44-22.36,72.11-42.23,111.85-56,45-15.63,91.51-23.3,139-25.17,66.82-2.64,132.72,3.32,197.35,21.19A68.51,68.51,0,0,0,1049,74c6.11,2.1,12.26,4.08,18.31,6.31,31.37,11.59,62.75,23.15,94,34.92,26.63,10,53.21,20.11,81.63,24.07a183.41,183.41,0,0,0,63.89-2c37.65-8,69.6-27.64,100.94-48.63q24.87-16.65,49.68-33.41Q1466.74,49,1476,42.87a58.1,58.1,0,0,0,5.51-2.13c8.76-4.37,17.35-9.11,26.23-13.21A291.23,291.23,0,0,1,1601,2Z"
                transform="translate(-1 -2)"
              />
              <path
                className="cls-2"
                d="M94,74.89C145.44,46.26,199.2,24.58,259.16,23.47c40.06-.74,78.28,8.74,115.38,23.2C419.36,64.14,460.14,89,500,115.54c18.84,12.55,37.44,25.46,56.15,38.2-1,1.41-1.78,3.33-3.17,4.15-20.63,12.22-41.54,23.85-64.56,31.18-23.65,7.53-47.72,9.19-72.37,7.14-31.33-2.61-60.66-11.81-88.35-26.1-17.42-9-34.24-19.17-51-29.38-32.89-20-66.36-38.78-103.43-50.13C151.79,84,130,79.05,107.55,76.91,103,76.48,98.48,75.58,94,74.89Z"
                transform="translate(-1 -2)"
              />
              <path
                className="cls-2"
                d="M1049,74c27.36-16,56.57-27.45,87.07-35.75,42.71-11.62,86.35-16.65,130.48-17.23,61.77-.82,123.25,2.54,183.92,15.27,8.61,1.81,17.07,4.4,25.6,6.63q-9.29,6.18-18.57,12.38-24.84,16.69-49.68,33.41c-31.34,21-63.29,40.66-100.94,48.63a183.41,183.41,0,0,1-63.89,2c-28.42-4-55-14-81.63-24.07-31.3-11.77-62.68-23.33-94-34.92C1061.23,78,1055.08,76.05,1049,74Z"
                transform="translate(-1 -2)"
              />
            </g>
          </g>
        </svg>
      </div>

      <div className="w-150 py-6 text-light bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-1">
              <img
                className="brand-logo"
                src={fundboonLogoFullWhite}
                alt="Fundboon Logo"
              />
              <br />
              <br />
              <p className="text-justify pr-md-4">
              Fundboon is a one-stop solution to compare loans and insurance products from various lenders. Find
the best loans, credit card deals and other financial product for you today!
              </p>
            </div>

            {/* <div className="col-md-2 col-2  order-3 pt-5 pb-4 py-md-3 order-md-2 d-none d-sm-block d-sm-none d-md-block text-center">
              <h5>Loans</h5>
              <ul className="list-unstyled ">
                <li>
                  <a href="/homeloan" className="text-white">
                    Home Loan
                  </a>
                </li>
                <li>
                  <a href="/personalloan" className="text-white">
                    Personal Loan
                  </a>
                </li>
                <li>
                  <a href="/mortgageloan" className="text-white">
                    Mortgage Loan
                  </a>
                </li>
                <li>
                  <a href="/insurance" className="text-white">
                    Insurance
                  </a>
                </li>
              </ul>
            </div> */}

            <div className="col-md-2 col-2  order-3 pt-5 pb-4 py-md-3 d-none d-sm-block d-sm-none d-md-block order-md-2 text-center">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/about" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contactus" className="text-white">
                    Contact Us
                  </a>
                </li>

                <li>
                  <a href="/trackapp" className="text-white">
                    Track Application
                  </a>
                </li>
                <li>
                  <a href="/emicalculator" className="text-white">
                    EMI Calculator
                  </a>
                </li>
              </ul>
            </div>

            {/* <div className="col-md-6 col-6  order-3 pt-5 pb-4 py-md-3 order-md-2 d-lg-none .d-xl-block d-md-none .d-lg-block text-center">
              <h5>Loans</h5>
              <ul className="list-unstyled ">
                <li>
                  <a href="/homeloan" className="text-white">
                    Home Loan
                  </a>
                </li>
                <li>
                  <a href="/personalloan" className="text-white">
                    Personal Loan
                  </a>
                </li>
                <li>
                  <a href="/mortgageloan" className="text-white">
                    Mortgage Loan
                  </a>
                </li>
                <li>
                  <a href="/insurance" className="text-white">
                    Insurance
                  </a>
                </li>
              </ul>
            </div> */}

            <div className="col-md-6 col-6  order-3 pt-5 pb-4 py-md-3 order-md-2 d-lg-none .d-xl-block d-md-none .d-lg-block text-center">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/about" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contactus" className="text-white">
                    Contact Us
                  </a>
                </li>

                <li>
                  <a href="/trackapp" className="text-white">
                    Track Application
                  </a>
                </li>
                <li>
                  <a href="/emicalculator" className="text-white">
                    EMI Calculator
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="col-md-3 col-3  order-3 pt-5 pb-4 py-md-3 d-none d-sm-block d-sm-none d-md-block order-md-2 text-center"
              style={{ float: 'right' }}
            >
              <h5>Loans – Resident</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/homeloan" className="text-white">
                  Home Loan
                  </a>
                </li>
                <li>
                  <a href="/mortgageloan" className="text-white">
                  Mortgage Loan
                  </a>
                </li>
                <li>
                  <a href="/personalloan" className="text-white">
                  Personal Loan
                  </a>
                </li>
                <li>
                  <a href="/businessloan" className="text-white">
                  Business Loan
                  </a>
                </li>
              </ul>

            </div>
            <div className="col-md-6 col-6  order-3 pt-5 pb-4 py-md-3 order-md-2 d-lg-none .d-xl-block d-md-none .d-lg-block text-center">
            <h5>Loans – Resident</h5>
            <ul className="list-unstyled">
                <li>
                  <a href="/homeloan" className="text-white">
                  Home Loan
                  </a>
                </li>
                <li>
                  <a href="/mortgageloan" className="text-white">
                  Mortgage Loan
                  </a>
                </li>
                <li>
                  <a href="/personalloan" className="text-white">
                  Personal Loan
                  </a>
                </li>
                <li>
                  <a href="/businessloan" className="text-white">
                  Business Loan
                  </a>
                </li>
              </ul>
            </div>


            <br className="d-lg-none .d-xl-block d-md-none .d-lg-block" />

            <div className="col-md-5 order-2 order-md-3">
              <br />
              <div className="social-icons">
                <a
                  target="__blank__"
                  href="https://www.linkedin.com/company/fundboon/about/"
                >
                  <Icons8 size="36">linkedin</Icons8>
                </a>
                &ensp;
                <a target="__blank__" href="https://www.facebook.com/efundboon">
                  <Icons8 size="36">facebook</Icons8>
                </a>
                &ensp;
                <a target="__blank__" href="https://twitter.com/fundboon">
                  <Icons8 size="36">twitter-squared</Icons8>
                </a>
                &ensp;
                <a target="__blank__" href="mailto:info@fundboon.com">
                  <Icons8 size="36">post</Icons8>
                </a>
              </div>
              <br className="d-md-none" />
              <br className="d-md-none" />
            </div>
            <div className="col-md-7 order-4">
              <br />
              <Link to="/termsofuse" className="text-light">
                Terms & Conditions
              </Link>
              <span>&ensp;|&ensp;</span>
              <Link to="/privacypolicy" className="text-light">
                Privacy Policy
              </Link>
              <span>&ensp;|&ensp;</span>
              <Link to="/disclaimer" className="text-light">
                Disclaimer
              </Link>
              {/* <span>&ensp;|&ensp;</span>
              <Link to="/" className="text-light">
                Contact Us
              </Link> */}
              <br />
              <br />
              <p className="text-muted">
                © Copyright 2013-2020 Fundboon.com. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
