import React from 'react';
import "./Todo.css";
import {List, ListItem, ListItemText} from '@material-ui/core'

function Todo(props) {
    return (
        <List className="todo" >
            <ListItem>
                <ListItemText primary={props.text} secondary="deadline☠️" />
            </ListItem>
        </List>
    )
}

export default Todo
