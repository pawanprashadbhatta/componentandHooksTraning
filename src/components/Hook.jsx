import React, { useState } from 'react';

const Hook=() =>{
  const [inputText, setInputText] = useState('Pawan');

  // Update the inputText state when the user types something
  const InputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <div>
        <h2>Text Display:</h2>
        <p>{inputText}</p>
      </div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputText}
        onChange={InputChange}
/>
        //practice
       
        
        

      
    </div>
  );
}

export default Hook;
