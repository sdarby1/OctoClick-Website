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
    <button onClick={handleClick} className="scroll-down-btn" aria-label='Scroll to main section'>
      {/* <img src="/images/icons/scroll-down-icon.svg" alt="Scroll Down"/> */}
        <svg className="scroll-down" id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.68 95.19">
          <defs>
            <style>
            </style>
          </defs>
          <path class="scroll-down-path" d="M6.08,88.21c-3.08,0-2.02,4.88-3.56,4.88-.53,0-.96-.44-.96-1.6,0-.74.22-1.55.66-2.33l-1.48-.6c-.49.78-.74,1.86-.74,2.91,0,2.39,1.19,3.54,2.61,3.54,3.12,0,2.04-4.88,3.61-4.88.52,0,.9.47.9,1.62,0,1.01-.36,2.06-.88,2.77l1.46.66c.58-.74.97-2.09.97-3.42,0-2.4-1.2-3.56-2.6-3.56Z"/>
          <path class="scroll-down-path" d="M6.03,80.64c.66.56,1,1.27,1,2.11,0,1.57-1.1,2.69-2.69,2.69s-2.69-1.12-2.69-2.69c0-.84.34-1.55.98-2.11l-1.15-1.25c-.96.79-1.49,2-1.49,3.45,0,2.61,1.81,4.56,4.34,4.56s4.34-1.94,4.34-4.55c0-1.46-.53-2.67-1.5-3.47l-1.15,1.25Z"/>
          <path class="scroll-down-path" d="M6.2,74.35l2.34-1.62v-2.09l-2.7,1.88c-.47-1.09-1.39-1.73-2.65-1.73-1.88,0-3.05,1.4-3.05,3.65v3.63h8.4v-1.94h-2.34v-1.79ZM4.65,76.14H1.73v-1.58c0-1.19.54-1.79,1.46-1.79s1.46.6,1.46,1.79v1.58Z"/>
          <path class="scroll-down-path" d="M4.34,60.6c-2.51,0-4.34,1.96-4.34,4.59s1.85,4.59,4.34,4.59,4.34-1.94,4.34-4.59-1.83-4.59-4.34-4.59ZM4.34,67.82c-1.6,0-2.69-1.13-2.69-2.63s1.09-2.63,2.69-2.63,2.69,1.13,2.69,2.63-1.09,2.63-2.69,2.63Z"/>
          <polygon class="scroll-down-path" points=".14 57.19 .14 59.13 8.54 59.13 8.54 52.98 6.96 52.98 6.96 57.19 .14 57.19"/>
          <polygon class="scroll-down-path" points="8.54 45.73 6.96 45.73 6.96 49.94 .14 49.94 .14 51.88 8.54 51.88 8.54 45.73"/>
          <path class="scroll-down-path" d="M8.54,37.42c0-2.75-1.66-4.63-4.2-4.63S.14,34.68.14,37.42v3.81h8.4v-3.81ZM6.94,39.3H1.74v-1.78c0-1.67,1-2.76,2.6-2.76s2.6,1.09,2.6,2.76v1.78Z"/>
          <path class="scroll-down-path" d="M4.34,31.86c2.49,0,4.34-1.94,4.34-4.59s-1.83-4.59-4.34-4.59-4.34,1.95-4.34,4.59,1.85,4.59,4.34,4.59ZM4.34,24.64c1.6,0,2.69,1.13,2.69,2.63s-1.09,2.63-2.69,2.63-2.69-1.13-2.69-2.63,1.09-2.63,2.69-2.63Z"/>
          <polygon class="scroll-down-path" points="8.54 17.37 2.85 15.47 8.54 13.62 8.54 11.53 .14 8.79 .14 10.65 6.09 12.6 .14 14.52 .14 16.32 6.04 18.3 .14 20.19 .14 22.21 8.54 19.45 8.54 17.37"/>
          <polygon class="scroll-down-path" points="8.54 5.78 3.44 5.78 8.54 1.6 8.54 0 .14 0 .14 1.92 5.24 1.92 .14 6.09 .14 7.7 8.54 7.7 8.54 5.78"/>
        </svg>
    </button>
  );
}

export default ScrollToContentButton;
