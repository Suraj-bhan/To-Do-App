import React, {useState} from 'react'
import { Button, FormControl,Input, InputLabel} from '@material-ui/core';
import './App.css';
import ToDO from './ToDO';

function App() {
   const [todos, setTodos] =useState(['1','2']);
   const [input, setInput] =useState('');
   
   const addTodo = (event) => {
     event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
   }

  return (
    <div className="App">
       <h1>Hello world</h1>
       <form>
       

       <FormControl>
       <InputLabel >Write a ToDO</InputLabel>
       <Input value={input} onChange={event => setInput(event.target.value)} />
       </FormControl>
       <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}> Add To Do </Button>
      
       </form>


       <ul>
         {todos.map(todo => (
           <ToDO text={todo}/>
           //<li>{todo}</li>
         ))}
       </ul>
    </div>
  );
}

export default App;
