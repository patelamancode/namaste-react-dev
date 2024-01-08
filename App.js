import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// creating react  element normaly with out JSX
// React.createElemet  => React element i.e (JS-object)  => render as html element
const normalHeading = React.createElement(
  "h1",
  { id: "heading-tag" },
  "Hey, I am normal react element"
);
// ========================================
//  By using JSX (JSX !==  html) both have similar syntax (also similar syntax of XML)
// JSX code - transpiled before reaches to JS engine - Parcel transpiled by using - another depency known as Babel- then JS engine understand transpiled react code
// JSX  => (Transpiled by using Babel) React.createElemet  => React element i.e (JS-object)  => render as html element
const jsxHeading = <h1 id="heading-jsx">I' m JSX heading of react</h1>;

root.render(jsxHeading);
