import React, { useEffect, useState } from "react";
import axios from "axios";
const EffectTutorial = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("api called");
      });
    // console.log("inside useEffect");
  }, [data]);
  //   useEffect is used for many things but the primarily is for Api call as you load the page
  // useEffect hook is just a function that is called whenever your page is reRenders
  //   used to detect the page reRender
  // it is powerful because you can specifies any thing for which you want to detect reRender
  return (
    <div>
      Hello World <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default EffectTutorial;
