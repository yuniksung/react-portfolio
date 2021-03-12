import React from 'react';
import '../../assets/scss/header.scss';

function header() {

    return(
        <div className="container">
            <section className="hero">
                <section className="slide">
                    <div className="shaped"></div>
                    <div className="hero-text">
                        <div className="title">
                            <h2>Yunik Joshua Sung</h2>
                            <h4>Full Stack Web Developer</h4>
                        </div>
                        <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. Especially I have serious passion for UI design, animations and creating intuitive, dynamic user experiences.</p>
                        
                        <a target="_blank" href="/">Resume</a>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default header;