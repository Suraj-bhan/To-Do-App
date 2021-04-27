import React, {useEffect, useState} from 'react'
import { Button, FormControl,Input, InputLabel,Typography } from '@material-ui/core';

import firebase from 'firebase'
import './App.css';
import ToDO from './ToDO';
import db from'./firebase';

function App() {
   const [todos, setTodos] =useState([]);
   const [input, setInput] =useState('');
   
   useEffect(() => {
     db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
       setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
     })
   }, [])

   const addTodo = (event) => {
     event.preventDefault();

     db.collection('todos').add({
       todo: input,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
     })
    setTodos([...todos, input]);
    setInput('');
   }

  return (
    <div className="App">
       <h1 className="MuiTypography-h2">To Do App</h1>
       <form>
       <FormControl>
       <InputLabel >Write a to do</InputLabel>
       <Input value={input} onChange={event => setInput(event.target.value)} />
       </FormControl>
       <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}> Add To Do </Button>
       </form>
       
       <ul>
         {todos.map(todo => (
           <ToDO todo={todo}/>
           //<li>{todo}</li>
         ))}
       </ul>
    </div>
  );
}

export default App;
