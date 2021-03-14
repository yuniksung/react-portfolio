import React from 'react';
import '../../assets/scss/nav.scss';

function NavTabs(props) {
    const tabs = ['Home', 'About', 'Work', 'Contact', 'Resume'];


    return(
        <div className='nav-bar'>
            <ul>
            {tabs.map(tab => (
                <li className="nav-item" key={tab}>
                    <a
                        href={'#' + tab.toLowerCase()}
                        onClick={() => props.handlePageChange(tab)}
                        className={
                        props.currentPage === tab ? 'nav-link active' : 'nav-link'
                        }
                    >
                        
                    {tab}
                    </a>
                </li>
            ))}
            
            </ul>
        </div>
    )

}

export default NavTabs;