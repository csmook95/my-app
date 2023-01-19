import { useState, useEffect } from "react"

function Component() {
    const [todo, setTodo] = useState(String)
    const [todos, setTodos] = useState(Array<string>)
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (todo === ``) return
        setTodos(prev => [todo, ...prev])
        setTodo(``);
    }
    useEffect(() => console.log(todos), [todos])

    return (
        <div>
            <h1>My To Dos ({todos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={todo}
                    onChange={onChange}
                    type="text"
                    placeholder="Wrute your to do..."></input>
                <button>Add to do</button>
            </form>
            <hr />
            <ul>
                {todos.map((value, index) =>
                    <li key={index}>{value}</li>)}
            </ul>
        </div>
    )
}

export default Component