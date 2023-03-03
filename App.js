import React, { createElement } from "react";
import ReactDOM from "react-dom/client";



//  ===================  JSX  =============================
// JSX => React.createElement => Object => HTML(DOM)

// const headingJsx=<h1>Heading using JSX</h1>

// const root = ReactDOM.createRoot(document.getElementById("root")); // by using createRoot, we tell where to include react elements, it is the root element, everything from react goes in here
// root.render(headingJsx );  // we use this syntax for rendering a react element 


// Functional Component
//creating a functional component
const Component = function(){
    return (
        <div>
            <h1>Coming from a component</h1>
        </div>
    );
};

// using a functional component to render 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component/>);  // we use this syntax for rendering a component
// root.render(Component());  // we can even do this , because at the end it is just a function and can be invoked using ()

/*
 *** Parcel Feature ***
 * Creates A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - written in C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code (removing console.log statements, etc)
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimizat ion
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking - removing unwanted code
 *
 *
 * Transitive Dependencies : heirarchy of dependencies 
 */


// Basic React using React.createElement

 // What is createElement is doing :     createElement => Object => HTML(DOM)
//  createElement gives us an object which is converted to HTML element which is further attached to the DOM

//creating a react element 
// const heading1 = React.createElement(
//     "h1",
//     { id: "child1" },
//     "Namaste Everyone from React"
//   );

//   const heading2 = React.createElement(
//     "h1",
//     { id: "child2" },
//     "This is coming from React"
//   );

//   const heading3 = React.createElement(
//     "h2",
//     { id: "child3" },
//     "This is coming from React"
//   );
  
//   const container = React.createElement("div", { id: "container" }, [
//     heading1,
//     heading2,
//     heading3,
//   ]);
  
// defining the root for the react 
//   const root = ReactDOM.createRoot(document.getElementById("root")); // by using createRoot, we tell where to include react elements, it is the root element, everything from react goes in here

// rendering the react element
//   // root.render(container);
  