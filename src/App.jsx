import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/1-header/Header';
import Hero from './components/2-Hero/Hero';
import Main from './components/3-main/Main';
import Contact from './components/4-contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const [showscrolbtn, setshowscrolbtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set the threshold value at which the scroll-to-top button should appear
      const scrollThreshold = 200;
      const shouldShowButton = window.scrollY > scrollThreshold;
      setshowscrolbtn(shouldShowButton);
    };

    window.addEventListener('scroll', handleScroll);
    

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      {/* Updated condition for rendering the scroll-to-top button */}
      
        < a style ={{opacity:showscrolbtn? 1:0, transition:"3s"}} href="#up">
          <button className="scroll2top">
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </a>
   
    </div>
  );
}

export default App;
