import React from 'react'
import '../../assets/scss/Footer.scss';

const footer = () => {
    return (
<footer id="footer">
        <div class="icon-link">
            <a href="https://www.linkedin.com/in/yun-ik-sung-0a02a326/">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="mailto:yuniksung@gmail.com">
                <i class="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/yuniksung/portfolio_v2">
                <i class="fab fa-github-square"></i>
            </a>
        </div>
        <div class="footer-text">
            <p>Designed and Built by Yunik Sung</p>
            <p>Built with React.js, SASS, and HTML</p>
        </div>
    </footer>
    )
}

export default footer