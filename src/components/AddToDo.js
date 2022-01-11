import { useState, useEffect } from 'react'

const initialFormValues = {
  toDoText: "",
  status: false,
}

function AddToDo({ addToDo, todos }) {

  const [inputForm, setInputForm] = useState(initialFormValues)

  useEffect(() => {
    setInputForm(initialFormValues)
  }, [todos])

  const onChangeInput = (e) => {
    setInputForm({ ...inputForm, [e.target.name] : e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(inputForm.toDoText === "") {
      return false
    } 
    addToDo([...todos, inputForm])
  }

  return (
    <form onSubmit={onSubmit}>
      <input
      name="toDoText"
      className="new-todo"
      placeholder="What needs to be done?"
      value={inputForm.toDoText}
      onChange={onChangeInput}
      autoFocus 
      />
    </form>
  )
}

export default AddToDo
