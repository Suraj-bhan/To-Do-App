import React, {useEffect, useState} from 'react'
import { Button, FormControl,Input, InputLabel,Typography } from '@material-ui/core';

import firebase from 'firebase'
import './App.css';
import ToDO from './ToDO';
import db from'./firebase';

function App() {
   const [todos, setTodos] =useState([]);
   const [title, setTitle] =useState('');
   const [deadLine,setDeadLine]=useState(new Date());
   
   useEffect(() => {
     db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
       setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
     })
   }, [])

   const addTodo = (event) => {
     event.preventDefault();

     db.collection('todos').add({
       todo: title,
       deadline:deadLine,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
     })
    setTodos([...todos, title]);
    setTitle('');
   }

  return (
    <div className="App">
       <h1 className="MuiTypography-h2">To Do App</h1>
       <form>
       <FormControl>
       <InputLabel >Write a to do</InputLabel>
       <Input value={title} onChange={event => setTitle(event.target.value)} />
       <Input value={deadLine} type="date" onChange={event => setDeadLine(event.target.value)} />
       </FormControl>
       <Button disabled={!title} type="submit" variant="contained" color="primary" onClick={addTodo}> Add To Do </Button>
       </form>
       
       <ul>
         {todos.map(todo => (
           <ToDO todo={todo}/>
         ))}
       </ul>
    </div>
  );
}

export default App;
