import React from 'react'
import { List, ListItem, ListItemAvatar , ListItemText} from '@material-ui/core';
function Todo(props) {
    return (
        <List>
         <ListItem>
              <ListItemAvatar>
             </ListItemAvatar>
              <ListItemText primary={props.text} secondary="Dummy Deadline⏰" />
           </ListItem>
            {/* <li>{props.text}</li> */}
        </List>
    )
}

export default Todo
