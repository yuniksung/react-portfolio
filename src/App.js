import React, { useState } from 'react';
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {

    const [currentPage, handlePageChange] = useState('Home');

    const renderPage = () => {

      switch (currentPage) {
        case 'About': 
        return <About />

        case 'Work': 
        return <Work />

        case 'Contact': 
        return <Contact />

        default: 
        return <Home />
      }
    };

    return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header></Header>
      <div>
          {
            <div>
              {renderPage(currentPage)}
            </div>
          }
      </div>
      <Footer />
    </div>

    )
}

export default App;