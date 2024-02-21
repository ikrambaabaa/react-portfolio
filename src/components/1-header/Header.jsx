import React, { useEffect, useState } from 'react';
import './header.css';
import '../../../public/style.css'
const Header = () => {
  const [showModel, setShowModel] = useState(false);
  const [theme,setTheme]=useState('dark');
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark'); 
    }
  }, [theme]);
  return (
    <header>
      <button   onClick={() => setShowModel(true)} className='menu'>
      <span className='icon-menu'></span>
      </button>
      <nav>
        <ul className='flex'>
          <li><a href=''>ABOUT</a></li>
          <li><a href=''>ARTICLES</a></li>
          <li><a href=''>PROJECTS</a></li>
          <li><a href=''>SPEAKING</a></li>
          <li><a href=''>CONTACT</a></li>
        </ul>
      </nav>
      <button
  onClick={() => {
    localStorage.setItem("currentmode", theme==="dark" ? "light": "dark");
    setTheme(localStorage.getItem("currentmode"));
  }}
  className='light-button rounded-button'>
  <i className="fa-regular fa-moon"></i>
</button>

     

      {showModel && (
        <div className="fixed-with-border">
          <ul className='border model'>
       <li className=' close'> <button className='icon-window-close'  onClick={()=>{setShowModel(false)} }>   </button></li>
            <li><a href=''>ABOUT</a></li>
            <li><a href=''>ARTICLES</a></li>
            <li><a href=''>PROJECTS</a></li>
            <li><a href=''>SPEAKING</a></li>
            <li><a href=''>CONTACT</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
