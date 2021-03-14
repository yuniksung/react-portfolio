import React from 'react'
import '../../assets/scss/home.scss';



function homePage() {
    return (
        <div className="homepage-container">
            <div className="homepage-image">
                
            </div>

            <div className="homepage-text">
                <div className="homepage-textbox">
                    <h1 className="yunik-is">
                        yunik.is<span>(Fullstack)</span>
                    </h1>
                    <p>
                        A Talented,
                        Skillful,
                        Motivated and
                        Web Developer
                    </p>
                </div>
                <div className="home-description">
                    <p>Welcome to my portfolio, this website was built with <span>React.js</span>. Feel free to look around and if you have any questions, do not hesitate to contact me. You can reach out to me by clicking <span>Contact</span> menu.</p>
                </div>
            </div>
            
        </div>
    )
}

export default homePage;