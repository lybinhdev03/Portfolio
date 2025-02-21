import avt from '../../assets/img/about/avatar.jpg'
import cv from '../../assets/PDF/Ly-Hong-Binh-TopCV.vn-150225.203731.pdf'
import React, { useEffect, useRef } from 'react'

import Parallax from 'parallax-js'

export const About = () => {

    const senceEl = useRef(null);
    useEffect(() => {
        if (senceEl && senceEl.current) {
            const parallaxInstance = new Parallax(senceEl.current, {
                relativeInput: true,
                hoverOnly: true,
            });

            parallaxInstance.enable();

            return () => parallaxInstance.disable();
        }
    }, []);

    return (
        <>
            <div className="arlo_tm_section relative" id="about">
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>About Me</h3>
                            <span>Main informations about me</span>
                        </div>
                        <div className="arlo_tm_about_wrap">
                            <div className="author_wrap">
                                <div className="leftbox">
                                    <div ref={senceEl} className="about_image_wrap parallax" data-relative-input="true">
                                        <div className="image layer" data-depth="0.2">
                                            <img src="img/about/550x640.jpg" alt="550x640" />
                                            <div className="inner" data-img-url={avt}
                                                style={{ backgroundImage: `url(${avt})` }}
                                            ></div>
                                        </div>
                                        <div className="border layer" data-depth="0.4">
                                            <img src="img/about/550x640.jpg" alt="550x640" />
                                            <div className="inner"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="rightbox">
                                    <div className="arlo_tm_mini_title_holder">
                                        <h4>I'm Lý Bính <span className="arlo_tm_animation_text_word"></span></h4>
                                    </div>
                                    <div className="definition">
                                        <p>Hi! My name is <strong>Lý Hồng Bính</strong>. I am a Web Developer, I am 21 years old and I live in Ha Noi .</p>
                                    </div>
                                    <div className="about_short_contact_wrap">
                                        <ul>
                                            <li>
                                                <span><label>Birthday:</label> 20.10.2003</span>
                                            </li>
                                            <li>
                                                <span><label>Age:</label> 21</span>
                                            </li>
                                            <li>
                                                <span><label>City:</label> Hà Nội, Việt Nam</span>
                                            </li>
                                            <li>
                                                <span><label>Interests:</label> Soccer, Reading Book</span>
                                            </li>
                                            <li>
                                                <span><label>Study:</label> University of Economics - Technology for Industries</span>
                                            </li>
                                            <li>
                                                <span><label>Degree:</label> Master</span>
                                            </li>
                                            <li>
                                                <span><label>Website:</label> <a href="https://www.facebook.com/profile.php?id=100040954911335">https://www.facebook.com</a></span>
                                            </li>
                                            <li>
                                                <span><label>Mail:</label> <a href="mailto:lybinhdeveloper@gmail.com">lybinhdeveloper&#64;gmail.com</a></span>
                                            </li>
                                            <li>
                                                <span><label>Phone:</label> <a href="#">+84 329 365 472</a></span>
                                            </li>
                                            <li>
                                                <span><label>Twitter:</label> <a href="#">&#64;lybinh</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="buttons_wrap">
                                        <ul>
                                            <li>
                                                <a href={cv} download>Download CV</a>
                                            </li>
                                            <li className="anchor">
                                                <a href="#contact"><span>Send Message</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
