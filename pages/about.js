import React from 'react';
//functional component - arrow function
//WHEN TO USE:
//1. for smaller components
//2. reusable components
//3. presententional components, partially right, we can use HOOKS and specify state
// const About = () => {
//     const message = "Hello Baby";
//     return (
//         <h1>Hello About page - {message}</h1>
//     )
// } 

// const About = () => {
//     const message = "Hello Baby";
//     return React.createElement('h1', null, 'I am generating this with createElement')
// } 

//functional component - normal function
// function About(){
//     return (
//         <h1>Hello About page</h1>
//     )
// }

class About extends React.Component{

    render(){
        return(
            <h1>Hello bro I'm class component</h1>
        )
    }
}



export default About