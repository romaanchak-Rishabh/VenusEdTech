import React from "react";
import reactDom from "react-dom";

import './OpeningPage.css';

import topImg from "../../assets/top-img.jpeg";
import studentImg from "../../assets/students.jpeg";
import teacherImg from "../../assets/teachers.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import one from "../../assets/1.jpeg";
import two from "../../assets/2.jpeg";
import three from "../../assets/3.jpeg";
import four from "../../assets/4.jpeg";
import testimonialOone from "../../assets/t1.jpeg";
import testimonialTwo from "../../assets/t2.jpeg";
import testimonialThree from "../../assets/t3.jpeg";

const OpeningPage = () => {
    return (
        <div className='opening-page'>
            <div className='opening-page-top'>
                <div className='opening-page-top-text'>
                    <h1>EVERY STUDENT DESERVES MORE</h1>
                    <p>Venus Ed. aims at providing educational resources for students, breaking geographical bounds, and providing world-class material for everyone.</p>
                </div>
                <div className='opening-page-top-image'>
                    <img src={topImg} alt='top-image' />
                </div>
            </div>
            <div className='opening-page-why'>
                <h1>Why Venus?</h1>
                <div className='image-carousel'>
                    <Carousel infiniteLoop={true} autoPlay={true} interval={3000} transitionTime={500} showArrows={true} showStatus={false} showThumbs={false} showIndicators={true}>
                        <div>
                            <img src={one} alt='carousel-1st-img' />
                        </div>
                        <div>
                            <img src={two} alt='carousel-2nd-img' />
                        </div>
                        <div>
                            <img src={three} alt='carousel-3rd-img' />
                        </div>
                        <div>
                            <img src={four} alt='carousel-4th-img' />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className='opening-page-students'>
                <div className='opening-page-students-image'>
                    <img src={studentImg} alt='students-image' />
                </div>
                <div className='opening-page-students-text'>
                    <h1>Easy to access platform</h1>
                    <p>Learn about different technologies at just the touch of your finger and get certified.</p>
                </div>
            </div>
            <div className='opening-page-teachers'>
                <div className='opening-page-teachers-text'>
                    <h1>Bridge The Gap</h1>
                    <p>Understand what's best for different students and bridge the gap using assignments, worksheets, and regular doubt sessions.</p>
                </div>
                <div className='opening-page-teachers-image'>
                    <img src={teacherImg} alt='teacher-image' />
                </div>
            </div>
            <div className='opening-page-testimonial'>
                <h1>Proud Members</h1>
                <div className='testimonial-image-carousel'>
                    <Carousel infiniteLoop={true} autoPlay={true} interval={3000} transitionTime={500} showArrows={true} showStatus={false} showThumbs={false} showIndicators={true}>
                        <div>
                            <img src={testimonialOone} alt='carousel-testi-1st-img' />
                        </div>
                        <div>
                            <img src={testimonialTwo} alt='carousel-testi-2nd-img' />
                        </div>
                        <div>
                            <img src={testimonialThree} alt='carousel-testi-3rd-img' />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default OpeningPage;