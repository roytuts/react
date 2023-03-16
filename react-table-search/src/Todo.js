import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
export default function Todo() {

    const [todos, setTodos] = useState([]);
    const [todosInitial, setTodosInitial] = useState([]);
    const [todoSearch, setTodoSearch] = useState("");

    useEffect(() => {
        axios({
            url: "https://jsonplaceholder.typicode.com/todos"
        }).then(response => {
            //console.log(response.data);
            setTodos(response.data);
            setTodosInitial(response.data);
        })


    }, []);

    function handleTodoChange(e) {
        e.preventDefault();
        setTodoSearch(e.target.value);
        setTodos(todosInitial.filter(todo => todo.title.includes(todoSearch)));
    }
    return (
        <div className="App">
            <hr />
            <label>Search</label> <input type="text" value={todoSearch} name="todosearch" onChange={handleTodoChange} />
            <hr />
            <table>
                <tbody>
					<tr>
						<th>Title</th>
						<th>Status</th>
					</tr>
                    {todos.map(todo => (
                        <tr>
                            <td>{todo.title}</td>
                            <td>{todo.completed.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
