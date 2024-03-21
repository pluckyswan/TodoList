import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Create from "@mui/icons-material/Create"
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import React, { useState } from "react"

export default function TodoForm({ add }) {
    const [field, setField] = useState("")

    const handleChange = (event) => {
        event.preventDefault()
        setField(event.target.value)
    }

    const addTodo = (event) => {
        event.preventDefault()
        add(field)
        setField("")
    }

    return (
        <div>
            <ListItem>
            <form onSubmit={addTodo}>
            <TextField 
            id="outlined-basic" 
            label="Add todo" 
            variant="outlined" 
            onChange={handleChange} 
            value={field} 
            InputProps= {{
                endAdornment: (<InputAdornment position="end">
                <IconButton
                  aria-label="create todo"
                  edge="end" onClick={addTodo}
                >
                  <Create  />
                </IconButton>
              </InputAdornment> )}}/>
              </form>
            </ListItem>
        </div>
    )
}