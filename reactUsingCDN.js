// Using React
const root = ReactDOM.createRoot(document.getElementById("root"));// by using createRoot, we tell where to include react elements, the root element, everything from react goes in here
const heading = React.createElement(
  "h1",
  { id: "heading1" },
  "Namaste Everyone from React"
);
// console.log(heading);  // An Object , So Every react element is an Object .

//Passing a react element inside the root
// root.render(heading);


const sampleReactElement = React.createElement(
  "h1",    //tagname
  {        //props
    id: "sample",
    className: "sample",
    style: {     //we can also include style here
      color: "red",
      backgroundColor: "yellow",
    },
    hello:"world",  // even this will be set as attribute of this h1 tag, cool? 😄
  },
  "Sample Text"  //content
);
// console.log(sampleReactElement);
// root.render(sampleReactElement);


// For multiple child
const heading1 = React.createElement("h1", { id: "child1" }, "Child 1");
const heading2 = React.createElement("h2", { id: "child2" }, "Child 2");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

// root.render(container);
root.render([heading, container]); // use array for multiple children
