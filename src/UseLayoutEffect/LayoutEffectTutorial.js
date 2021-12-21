import React, { useLayoutEffect, useEffect, useRef } from "react";

const LayoutEffectTutorial = () => {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
    console.log("useLayoutEffect Called");
  }, []);
  useEffect(() => {
    inputRef.current.value = "Hello";
    console.log("useEffect Called");
  }, []);
  //   useLayoutEffect is fundamentally called in an earlier stage of page rendering than the useEffect
  // Mean it is called before rendering the actual content of component/View while useEffect is called after actual content is loaded
  return (
    <div className="App">
      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 20 }} />
    </div>
  );
};

export default LayoutEffectTutorial;
