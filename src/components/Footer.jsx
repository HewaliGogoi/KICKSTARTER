import React from "react";
import styled from "styled-components";
import { Footer_headings, Footer_text_section, Copyright, Social_media, Settings_section,Footer_bottom} from "./Style.module";
import { Link } from "react-router-dom";
import bottom from "./bottom.jpeg";

export const Footer = () => {
  return (
    <div className="footer-container" style={{position:"relative"}}>
        <img src={bottom} style={{position:"absolute", zIndex:-10, bottom:0, right:0, width:"30%"}} alt="" />
        <Footer_headings>
            <Link className="nav-link active" aria-current="page" to="/">
            Arts
            </Link>
            <Link className="nav-link active" aria-current="page" to="/">
            Comics & Illustration
            </Link>
            <Link className="nav-link active" aria-current="page" to="/">
            Design & Tech
            </Link>
            <Link className="nav-link active" aria-current="page" to="/">
            Film
            </Link>
            <Link className="nav-link active" aria-current="page" to="/">
            Food & Craft
            </Link>
            <Link className="nav-link active" aria-current="page" to="/">
            Games
            </Link>
            <Link className="nav-link active" aria-current="page" to="/">
            Music
            </Link>
            <Link className="nav-link active" aria-current="page" to="/">
            Publishing
            </Link>
        </Footer_headings>
        <Footer_text_section>
            <div className="about-section">
                <h6 style={{fontWeight:"600"}}>About</h6>
                <ul>
                    <a href="https://www.kickstarter.com/about?ref=global-footer"
                    target="_blank" style={{color:"black", textDecoration:"none"}}>About us</a>
                    <br />

                    <a href="https://www.kickstarter.com/charter?ref=global-footer" target="_blank" style={{color:"black", textDecoration:"none"}}>Our chapter</a>
                    <br />

                    <a href="https://www.kickstarter.com/help/stats?ref=global-footer" target="_blank" style={{color:"black", textDecoration:"none"}}>Stats</a>
                    <br />

                    <a href="https://www.kickstarter.com/press?ref=global-footer" target="_blank" style={{color:"black", textDecoration:"none"}}>Press</a>
                    <br />

                    <a href="https://www.kickstarter.com/jobs?ref=global-footer" target="_blank" style={{color:"black", textDecoration:"none"}}>Jobs</a>
                </ul>
            </div>

            <div className="support-section">
                <h6 style={{fontWeight:"600"}}>Support</h6>
                <ul>
                    <a href="https://help.kickstarter.com/hc/en-us" target="_blank" style={{color:"black", textDecoration:"none"}}>
                    Help Center
                    </a>
                    <br />

                    <a
                    href="https://www.kickstarter.com/rules?ref=global-footer"
                    target="_blank" style={{color:"black", textDecoration:"none"}}
                    >
                    Our Rules
                    </a>
                    <br />

                    <a
                    href="https://www.kickstarter.com/help/handbook?ref=global-footer"
                    target="_blank" style={{color:"black", textDecoration:"none"}}
                    >
                    Creator Handbook
                    </a>
                    <br />

                    <a
                    href="https://www.kickstarter.com/patrons?ref=global-footer"
                    target="_blank" style={{color:"black", textDecoration:"none"}}
                    >
                    Patrons
                    </a>
                    <br />

                    <a
                    href="https://www.kickstarter.com/help/brand_assets?ref=global-footer"
                    target="_blank" style={{color:"black", textDecoration:"none"}}
                    >
                    Brand assets
                    </a>
                    <br />
                </ul>
            </div>

            <div className="more-section">
                <h6 style={{fontWeight:"600"}}>More from Kickstarter</h6>
                <ul>
                    <a
                    href="https://www.kickstarter.com/newsletters?ref=global-footer"
                    target="_blank" style={{color:"black", textDecoration:"none"}}
                    >
                    Newsletter
                    </a>
                    <br />

                    <a
                    href="https://www.kickstarter.com/magazine?ref=global-footer"
                    target="_blank" style={{color:"black", textDecoration:"none"}}
                    >
                    Kickstarter Magazine
                    </a>
                    <br />

                    <a
                    href="https://thecreativeindependent.com/?ref=global-footer"
                    target="_blank" style={{color:"black", textDecoration:"none"}}
                    >
                    The Creative Independent
                    </a>
                    <br />

                    <a
                    href="https://www.kickstarter.com/mobile?ref=global-footer"
                    target="_blank" style={{color:"black", textDecoration:"none"}}
                    >
                    Mobile apps
                    </a>
                    <br />

                    <a
                    href="https://www.kickstarter.com/research?ref=global-footer"
                    target="_blank" style={{color:"black", textDecoration:"none"}}
                    >
                    Research
                    </a>
                    <br />
                </ul>
            </div>
        </Footer_text_section>

            <div className="footer-bottom">
                    <div className="copyright-and-icons">
                        <Copyright>
                             <i className="fa-brands fa-kickstarter-k"></i> 
                            <span> Kickstarter, PBC © 2022</span>
                        </Copyright>
                        <Social_media>
                        <div>
                            <a href="#" target="_blank">
                            <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="#" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#" target="_blank">
                            <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#" target="_blank">
                            <i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                           
                        </Social_media>
                     </div>

                    <Settings_section>
                        <div className="language-settings">
                            <select style={{border:"none", boxShadow:"0px 0px 1px 1px #cecece"}}>
                                    <option value="en">English</option>
                                    <option value="en">Hindi</option>
                                    <option value="en">Chinese</option>
                                    <option value="en">Deutsch</option>
                                    <option value="en">Espanol</option>
                                    <option value="en">Italiano</option>

                            </select> 
                        </div>
                        <div className="currency-settings">
                            <select style={{border:"none", boxShadow:"0px 0px 1px 1px #cecece"}}>
                                    <option value="USD">$  US Dollar (USD)</option>
                                    <option value="USD"> Euro (EUR)</option>
                                    <option value="USD">  Zloty (PLN))</option>
                                    <option value="USD"> Canadian Doolar(CAD))</option>
                                    <option value="USD"> Australian Dollar(AUD)</option>
                                    <option value="USD">  Swedish Krona (SEK)</option>

                            </select>
                        </div>
                    </Settings_section>
            </div>
            <Footer_bottom>

                    <Link className="nav-link active" aria-current="page" to="/">
                    Trust $ Safety
                    </Link>
                    <Link className="nav-link active" aria-current="page" to="/">
                    Terms of Use
                    </Link>
                    <Link className="nav-link active" aria-current="page" to="/">
                    Privacy Policy
                    </Link>
                    <Link className="nav-link active" aria-current="page" to="/">
                    Cookie Policy
                    </Link>
                    <Link className="nav-link active" aria-current="page" to="/">
                    Accessbility Statement
                    </Link>
                    <Link className="nav-link active" aria-current="page" to="/">
                    CA Notice of Consent
                    </Link>
               
            </Footer_bottom>
    </div>
  );
};

export default Footer;
