import React from 'react'
import { List, ListItem, ListItemAvatar , ListItemText, Button} from '@material-ui/core';
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


function Todo(props) {
    return (
        <List>
         <ListItem>
              <ListItemAvatar>
             </ListItemAvatar>
              <ListItemText primary={props.todo.todo} secondary="Dummy Deadline⏰" />
           </ListItem>
           <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
           {/* <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete me!</Button> */}
            {/* <li>{props.text}</li> */}
        </List>
    )
}

export default Todo
