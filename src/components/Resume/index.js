import React from 'react';
import '../../assets/scss/resume.scss';

function resumePdf () {
    return(
        <div className="resume-container">
            <iframe title="Yunik's Resume" src="/resume_yunik.pdf" type="application/pdf"></iframe>
        </div>
        
    )
}

export default resumePdf