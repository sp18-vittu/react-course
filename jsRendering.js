// Rendering into markup Using Javascript

const jsHeading = document.createElement("h1");
jsHeading.innerHTML = "Namaste Everyone from JavaScript";
const root1 = document.getElementById("root");
root1.appendChild(jsHeading); 


// react elements are immutable , cannot change react element using javascript after it has been rendered using react
// If the element is made first using javascript, then react is used to change its contents,
//  then react overwrites the root's contents