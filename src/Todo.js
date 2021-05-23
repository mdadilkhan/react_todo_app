import React, { useState } from 'react';
import "./Todo.css";
import {Button, List, ListItem, ListItemText, Modal,makeStyles} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import db from './firebase';


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '100rem',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));





function Todo(props) {
    const classes=useStyles()
    const [open,setOpen]=useState(false)
     const [input,setInput]=useState()
    
    function handleOpen(event){
        setOpen(true);
    }

    function handleclose(event){
       
        setOpen(false);
    }


    function handleDelete(event){
      db.collection("todos").doc(props.todo.id).delete()
    }

    function handleChange(event){
        const updateValue=event.target.value;
        setInput(updateValue);
    }
    function updateTodo(event){
        db.collection("todos").doc(props.todo.id).set({
            todo:input
          },{merge:true})
          setOpen(false)
    }

    return ( 
        <>
        <Modal
        open={open}
        onclose={handleclose}
        >
            <div className={classes.paper}>
                <h1>add todo</h1>
                <input placeholder={props.todo.todo} value={input} onChange={handleChange}/>
                <Button onClick={updateTodo}>update</Button>
            </div>
        </Modal>

        <List className="todo" >
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="deadline☠️" />
            </ListItem>
            <Button onClick={handleOpen}>update</Button>
            <Button onClick={handleDelete}><DeleteIcon /> </Button>
        </List>
        </>
    )
}

export default Todo
