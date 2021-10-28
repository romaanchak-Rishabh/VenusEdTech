import React from 'react';

import "./Courses.css";

import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import c3 from "../../assets/c3.jpg";
import c4 from "../../assets/c4.jpg";
import c5 from "../../assets/c5.jpg";
import c6 from "../../assets/c6.jpg";
import c7 from "../../assets/c7.jpg";
import c8 from "../../assets/c8.jpg";

function Courses() {
    return (
        <div className='courses'>
            <section className="courses-main">
                <div className="card">
                    <div className="card-img">
                    <img src={c1} alt="course" />
                    </div>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#">CCNA  & CCNP</a></h5>
                    <p className="card-text">Cisco Certified Network Associate (CCNA), is the basic levek certification course in networking offered by Cisco Systems which covers basics of Cisco Networking secuorty, automation and programmability. You learn Network fundamentals, Network access, IP connectivity, IP services, security fundamentals, and Automation & programmability technologies in CCNA training.</p>
                    <p className="card-text">CCNP Enterprise/R&S certification course is a professional level certification for the candidates who wish to become certified enterprise networking technologies competent.</p> 
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                    <img src={c2} alt="course" />
                    </div>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#">MCASA & MCSA</a></h5>
                    <p className="card-text">Microsoft Certified Solutions Associate (MCSA) certifications are the foundation of Microsoft's new generation of cloud-optimized credentials. MCSA certifications validate the skills to implement cloud-optimized technology solutions using a single Microsoft product.</p>
                        <p className="card-text">Microsoft Certified Azure Solutions Architect masters the skills needed to design solutions that run on the leading cloud provider. A Microsoft Azure Solution Architect must have expertise in Compute, Network, Storage and Security.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                    <img src={c3} alt="course" />
                    </div>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#">CCSP</a></h5>
                    <p className="card-text">Certified Cloud Security Professional applies information security expertise to a cloud computing environment and demonstrates competence in cloud security architecture, design, operations, and service orchestration. This professional competence is measured against a globally recognized body of knowledge.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                    <img src={c4} alt="course" />
                    </div>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#"> CEH</a></h5>
                    <p className="card-text">A Certified Ethical Hacker is a skilled professional who understands and knows how to look for weaknesses and vulnerabilities in target systems and uses the same knowledge and tools as a malicious hacker, but in a lawful and legitimate manner to assess the security posture of a target system(s).</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                    <img src={c5} alt="course" />
                    </div>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#"> CISM</a></h5>
                    <p className="card-text">Certified Information Security Manager (CISM) is an advanced certification that indicates that an individual possesses the knowledge and experience required to develop and manage an enterprise information security (infosec) program.
        CISM is offered by ISACA, a nonprofit, independent association that advocates for professionals involved in infosec, assurance, risk management and governance.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                    <img src={c6} alt="course" />
                    </div>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#"> CISSP</a></h5>
                    <p className="card-text">The Certified Information Systems Security Professional (CISSP) exam is a six-hour exam consisting of 250 questions that certifies security professionals in ten different areas, of access control systems and methodology, business continuity planning and disaster recovery planning, physical security, operations, security, management practices, telecommunications and networking security.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                    <img src={c7} alt="course" />
                    </div>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#"> CCIE</a></h5>
                    <p className="card-text">Cisco Certified Internetwork Expert Routing and Switching (CCIE Routing and Switching) certifies the skills required of expert-level network engineers to plan, operate and troubleshoot complex, converged network infrastructure.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                    <img src={c8} alt="course" />
                    </div>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#"> CMDBA </a></h5>
                    <p className="card-text">Oracle Certifications are among the most sought after badges of credibility for expertise in the Information Technology marketplace. MySQL training and certification will familiarize you with this world-renowned open source database management system. </p>
                    </div>
                </div>
            </section>

            <div className="section-title">
                <h1>Pricing</h1>
                <hr />
                <p>Venus Ed. offers the training of world class IT certifications from renowned industry experts and expert matters at the best rate.</p>
            </div> 
            <div className="pricing-grids">
                <div className="pricing-grid1">
                    <div className="price-value">
                            <h2><a href="#">TRIAL PERIOD</a></h2>
                            <h5><span>₹0</span><lable> First 7 days</lable></h5>
                            <div className="sale-box">
                    <span className="on_sale title_shop">NEW</span>
                    </div>

                    </div>
                    <div className="price-bg">
                    <ul>
                        <li className="whyt"><a href="#">Introduction session </a></li>
                        <li><a href="#">Course Details and Syllabus</a></li>
                        <li className="whyt"><a href="#">Real world project</a></li>
                        <li><a href="#">Notes and Assignments</a></li>
                        <li className="whyt"><a href="#">One on one interaction</a></li>
                    </ul>
                    <div className="cart1">
                        <a className="popup-with-zoom-anim" href="#small-dialog">Get Started</a>
                    </div>
                    </div>
                </div>
                <div className="pricing-grid2">
                    <div className="price-value two">
                        <h3><a href="#">BEGINNER</a></h3>
                        <h5><span>₹5000</span><lable> / course</lable></h5>
                        <div className="sale-box two">
                    <span className="on_sale title_shop">NEW</span>
                    </div>

                    </div>
                    <div className="price-bg">
                    <ul>
                        <li className="whyt"><a href="#">Beginner certifications</a></li>
                        <li><a href="#">Course Details and Syllabus</a></li>
                        <li className="whyt"><a href="#">Real world project</a></li>
                        <li><a href="#">Notes and Assignments</a></li>
                        <li className="whyt"><a href="#">One on one interaction</a></li>
                    </ul>
                    <div className="cart2">
                        <a className="popup-with-zoom-anim" href="#small-dialog">Get Started</a>
                    </div>
                    </div>
                </div>
                <div className="pricing-grid3">
                    <div className="price-value three">
                        <h4><a href="#">PROFESSIONAL</a></h4>
                        <h5><span>₹15000</span><lable> / course</lable></h5>
                        <div className="sale-box three">
                    <span className="on_sale title_shop">NEW</span>
                    </div>

                    </div>
                    <div className="price-bg">
                    <ul>
                        <li className="whyt"><a href="#">Any certification</a></li>
                        <li><a href="#">Course Details and Syllabus</a></li>
                        <li className="whyt"><a href="#">Industry level project</a></li>
                        <li><a href="#">Notes and Assignments</a></li>
                        <li className="whyt"><a href="#">One on one interaction</a></li>
                    </ul>
                    <div className="cart3">
                        <a className="popup-with-zoom-anim" href="#small-dialog">Get Started</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
