// /src/data/videoData.js
const videoData = [
    { 
      src: "/videos/first.mp4", 
      poster: "/images/thumbnail/thumbnail.png", 
      choices: [{ text: "Wahl 1", nextIndex: 1 }, { text: "Wahl 2", nextIndex: 2 }]
    },
    { src: "/videos/second.mp4", choices: [{ text: "Wahl 1.1", nextIndex: 3 }, { text: "Wahl 1.2", nextIndex: 4 }] },
    { src: "/videos/choice2.mp4", choices: [{ text: "Wahl 2.1", nextIndex: 5 }, { text: "Wahl 2.2", nextIndex: 6 }] },
    { src: "/videos/third.mp4", choices: [] },
    { src: "/videos/choice1dot2.mp4", choices: [] },
    { src: "/videos/choice2dot1.mp4", choices: [] },
    { src: "/videos/choice2dot2.mp4", choices: [] },
  ];
  
  export default videoData;
  