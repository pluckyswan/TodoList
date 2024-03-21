import { useState, useEffect } from "react"
import * as React from 'react';
import List from '@mui/material/List';
import TodoItem from "./TodoItem"
import TodoForm from "./TodoForm"

const initialTodos = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if (!data) {
        return []
    }
    return data
}

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const removeTodo = (id) => {
        setTodos(prevTodo => {
            return prevTodo.filter((todo) => todo.id !== id )
        })
    }

    const toggleTodo = (id) => {
        setTodos(prevTodo => {
            return prevTodo.map((todo) => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
        })
    }

    const addTodo = (field) => {
        setTodos(prevTodo => {
            return [...prevTodo, { text: field, id: crypto.randomUUID(), completed: false }]
        })
    }

    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} remove={removeTodo} toggle={toggleTodo}/>
                ))}
                <TodoForm add={addTodo} />
            </List>
        </div>
    )
}



// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//
//       {[0, 1, 2, 3].map((value) => {

// }
