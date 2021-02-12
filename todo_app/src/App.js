import React, { useState } from 'react';
import './App.css';

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
     <h1>hello world</h1>

     <form>
       <input value={input} onChange = {event => setinput(event.target.value)}/>
       <button onClick={addTodo} >ADD ToDo</button>
     </form>
      
      
      <ul>
        {todos.map(todo => (  //arrow function and jsx
          <li>{todo}</li>
        ))}
        </ul>


    </div>
  );
}

export default App;
