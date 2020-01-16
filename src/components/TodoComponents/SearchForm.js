import React, { useState, useEffect } from 'react'

export default function SearchForm(props) {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    // console.log(props.todos)

    // props.todos.map(todo => console.log(todo))
    
    useEffect(()=> {
        const searchTodo = props.todos.filter(todo =>
            todo.task.toLowerCase().includes(query.toLowerCase())
         );
        setData(searchTodo);
    }, [query])

    const handleChange = e => {
        setQuery(e.target.value)
    }

    return (
        <div>
            <form>
            <input name="search" onChange={handleChange} placeholder='Search Task' value={query} />
            </form>
            {data.map(task => (<h2 key={task}>{data.task}</h2>))}
        </div>
    )
}
