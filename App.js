import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element
// JSX  => (Transpiled by using Babel) React.createElemet  => React element i.e (JS-object)  => render as html element
const jsxHeading = <h1 id="heading-jsx">I' m JSX heading of react</h1>;

// Creating React Functioneal component
// (Below things of usin componentt inside componen to render called component-composition)
const NewComponent = () => <h1>I am another component</h1>;
const HeadingFuncComponent = () => {
  return (
    <div id="container">
      <NewComponent />
      <h1 className="heading">Hey I am functional component of react</h1>
    </div>
  );
};

// rendering react element
// root.render(jsxHeading);

// rendering react  components
root.render(<HeadingFuncComponent />);
