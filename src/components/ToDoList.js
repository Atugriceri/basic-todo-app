import { useState } from 'react'

function ToDoList({ todos, setTodos }) {

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredList = 
    activeCategory === "All"
      ? todos
      : activeCategory === "Active"
      ? todos.filter((task) => task.status !== true)
      : todos.filter((task) => task.status !== false);

  const handleCheck = (index) => {
    let tempArr = todos.slice()
    tempArr[index].status = !tempArr[index].status
    setTodos(tempArr)
  }

  let itemCount = 0
  let completedCount = 0

  for (let i = 0; i < todos.length; i++) {
    if (!todos[i].status) {
      itemCount++
    } else {
      completedCount++
    }
  }

  const handleDelete = (key) => {
    setTodos(todos.filter((item, index) => index !== key))
  }

  const deleteCompleted = () => {
    let newArr = []
    newArr = todos.filter((item) => item.status === false)
    setTodos(newArr)
  }

  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">
          Mark all as complete
        </label>
        <ul className="todo-list">
          {
            filteredList.map((item, index) =>
              <li className={item.status ? "completed" : null} key={index}>
                <div className="view">
                  <input 
                  className="toggle" 
                  type="checkbox" 
                  onChange={() => handleCheck(index)} 
                  checked={item.status}
                  />
                  <label>{item.toDoText}</label>
                  <button className="destroy" onClick={() => handleDelete(index)}></button>
                </div>
              </li>
            )}
        </ul>
      </section>
      <footer className={todos.length === 0 ? "d-none" : "footer"}>
        <span className="todo-count">
          <strong>{`${itemCount} `}</strong>
          item{itemCount > 1 ? "s" : null} left
        </span>
        <ul className="filters">
          <li onClick={() => setActiveCategory("All")}>
            <a className={(activeCategory === "All" && "selected").toString()}>All</a>
          </li>
          <li onClick={() => setActiveCategory("Active")}>
            <a className={(activeCategory === "Active" && "selected").toString()}>Active</a>
          </li>
          <li onClick={() => setActiveCategory("Completed")}>
            <a className={(activeCategory === "Completed" && "selected").toString()}>Completed</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={deleteCompleted}>
          Clear completed
        </button>
      </footer>
    </>
  )
}

export default ToDoList
