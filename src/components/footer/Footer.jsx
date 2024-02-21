import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href="">ABOUT</a></li>
        <li><a href="">PROJECTS</a></li>
        <li><a href="">SPEAKING</a></li>
        <li><a href="">USES</a></li>
      </ul>
      <p >@2023 Spencer Sharp All rights reserved .</p>
    </footer>
  )
}

export default Footer