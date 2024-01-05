// I guess this is the intermediatary class between App and Person
// To transfer an array of object of type , eg , Person


import {React} from 'react';
import Person from './Person/Person';

// first creating the stateless component here 
// we are getting props
// props contain the state array
// persons is the name of array with all persons object
// forEach way of iterating is not available in react
//Below is how we iterate a map using operator => 
const Persons = (props) => props.persons.map((p,index) => {
    // forEach object , call the Person element
    return <Person
    name = {p.name}
    age = {p.age}
    key = {p.id} // id of individual Person element 
    krunal = {() => props.clicked(index)}
    ></Person>
});

export default Persons;