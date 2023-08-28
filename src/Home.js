import React, { useState,useEffect } from 'react'
import "./Home.css"

function Home() {
  const[typedText,setTypedText] = useState("");
  const textToType = "Hello there i am shiva";
  const words = ['Webapps','Websites','webpages','mobileapps'];
  const random = ["we▷✓ʎ","mob₹◁✕Ä","⁇⌂⁒Ăʠʠś","mob₴₷₿૱","we▷✓ʎ","mob₹◁✕Ä","we▷✓ʎ"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isRandomPhase, setIsRandomPhase] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const[typed2,setTyped2] = useState("");
  const typingInterval = 200; // Adjust interval as needed
  const [showCursor, setShowCursor] = useState(true);
  const pauseBetweenWords = 1500; // Adjust pause duration as needed



  useEffect(() => {
    let currentIndex = 0;

    let prevTypedText = "";

    const typingInterval = setInterval(() => {
      setTypedText(prevTypedText = prevTypedText + textToType[currentIndex]);
      currentIndex++;

      if (currentIndex === textToType.length) {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the interval as needed

    return () => {
      clearInterval(typingInterval);
    };
  }, []);




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
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout;

    const typeNextCharacter = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setDisplayedText(currentWord.substring(0, charIndex));
        charIndex--;

        if (charIndex < 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(() => {
            setShowCursor(false);
            setDisplayedText('');
            setTimeout(() => {
              setShowCursor(true);
              charIndex = 0;
              typingTimeout = setTimeout(typeNextCharacter, typingInterval);
            }, typingInterval);
          }, pauseBetweenWords);
        } else {
          typingTimeout = setTimeout(typeNextCharacter, 30);
        }
      } else {
        setDisplayedText(currentWord.substring(0, charIndex));
        charIndex++;

        if (charIndex > currentWord.length) {
          isDeleting = true;
          charIndex = currentWord.length;
          typingTimeout = setTimeout(typeNextCharacter, typingInterval);
        } else {
          typingTimeout = setTimeout(typeNextCharacter, typingInterval);
        }
      }
    };

    typingTimeout = setTimeout(typeNextCharacter, typingInterval);
    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);
    

    





  return (
    <div  className='home' >
      <div className='body-main'>
        <div className='body-left'>
            <img src='https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg' alt='image'/>
            <div className={`glowing ${isAtEnd ? 'glow' : ''}`}>
                <p>◁▷</p>
            </div>
        </div>
        <div className='body-right'>
          <div className='intro'>
            <span className='typewriter-text'>{typedText}</span>
          </div>
          <div className='dynamic-text'>
            <h3><span className='i'>i</span> <span className='can'></span> <span className='create'>design</span> and <span   className='develop'>develop </span> {displayedText}{showCursor && <span className="cursor">|</span>}</h3>
          </div>
          <div className='let-me'>let me show you</div>
        </div>
      </div>
    </div>
  )
}

export default Home