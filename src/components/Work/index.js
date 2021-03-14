import React from 'react'
import '../../assets/scss/work.scss';


const work = () => {
    return (
            <section id="portfolio" className="portfolio-wrapper">
        <div className="wrapper-title">
            <h2 className="my-work">My Work</h2>  
        </div>
        {/* <!-- left project --> */}
        <div className="left-work first-assignment">
            <div className="first-img">
            </div>
            <div className="left-content global-container">           
                <div className="portfolio-title">
                    <p>Team Profile Generator</p>
                </div>
                <div className="left-description">
                    <p>The intention of this application is to allow the user to be able to use node.js package in order to generate an HTML that shows members of a workplace team's basic info (name, ID, email, etc).</p>
                </div>
                <div className="left-tech">
                    <ul className="portfolio-list">
                        <li>Node Js</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="left-links">
                    {/* <!-- Link to git repository --> */}
                    <a href="https://github.com/yuniksung/Team-profile-generator" target="_blank"><i className="fab fa-github-square"></i></a>
                    {/* <!-- link to deployed application --> */}
                    {/* <!-- <a href="https://yuniksung.github.io/work-day-scheduler/" target="_blank"><i className="fas fa-external-link-square-alt"></i></a> --> */}
                </div>
            </div>
        </div>
        {/* <!-- Second project --> */}
        <div className="right-work second-assignment">
            <div className="right-img">
            </div>
            <div className="right-content global-container">           <div className="portfolio-title">
                    <p>Weather-Dashboard</p>
                </div>
                <div className="right-description">
                    <p>Weather dashboard using the OpenWeather API. with search functionality to find current weather conditions and the future weather outlook for multiple cities.</p>
                </div>
                <div className="right-tech">
                    <ul className="portfolio-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="right-links">
                    {/* <!-- Link to git repository --> */}
                    <a href="https://github.com/yuniksung/weather-dashboard" target="_blank"><i className="fab fa-github-square"></i></a>
                    {/* <!-- link to deployed application --> */}
                    <a href="https://yuniksung.github.io/weather-dashboard/" target="_blank"><i className="fas fa-external-link-square-alt"></i></a>
                </div>
            </div>
            
        </div>
        {/* <!-- Third project --> */}
        <div className="left-work third-assignment">
            <div className="third-img">
            </div>
            <div className="left-content global-container">           <div className="portfolio-title">
                    <p>Meal Queue</p>
                </div>
                <div className="left-description">
                    <p>Meal Queue is an aide to help individuals come up with dinner ideas. Type in a food item and a list of different recipes is presented with an option to view a video tutorial.</p>
                </div>
                <div className="left-tech">
                    <ul className="portfolio-list">
                        <li>HTML</li>
                        <li>SCSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="left-links">
                    {/* <!-- Link to git repository --> */}
                    <a href="https://github.com/axeliono/group-project-1" target="_blank"><i className="fab fa-github-square"></i></a>
                    {/* <!-- link to deployed application --> */}
                    <a href="https://axeliono.github.io/group-project-1/" target="_blank"><i className="fas fa-external-link-square-alt"></i></a>
                </div>
            </div>
        </div>

        {/* <!-- Music Line --> */}
        <div className="right-work second-assignment">
            <div className="fourth-img">
            </div>
            <div className="right-content global-container"><div className="portfolio-title">
                    <p>Music Line</p>
                </div>
                <div className="right-description">
                    <p>E-Commerce site allowing for purchase and rental of music products</p>
                </div>
                <div className="right-tech">
                    <ul className="portfolio-list">
                        <li>Node Js</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>Handlebars</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="right-links">
                    {/* <!-- Link to git repository --> */}
                    <a href="https://github.com/axeliono/Music-Line/" target="_blank"><i className="fab fa-github-square"></i></a>
                    {/* <!-- link to deployed application --> */}
                    <a href="https://guarded-dawn-15470.herokuapp.com/" target="_blank"><i className="fas fa-external-link-square-alt"></i></a>
                </div>
            </div>
        </div>
        <div className="other-project">
            <h1 className="project-title">
                Other Projects
            </h1>
            <div className="box-element">
                {/* <!-- first portfolio --> */}
            <div className="box-1 box">
                <header>
                    <div className="link-project">
                        <a href="https://github.com/yuniksung/Yunique" target="_blank">
                            <i className="fab fa-github-square"></i>
                        </a>
                        <a href="https://yuniksung.github.io/Yunique/" target="_blank">
                            <i className="fas fa-external-link-square-alt"></i>
                        </a>
                    </div>
                    <div className="project-name">
                        <h2>
                            My Portfolio v1
                        </h2>
                    </div>
                    <div className="project-description">
                        <p>
                            This portfolio has built with HTML and CSS only.
                            It views my biography, portfolio, and contact.
                        </p>
                    </div>
                </header>
                <div className="bottom-tech">
                    <p>
                        HTML / CSS
                    </p>
                </div>
            </div>
            
            <div className="box-2 box">
                <header>
                    <div className="link-project">
                        <a href="https://github.com/yuniksung/getPassword" target="_blank">
                            <i className="fab fa-github-square"></i>
                        </a>
                        <a href="https://yuniksung.github.io/getPassword/" target="_blank">
                            <i className="fas fa-external-link-square-alt"></i>
                        </a>
                    </div>
                    <div className="project-name">
                        <h2>
                            Password-Generator
                        </h2>
                    </div>
                    <div className="project-description">
                        <p>
                            This application emphasizes the use of Javascript to generate a random, secure password for the user.
                        </p>
                    </div>
                </header>
                <div className="bottom-tech">
                    <p>
                        HTML / CSS / JavaScript
                    </p>
                </div>
            </div>

            <div className="box-3 box">
                <header>
                    <div className="link-project">
                        <a href="https://github.com/yuniksung/codeQuiz" target="_blank">
                            <i className="fab fa-github-square"></i>
                        </a>
                        <a href="https://yuniksung.github.io/codeQuiz/" target="_blank">
                            <i className="fas fa-external-link-square-alt"></i>
                        </a>
                    </div>
                    <div className="project-name">
                        <h2>
                            Code Quiz
                        </h2>
                    </div>
                    <div className="project-description">
                        <p>
                            This application emphasizes the use of Javascript to provide quiz questions and collect user data to determine whether the answers to a question are correct, this then generates a score and appends a final page of results from the user data.
                        </p>
                    </div>
                </header>
                <div className="bottom-tech">
                    <p>
                        HTML / CSS / JavaScript
                    </p>
                </div>
            </div>
            <div className="box-4 box">
                <header>
                    <div className="link-project">
                        <a href="https://github.com/yuniksung/employer-tracker" target="_blank">
                            <i className="fab fa-github-square"></i>
                        </a>
                        {/* <!-- <a href="https://yuniksung.github.io/codeQuiz/" target="_blank">
                            <i className="fas fa-external-link-square-alt"></i>
                        </a> --> */}
                    </div>
                    <div className="project-name">
                        <h2>
                            Employee Tracker
                        </h2>
                    </div>
                    <div className="project-description">
                        <p>
                            An application that are able to view and manage the departments, roles, and employees in a company. All the information will be saved inside MySQL database which consist of department, roles, and employee tables.
                        </p>
                    </div>
                </header>
                <div className="bottom-tech">
                    <p>
                        NODE JS/ MYSQL
                    </p>
                </div>
            </div>
            <div className="box-5 box">
                <header>
                    <div className="link-project">
                        <a href="https://github.com/yuniksung/note-takr" target="_blank">
                            <i className="fab fa-github-square"></i>
                        </a>
                        {/* <!-- <a href="https://yuniksung.github.io/codeQuiz/" target="_blank">
                            <i className="fas fa-external-link-square-alt"></i>
                        </a> --> */}
                    </div>
                    <div className="project-name">
                        <h2>
                            Note Takr
                        </h2>
                    </div>
                    <div className="project-description">
                        <p>
                            This is a simple application that allows users to view, write, and delete notes. The application uses a server to serve resources, webpages, and information.
                        </p>
                    </div>
                </header>
                <div className="bottom-tech">
                    <p>
                        NODE JS/ CSS/ MYSQL
                    </p>
                </div>
            </div>


        </div>
    </div>

    
    </section>   
    )
}

export default work