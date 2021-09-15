import React, {useState, useEffect} from "react";
import axios from "axios";
// import { act } from "react-dom/cjs/react-dom-test-utils.development";

function TodoList (props) {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            setTodos(response.data)
            setLoading(false)

        })

        .catch((error) => {
            setError(true)
            setLoading(false)
        });
    },[]);

    return (
        <React.Fragment>
            {loading && (<div>Loading...</div>)}
            {(!loading && !error) &&
                (<ol>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.title}<br/>
                            {todo.body}
                        </li>
                    ))}
                </ol>)
            }
            {(!loading && error) && (<div>{'Unexpected Error'}</div>)}
        </React.Fragment>

    );

}

export default TodoList