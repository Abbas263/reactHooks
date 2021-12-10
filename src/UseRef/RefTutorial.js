import React, { useRef } from "react";

const RefTutorial = () => {
  const inputRef = useRef(null);
  // useRef is used to access and manipulate DOM elements
  const onClick = () => {
    // console.log(inputRef.current.value);
    // inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>Abbas Ali </h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default RefTutorial;
