import React, { useState, useEffect } from 'react';
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Work from './components/Work'
import Contact from './components/Contact'
import Resume from './components/Resume'

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

        case 'Resume': 
        return <Resume />

        default: 
        return <Home />
      }
    };


    useEffect(()=>{
      document.title=`Yunik's Website- ${currentPage}`
    },)

    return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header />
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