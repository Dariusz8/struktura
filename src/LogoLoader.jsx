import React, { useState, useEffect } from 'react';
import './assets/LogoLoader.css'

const LogoLoader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const delay = 1000;

  const showParagraphs = () => {
    setIsVisible(true);
    };

  const timeout = setTimeout(showParagraphs, delay);

  return () => clearTimeout(timeout);
  }, [])

    return (
      <div className='logoParent'>
        <p style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}>a</p>
        <p style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s 1s' }}>b</p>
        <p style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s 2s' }}>c</p>
        <p style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s 3s' }}>struktura</p>
      </div>
    );
  };
  
  export default LogoLoader;