// craeting the elements and adding in the html using javascript

// const heading=document.createElement('h1');
// heading.innerHTML="This is heading from JS!!";
// const root=document.getElementById('root');
// root.appendChild(heading);




// creating the elements using react with cdn links


// const heading=React.createElement('h1',{id:'heading'},'This is heading from CDN links!!!');
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);




// creating the nested elements using react

// const parent=React.createElement('div',
//     {id:'parent'},
//     React.createElement('div',
//         {id:'child'},
//     React.createElement('h1',{id:'heading'},'This is from Nested heading!!'))
// );


// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);



// creating the sibling elements

// const parent=React.createElement('div',
//     {id:'parent'},
//     [React.createElement('h1',{id:'heading'},'This is sibling1'),React.createElement('h2',{id:'head2'},'This is sibling2')]
// );


// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);



import React from 'react'
import ReactDOM from 'react-dom/client'


// using the core react 



// const heading=React.createElement('h1',{id:'heading'},"This is from core React!!");
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);



const heading=<h1 id='heading'>This is h1 from React Module!!</h1>
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
