import React, { useState } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState(['take dogs out','anything']);
  const [input, setinput] = useState('');
  console.log('🧜🏼‍♀️', input);

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();   // prevents RELOAD
    console.log('🧜🏼‍♀️', 'IM working');
    setTodos([...todos,input]);  //using a spread
    setinput('')  // clears the input box after submit
  }

  return (
    <div className="App">
     <h1>Hello User</h1>

      <form>
        
       <FormControl>
         <InputLabel >✅Write a TODO </InputLabel>
         <Input value={input} onChange = {event => setinput(event.target.value)}/>
       </FormControl>

       {/* <input value={input} onChange = {event => setinput(event.target.value)}/> */}
       
        <Button disabled={!input} onClick={addTodo} type='submit' variant="contained" color="primary">
          ADD ToDo
        </Button>
       {/* <button onClick={addTodo} >ADD ToDo</button> */}
      </form>
       
      
      <ul>
        {todos.map(todo => (  //arrow function and jsx
          <Todo text={todo}/>
          // <li>{todo}</li>
        ))}
        </ul>


    </div>
  );
}

export default App;
