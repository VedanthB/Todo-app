import React, { useState }from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['take dogs out','anything'])

  return (
    <div className="App">
     <h1>hello world</h1>
     <input/>
     <button>ADD ToDo</button>

      <ul>
        {todos.map(todo => (  //arrow function and jsx
          <li>{todo}</li>
        ))}
        </ul>


    </div>
  );
}

export default App;
