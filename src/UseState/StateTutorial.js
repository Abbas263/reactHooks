import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Ab");
  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
  return (
    <div>
      <input
        placeholder="enter something.."
        value={inputValue}
        onChange={onChange}
      />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
