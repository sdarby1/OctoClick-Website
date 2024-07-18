import React from 'react';

const ChoiceButtons = ({ choices, onChoose }) => {
  return (
    <div className="video-choices">
      {choices.map((choice, index) => (
        <button key={index} onClick={() => onChoose(choice.nextIndex)}>
          {choice.text}
        </button>
      ))}
    </div>
  );
};

export default ChoiceButtons;
