import React, { useState } from 'react';
import './main.css';
import { motion, AnimatePresence } from 'framer-motion';

const myProjects = [
  { projectTitle: "React Project1", category: "reactMUI", imagePath: "./images/1.jpg" },
  { projectTitle: "CSS Project", category: "css", imagePath: "./images/2.jpg" },
  { projectTitle: "JavaScript Project", category: "javascript", imagePath: "./images/3.jpg" },
  { projectTitle: "css html Project 2", category: "css", imagePath: "./images/4.jpg" },
  { projectTitle: "react Project2", category: "reactMUI", imagePath: "./images/5.jpg" },
  { projectTitle: "expressNode", category: "expressNode", imagePath: "./images/6.jpg" }
];

const Main = () => {
  const [activeButton, setActiveButton] = useState('allProjects');
  const [projectArray, setProjectArray] = useState(myProjects);

  const filterProjects = (category) => {
    if (category === 'allProjects') {
      setProjectArray(myProjects);
    } else {
      const filteredProjects = myProjects.filter(project => project.category === category);
      setProjectArray(filteredProjects);
    }
    setActiveButton(category);
  };

  return (
    <main className='flex'>
      {/* Left Section with Buttons */}
      <section className='left-section '>
        <button
          onClick={() => filterProjects('allProjects')}
          className={activeButton === 'allProjects' ? 'active' : null}
        >
          ALL PROJECTS
        </button>
        <button
          onClick={() => filterProjects('css')} /* Corrected category string */
          className={activeButton === 'css' ? 'active' : null}
        >
          HTML AND CSS
        </button>
        {/* Add similar onClick and className attributes for other buttons */}
        <button onClick={() => filterProjects('javascript')} className={activeButton === 'javascript' ? 'active' : null}>JAVASCRIPT</button>
        <button onClick={() => filterProjects('reactMUI')} className={activeButton === 'reactMUI' ? 'active' : null}>REACT MUI</button>
        <button onClick={() => filterProjects('expressNode')} className={activeButton === 'expressNode' ? 'active' : null}>EXPRESS NODE</button>
      </section>

      {/* Right Section with Dynamic Article Cards */}
      <section className='right-section'>
      <AnimatePresence>

        {projectArray.map((item) => {
          return (
            <motion.article 
            layout
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{type:"spring"}}
            className='card' key={item.imagePath}>
             <img width={266} src={item.imagePath} alt='' />
                          <div style={{ width: '266px' }} className="box">
                <h1 className='title'>{item.projectTitle}</h1>
                <p className='subtitle'>
                  Build a fully functional e-commerce platform with features like product listings, shopping cart, and secure checkout.
                </p>
                <div className="flex">
                  <div className="icon-link"><i className="fa-solid fa-link"></i></div>
                  <div className="icon-github"><i className="fa-brands fa-github"></i></div>
                  <a className='link flex' style={{ alignSelf: 'flex-end' }} href='#'>
                  more <i className="fa-solid fa-arrow-right"></i>


                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
                </AnimatePresence>

      </section>
    </main>
  );
};

export default Main;
