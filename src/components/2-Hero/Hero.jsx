import React from 'react';
import './hero.css';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import devAnimation from '../../../public/animation/dev.json';

const Hero = () => {
  return (
    <section className='hero flex'>
      <div className='left-section' style={{ width: '70%' }}>
        <div className='parent-avatar'>
        <motion.img
  initial={{ transform: 'scale(0)' }}
  animate={{ transform: 'scale(1)' }}
  transition={{ duration: 2, type: 'spring', stiffness: 100 }}
  src='./1.png'
  className='avatar'
  alt=''
/>

          <span className='verified'>
            <i className="fas fa-check-circle custom-verified-icon"></i>
          </span>
        </div>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className='title'
        >
          Software designer, founder, and amateur astronaut
        </motion.h1>
        <p className='subtitle'>
          I am a passionate computer developer, specializing in the implementation of programming languages and the development of small-scale projects. My academic background in Computer Science from the Faculty of Sciences in Rabat Agdal has strengthened my understanding of key computer science concepts. My practical experience involves crafting solutions using frameworks, showcasing my ability to translate innovative ideas into functional applications. Drawn to the latest technological advancements, I am consistently committed to continuous learning. My goal is to make a meaningful contribution to challenging projects, leveraging my passion and skills in computer development
        </p>

        <div className='icons flex'>
          <div className="icon"><i className="fa-brands fa-facebook"></i></div>
          <div className="icon"><i className="fa-brands fa-twitter"></i></div>
          <div className="icon"><i className="fa-brands fa-instagram"></i></div>
          <div className="icon"><i className="fa-brands fa-github"></i></div>
        </div>
      </div>

      <div className='right-section animation' style={{ width: '30%' }}>
        <Lottie className="devAnimation" style={{ height: 400 }} animationData={devAnimation} />
      </div>
    </section>
  );
};

export default Hero;
