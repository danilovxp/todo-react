import React, { useState } from 'react'
import './App.scss'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: 'Lorem ipsum dolor sit amet.',
      priority: false,
      done: false,
    },
    {
      id: 1,
      text: 'Lorem ipsum dolor sit.',
      priority: false,
      done: false,
    },
  ])
  const [inputText, setInputText] = useState('')

  const handleInputText = (event) => {
    setInputText(event.target.value)
  }

  const addTodo = () => {
    setTodos([...todos, { id: todos.length, text: inputText, priority: false, done: false }])
    setInputText('')
  }
  const handlerDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          todo.done = !todo.done
        }
        return todo
      }),
    )
  }
  return (
    <div className="container">
      <div>You have {todos.length} tasks</div>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <p>{todo.text}</p>
              {todo.done.toString()}
              <button onClick={() => handlerDone(todo.id)}>done</button>
            </div>
          )
        })}
      </div>
      <div>
        <input onChange={handleInputText} value={inputText} type="text" />
        <button onClick={addTodo}>add</button>
      </div>
    </div>
  )
}

export default App
