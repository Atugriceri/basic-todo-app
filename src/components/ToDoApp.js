import { useState } from 'react'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'

function ToDoApp() {

  const [todos, setTodos] = useState([])

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddToDo addToDo={setTodos} todos={todos} />
        </header>
        <ToDoList todos={todos} setTodos={setTodos} />
      </section>
    </>
  )
}

export default ToDoApp
