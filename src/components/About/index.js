import React from 'react';
import '../../assets/scss/About.scss';

const aboutPage = () => {
    return (
        <section className="profile">
        {/* <h1 className="about-me">About Me</h1> */}
        <div className="single-box">
            <div className="header-area img1"></div>
            <div className="body-area">
                <h3>Yun Ik Sung</h3>
                <h4>Full Stack Web Developer</h4>
                <p className="pro-text"><span>Hello World,</span> I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
                Especially I have serious passion for UI design, animations and creating intuitive, dynamic user experiences.</p>
            </div>  
        </div>
        
        <div className="skill-button">
            <div className="skill-set">
                <div className="front-end full-stack">
                    <div className="skill-session fo">
                        <p>Front-ends</p>
                    </div>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>javascript</li>
                    </ul>
                </div>
                <div className="back-end full-stack">
                    <div className="skill-session fb">
                        <p>back-ends</p>
                    </div>
                    <ul>
                        <li>MySQL</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </div>
                <div className="framework full-stack">
                    <div className="skill-session fo">
                        <p>Frameworks</p>
                    </div>
                    <ul>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li className="hide">I'm Good</li>
                        <li className="hide">Hire Me</li>
                    </ul>
                </div>
                <div className="other full-stack">
                    <div className="skill-session fb">
                        <p>Other</p>
                    </div>
                    <ul>
                        <li>Audio Production</li>
                        <li>Video Production</li>
                        <li>Adobe Suite</li>
                        <li>Post Production</li>
                    </ul>
                </div>
            </div>        
            <div className="icon-wrapper">
                <div className="button">
                    <a href="mailto:yuniksung@gmail.com" className="icon">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="mailto:yuniksung@gmail.com">
                        <span>Email</span>
                    </a>
                </div>
                <div className="button">
                    <a target="_blank" href="https://www.linkedin.com/in/yun-ik-sung-0a02a326/" className="icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/yun-ik-sung-0a02a326/">
                        <span>LinkedIn</span>
                    </a>
                </div>
                <div className="button">
                    <a target="_blank" href="https://github.com/yuniksung" className="icon">
                        <i className="fab fa-github"></i>
                    </a>
                    <a target="_blank" href="https://github.com/yuniksung">
                        <span>GitHub</span>
                    </a>
                </div>
                <div className="button">
                    <a target="_blank" href="./assets/images/Resume_Yunik Sung.pdf" className="icon">
                        <i className="far fa-file-alt"></i>
                    </a>
                    <a target="_blank" href="./assets/images/Resume_Yunik Sung.pdf">
                        <span>Resume</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default aboutPage