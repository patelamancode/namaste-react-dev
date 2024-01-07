import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {}, "hello from react"); // this heading is react element not a html tag, and this element is js object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // this render menthod convert this heading react element or object to a HTML tag which is render in html dom by doing some internal algo
