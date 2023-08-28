import React, { useState,useEffect } from 'react'
import "./Skills.css";



function Skills() {
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart,setIsAtStart] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      

      if (scrollHeight - scrollTop <= clientHeight) {
        setIsAtEnd(true);
      } else {
        setIsAtEnd(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // When the component mounts, add the slide-in class after a slight delay
    const timer = setTimeout(() => {
      setIsAtStart(true);
    }, 100);

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts

  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const skillsSection = document.querySelector('.skills-body-main');

      if (skillsSection) {
        const skillsSectionTop = skillsSection.offsetTop;
        const skillsSectionHeight = skillsSection.offsetHeight;

        if (scrolled >= skillsSectionTop + skillsSectionHeight - windowHeight) {
          setIsAtEnd(true);
        } else {
          setIsAtEnd(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='skills'>
      <div className='skills-body-main'>
        <div className='skills-body-left'>
          <div className={`line ${isAtEnd ? 'thunder' : ''}`}></div>
          <div className={`glowing ${isAtEnd ? 'glow' : ''}`}>
            <p>◁▷</p>
          </div>
        </div>
        <div className='skills-body-right'>
          <div  className={`project-card ${isAtEnd ? 'slide-in' : ''}`}>
            <a className='link' href='https://chat-59a0d.web.app/'>skypler</a>
            <p> chatting app</p>
          </div>
          <div className={`project-card1 ${isAtEnd ? 'slide-in' : ''}`}>
            <a className='link' href='https://netflix-7a177.firebaseapp.com/'>netflix-clone</a>
            <p>netflix-clone</p>
          </div>
          <div className={`project-card2 ${isAtEnd ? 'slide-in' : ''}`}>
            <a className='link' href='https://fir-30b0a.firebaseapp.com/'>amazon-clone</a>
            <p>amazon-clone</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills