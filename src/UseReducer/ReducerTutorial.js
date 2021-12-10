import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};
const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  // use Reducer is alternative/replacement of useState
  //   useful where we have to change multiple states at once or multiPle once+one at type
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;

// import React, { useState } from "react";

// const ReducerTutorial = () => {
//   const [count, setCount] = useState(0);
//   const [showText, setShowText] = useState(true);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//           setShowText(!showText);
//         }}
//       >
//         Click Here
//       </button>
//       {showText && <p>This is a text</p>}
//     </div>
//   );
// };

// export default ReducerTutorial;
