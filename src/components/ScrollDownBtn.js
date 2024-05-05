import React from 'react';

function ScrollToContentButton() {
  const handleClick = () => {
    // Scrollt genau um die Höhe des Viewports
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={handleClick} className="scroll-down-btn">
      <img src="/images/icons/scroll-down-icon.svg" alt="Scroll Down"/>
    </button>
  );
}

export default ScrollToContentButton;
