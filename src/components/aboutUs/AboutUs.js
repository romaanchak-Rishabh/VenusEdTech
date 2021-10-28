import React from 'react';

import "./AboutUs.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import about from "../../assets/about.jpg";
import avinash from "../../assets/avinash.jfif";
import khushboo from "../../assets/khushboo.jfif";
import rishabh from "../../assets/rishabh.jfif";

function AboutUs() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };

    return (
        <div className='about-main'>
            <section className="about">
                <div className="about-img">
                    <img src={about} alt="about" />
                </div>
                <div className="about-text">
                    <h1>Venus Education</h1>
                    <h2> EVERY STUDENT DESERVES MORE </h2>
                    <p className="about-text-desc">
                    Venus Ed. aims at providing world-class educational resources for students, breaking geographical bounds, covering every topic related to Information and Technology.
                    </p>
                    <ul>
                        <li>INCULCATING INNOVATION</li>
                        <li>VERIFIED CONTENT</li>
                        <li>EXPERTS EDUCATORS</li>
                        <li>PERSONALISED LEARNING</li>
                    </ul>
                    <p className='about-text-desc'>
                    Venus Education was found by three engineering students during their graduation. They had common interests in IT specializations and wanted to provide a simpler platform for other students to achieve their goals and strive for success in IT field.
                    </p>
                </div>
            </section>
            <div class="section-title">
                <h1>Mission</h1>
                <hr />
                <p>Our goal is to help build a better technological world.</p>
            </div>
            <div class="section-title">
                <h1>Vision</h1>
                <hr />
                <p>Our primary focus is to provide in-depth educational resources accessible to everyone. We provide material and resources for domains related to information and technology and various certifications like CCNA, CEH, AWS, etc.
            At Venus, we strongly imbibe our principles to provide quality education, inclusive of everyone focused on self-paced personalized learning.
            </p>
            </div>

            <div class="section-title">
                <h1>Founders</h1>
                <hr />
            </div>
       <section className='founders'>
            <Carousel responsive={responsive} showDots={true}>
                <div className='founder-main-item'>
                    <div className='founder-img'>
                        <img src={avinash} alt='avinash'/>
                    </div>
                    <h3>Avinash</h3>
                    <h4>Designer</h4>
                    <p>He is versatile and has good knowledge and skills related to graphic designing and web designing.</p>
                </div>
                <div className='founder-main-item'>
                    <div className='founder-img'>
                        <img src={khushboo} alt="khushboo" />
                    </div>
                    <h3>Khushboo</h3>
                    <h4>Content Writer</h4>
                    <p>Khushboo is an avid reader and writer from a young age.</p>
                </div>
                <div className='founder-main-item'>
                    <div className='founder-img'>
                        <img src={rishabh}alt="rishabh" />
                    </div>
                    <h3>Rishabh Tater</h3>
                    <h4>Developer</h4>
                    <p>Rishabh is a full-stack web developer with good knowledge of React and Node.js. He has developed websites for many organizations as well.</p>
                </div> 
            </Carousel>
        </section>
        </div>
    )
}

export default AboutUs
