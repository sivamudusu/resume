import React, { useState,useEffect } from 'react'
import "./About.css"

function About() {
  const [isAtEnd, setIsAtEnd] = useState(false);


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
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const skillsSection = document.querySelector('.about-body-main');

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
    <div className='about'>
      <div className='about-body-main stars'>
        <div className='about-body-left'>
          <div className={`about-line ${isAtEnd ? 'thunder' : ''}`}></div>
          <div className={`glowing ${isAtEnd ? 'glow' : ''}`}>
            <p>◁▷</p>
          </div>
        </div>
        <div className='about-body-right'>
          <div className='my-self-dabba'>
            <p><span className='blue'>{'class'}</span> <span className='yellow'>{'shiva'}</span> <span className='white'>{'{'}</span></p>
            <p className='comment'>...\\ I can because i did</p>
            <p className='comment'>...\\ My vast variety of skills is continiously expanding</p> 
            <div className='constructor'>
              <p><span className='blue'>{'constructor'}</span> <span className='white'>{' ( )'}</span> <span className='white'>{'{'}</span></p>
              <p> <span className='red'>{'this'}</span><span className='white'>{'.'}</span>name  <span className='red'>{'='}</span> Mudusu shiva</p>
              <p><span className='red'>{'this'}</span><span className='white'>{'.'}</span>DayOfBirthTimeStamp <span className='red'>{'='}</span> 19950511</p>
              <p><span className='red'>{'this'}</span><span className='white'>{'.'}</span>email <span className='red'>{'='}</span> 'sivamudusu@gmail.com'</p>
              <p><span className='white'>{'}'}</span></p>  
            </div>
            <div className='work-experience'>
              <p><span className='yellow'>{'workExperience'}</span><span className='white'>{' ( )'}</span> <span className='white'>{'{'}</span></p>
              <div className='return'>
                <p><span className='blue'>{'return'}</span> <span className='white'>{'['}</span></p>
                <p><span className='white'>{'{'}</span> 2019 - 2023 'now' <span className='white'>{':'}</span> Territory Business Manager at Okinawa Pharma <span className='white'>{'}'}</span> </p>
                <p><span className='white'>{'{'}</span> 2018 - 2019 <span className='white'>{':'}</span> sales executive at starus pharma <span   className='white'>{'}'}</span></p>
                <p><span className='white'>{']'}</span></p>
              </div>
              <p><span className='white'>{'}'}</span></p>
            </div>
            <div className='work-experience'>
              <p><span className='yellow'>{'education'}</span><span className='white'>{' ( )'}</span> <span className='white'><span className='white'>{'{'}</span></span></p>
              <div className='return'>
                <p><span className='blue'>{'return'}</span> <span className='white'>{'['}</span></p>
                <p><span className='white'>{'{'}</span> 2022 - 2023 'now' <span className='white'>{':'}</span> Student At scaler as a java fullstack developer <span className='white'>{'}'}</span> </p>
                <p><span className='white'>{'{'}</span> 2015 - 2017 <span className='white'>{':'}</span> MBA(discontinued) at Emeralds advanced institute of management sciences <span className='white'>{'}'}</span></p>
                <p><span className='white'>{'{'}</span> 2012 - 2015 <span className='white'>{':'}</span> B.com(Computer applications) <span className='white'>{'}'}</span></p>
                <p><span className='white'>{']'}</span></p>
              </div>
              <p><span className='white'>{'}'}</span></p>
            </div>
            <div className='work-experience'>
              <p><span className='yellow'>{'skills'}</span><span className='white'>{' ( )'}</span> <span className='white'>{'{'}</span></p>
              <div className='return'>
                <p><span className='blue'>{'return'}</span> <span className='white'>{'['}</span></p>
                <p>'HTML/CSS/JS' , 'Node js' , 'React js' , 'Bootstrap' , 'npm' , 'GIT' , 'Firebase'</p>
                <p>MySQL/MongoDB , 'problem solving' , 'Java' , 'Data Structures and algorithms'</p>
                <p><span className='white'>{']'}</span></p>
              </div>  
              <p><span className='white'>{'}'}</span></p>
            </div>
            <p><span className='white'>{'}'}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About