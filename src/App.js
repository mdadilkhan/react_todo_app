import React, { useState,useEffect } from "react";

import './App.css';

// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Button} from '@material-ui/core';

import { FormControl,Input,InputLabel } from '@material-ui/core';

import Todo from "./Todo"
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState("");

  // when the app load we need to listen to the database and fetch new todos as they get added or removed
   useEffect(() => {
     //this code here...fires when the ap.js load
    db.collection("todos").orderBy("timestamp","desc").onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));//return array of object
      setTodos(snapshot.docs.map(doc =>({id:doc.id,todo:doc.data().todo})));//bubble out array of string
           
    })
   }, []);
 




function handleChange(event){
  const newValue=event.target.value;
  setInput(newValue);
  
}



function addTodo(event){
  //this will fire the when we click the button button

  // setTodos([...todos,input]) //when adding data from the database remove local addition of value
  
  //will strop the refres of page when click the button
  event.preventDefault();

//for adding data into database
db.collection("todos").add({
  todo:input,
  timestamp:firebase.firestore.FieldValue.serverTimestamp()//for this import firebase and this is firebase server timestamp

})

  setInput("");//clear input clicking after input button
}


   
  return (
    <div className="App">
      <h1>TODO APP🖐</h1>
      <form>
          <FormControl>
            <InputLabel>✅ Write a todo</InputLabel>
            <Input value={input} onChange={handleChange}/>
          </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">add</Button>
      </form>

      <ul>
        
        {todos.map(todo=>(
          <Todo todo={todo}/>
         //<li>{todo}</li>//before making component of todo

        ))}
    
      </ul> 

    </div>
  );
}

export default App;
