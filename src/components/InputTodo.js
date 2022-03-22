import React, { useState } from "react";

const InputTodo = (props) =>  {
  const [title, setTitle] = useState("")

  const onChange = e => {
    setTitle(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()) {
      this.props.addTodoProps(title)
      setTitle("")
    } else {
      alert("Please add todo")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" className="input-text" placeholder="Add Todo..." value={title} onChange={onChange}
      name="title"/>
      <button className="input-submit">Submit</button>
    </form>
  )
}

export default InputTodo;