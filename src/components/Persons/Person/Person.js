import React from 'react';

const Person = (props) => {
    // this is when we are not passing any parameter
    //  return <p>I'm a stateless component Person</p>;

    // suppose when we are passing a parameter to this component 

   // return <p>I am {props.name} !!! I am {props.age} years old girl:-))</p>;

   // now lets say we take a dynamic ip from here , text box is here
   return (
       <div>
        <p>Heyy!! onClick={props.krunal}</p>
        <p>I am {props.name} !!! I am {props.age} years old girl:-))</p>
        <input type="text" onChange={props.krunalchanged}></input>
        </div>
   )
     
}

export default Person;