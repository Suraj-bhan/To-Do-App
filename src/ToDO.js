import {  Button, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core'
import './ToDo.css'
import React, { useState} from 'react'
import db from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function ToDO(props) {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [input, setInput] =useState('');

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const updateTodo= () => {
        db.collection('todos').doc(props.todo.id).set({
         todo: input
        }, {merge: true})
        setOpen(false);
    }

    return (
        <>
        <Modal 
        open={open}
        onClose={e => setOpen(false)}>
            <div className={classes.paper}>
                <h1>This is a modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button variant="contained" color="secondary" onClick={updateTodo}>Update Todo</Button>
            </div>
       </Modal>
        <List className="todo_list">
            <ListItem>
                 
                <ListItemText primary={props.todo.todo} secondary="Dummy Deadline" />
            </ListItem>
            <Button variant="contained" color="primary" onClick={e => setOpen(true)}>Edit Me</Button>
            <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
     </>
    )
}

export default ToDO
