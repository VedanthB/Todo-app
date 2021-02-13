import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState(['take dogs out','anything']);
  const [input, setinput] = useState('');
  console.log('🧜🏼‍♀️', input);

  //when the app loads we need to listen to the database and fetch new todos as they get added/removed 
  useEffect(() => {
    //this code here..fires when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc' ).onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
    
  }, [])


  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();   // prevents RELOAD
    
    db.collection('todos').add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()

    })

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
          <Todo todo={todo}/>
          // <li>{todo}</li>
        ))}
        </ul>


    </div>
  );
}

export default App;
