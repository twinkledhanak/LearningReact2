
// we are kepping this class commented as will write our own implementation for it later 

import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';

class App extends Component{

  // defining what the original state is 
  // original data set 
  state = {
    persons : [
      { name : 'PersonA',age: 20},
      { name : 'PersonB', age:21}
    ]
  }
  
  
  togglePersonHandler = () => {
    console.log("Inside the toggle methodDeciding whether to show data or not ");
    const doesShow = true;

  }



    render(){
      console.log("Inside App.js render method ");
      let persons = null

      if (true){
       // set the value for persons array 
       persons = (
         <div>
           <Persons persons = {this.state.persons}/>
         </div>
       )
      }



      return (
        // 1.
       /* <div className="App">
          <p>This is something I created myself!!!</p>
        </div>
        */
       // this was one way of writing native html code inside JS  ,i.e , JSX


       // 2. 
      // Below is the second way of writing the embedded html code 
      //React.createElement('div',null,'This is a unique way!!')

      // 3. 
      //  React.createElement('div',null,React.createElement('h1',null,'This is a nested H tag'))
        
      // after setting the value of props 
      /*
       <div className='App'> 
          <Person name='Twinkle Dhanak' age='23'
          krunaltextchanged = {this.nameChangeHandler}/>
       </div>
       */

       // click of below button should pass values from App to Persons to Person and 
       // display the final value on screen 
       // onclicking , the scope we are binding value globally 
       <div>
          <button onClick={this.togglePersonHandler.bind(this)}>Click This button to expand list!</button>
           {persons}
       </div>
        

      );
    }

}


export default App;
