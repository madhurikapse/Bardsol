import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="mt-5">
      <div className="container">
        <div className="row footer-inner">
          <div className="col-lg-6 col-md-5 col-sm-6 col-5">
            <figure className="wp-block-image size-full">
              <img
                loading="lazy"
                decoding="async"
                width="255"
                height="83"
                src="https://bradsol.com/wp-content/uploads/2021/08/bradsol-logo2.png"
                alt=""
                className="wp-image-64"
              />
            </figure>
          </div>
          <div className="col-lg-6 col-md-7 col-sm-6 col-7 vertical-center footer-links">
            <div className="footer-links__item">
              <div id="my_nav" className="menu-footer-menu-container">
                <ul id="menu-footer-menu" className="list-inline">
                  <li id="menu-item-326" className="menu-item">
                    <a href="https://bradsol.com/careers/">Careers</a>
                  </li>
                  <li id="menu-item-328" className="menu-item">
                    <a href="https://bradsol.com/contact-us/">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-links__item">
              <div className="social-links align-items-center float-lg-end float-md-end float-sm-none">
                <div className="d-flex">
                  <a href="https://www.facebook.com/bradsolutions/">
                    <img
                      decoding="async"
                      src="https://bradsol.com/wp-content/uploads/2023/09/fb.svg"
                      alt="facebook"
                    />
                  </a>
                  <br />
                  <a href="https://twitter.com/brad_solutions">
                    <img
                      decoding="async"
                      src="https://bradsol.com/wp-content/uploads/2023/09/tw.svg"
                      alt="twitter"
                    />
                  </a>
                  <br />
                  <a href="https://www.linkedin.com/company/bradsol">
                    <img
                      decoding="async"
                      src="https://bradsol.com/wp-content/uploads/2023/09/in.svg"
                      alt="linkedin"
                    />
                  </a>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyrightsec">
          <div className="row mt-3">
            <div className="col-md-10 p-0">
              <div className="float-lg-left float-md-left float-sm-none">
                <p className="copyright"></p>
                <p>© {currentYear} Bradsol. All rights reserved.</p>
                <p className="copyrightinfo">
                  Automation is the foundation of efficiency, and we build it best. Unleash the potential within your business with the best Robotic Process Automation Services in the U.S.A.
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="float-lg-end float-md-end float-sm-none"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
