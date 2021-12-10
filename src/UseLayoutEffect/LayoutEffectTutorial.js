import React, { useLayoutEffect, useEffect } from "react";

const LayoutEffectTutorial = () => {
  useLayoutEffect(() => {
    console.log("useLayoutEffect Called");
  }, []);
  useEffect(() => {
    console.log("useEffect Called");
  }, []);
//   useLayoutEffect is fundamentally called in an earlier stage of page rendering than the useEffect
// Mean 
  return <div>Hello World</div>;
};

export default LayoutEffectTutorial;
