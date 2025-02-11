Namaste React!🚀

const heading = React.createElement(
    "h1", 
    {id:"heading", xyz:"abc"}, //attribute
    "Hello from React!" //child
);


import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div", {id:"child"}, 
        [React.createElement("h1", {}, "hello from h1 tag"),React.createElement("h2", {}, "hello from h2 tag")]),React.createElement("div", {id:"child"}, 
    [React.createElement("h1", {}, "hello from h1 tag"),React.createElement("h2", {}, "hello from h2 tag")])]
);

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

import React from 'react';
import ReactDOM from 'react-dom/client';

React Element :=>
    React.createElement => 
                            Creates object => 
                                                object get render in DOM => 
                                                                                    and displays the HTML

const heading = React.createElement("h1",{id:"heading"},"Namaste React 🚀"); 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


JSX => Is like HTML like syntax or like XML syntax
JSX => Jsx code transpiled / compiled by (Parcel -> Babel) into React.createElement => 
                                                            Creates JS object => 
                                                                            object get render in DOM => 
                                                                                            Displays HTML

const heading = <h1>Namaste JSX 🚀</h1>
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


Functional Component

const Title =() =>{
    return <div id="container">
        <h1 id="heading">Namaste React 🚀</h1>
    </div>
};


const HeadingFunc2 =() =>(
    <div id="container">
        <Title/>
        <h1 id="heading">Namaste function</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingFunc2/>);


import React from 'react';
import ReactDOM from 'react-dom/client';

const Header =() =>(
   <div id="container">
         <div className='flex items-center justify-between p-4 bg-blue-600 text-white shadow-md'>My logo</div>
         <input 
            className='ml-2 px-3 py-2 w-1/3 rounded-full focus:outline-none text-black' 
            type='text' 
            placeholder='search'
         />
         <div className='icon'>User Icon</div>
   </div>
);
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Header/>);



