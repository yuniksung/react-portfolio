import React from 'react';
import '../../assets/scss/header.scss';

function header() {

    return(
        <div className="container">
            <section className="hero">
                <section className="slide">
                    <div className="shaped"></div>
                    <div className="hero-text">
                        <h2>Yunik Joshua Sung</h2>
                        <h4>Full Stack Web Developer</h4>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default header;