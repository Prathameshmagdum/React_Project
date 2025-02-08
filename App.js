// const heading = React.createElement(
//     "h1", 
//     {id:"heading", xyz:"abc"}, //attribute
//     "Hello from React!" //child
// );


// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     [React.createElement("div", {id:"child"}, 
//         [React.createElement("h1", {}, "hello from h1 tag"),React.createElement("h2", {}, "hello from h2 tag")]),React.createElement("div", {id:"child"}, 
//     [React.createElement("h1", {}, "hello from h1 tag"),React.createElement("h2", {}, "hello from h2 tag")])]
// );

// console.log(parent); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element :=>
    // React.createElement => 
                            // Creates object => 
                                                // this object get render in DOM => 
                                                                                    // and displays the HTML

const heading = React.createElement("h1",{id:"heading"},"Namaste React 🚀"); 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);