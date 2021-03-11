import React from 'react';
import './nav.scss';

function HomePage() {

    return(
        <div className='nav-bar'>
            <ul>
                <li>
                    <a className='home' href='#home'>Home</a>
                </li>
                <li>
                    <a className='about' href='#about'>About</a>
                </li>
                <li>
                    <a className='work' href='#work'>Work</a>
                </li>
                <li>
                    <a className='contact' href='#contact'>Contact</a>
                </li>
                <li>
                    <a className='resume' href='#resume'>Resume</a>
                </li>
            </ul>
            
        </div>
    )

}

export default HomePage;