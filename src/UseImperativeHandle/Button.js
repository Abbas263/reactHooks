import React, { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  // forward ref is function that is used to make a component to familiar with ref
  const [toggle, setToggle] = useState(false);
  //   we use useImperativeHandle to contain a function that we can call in parent component
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Button from child
      </button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
