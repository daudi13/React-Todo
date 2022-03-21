import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "SetUp development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and Add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      },
    ]
  }

  handleChange = () => {
    console.log('clicked')
  }

  render() {
    return (
      <div>
        <Header/>
        <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} />
      </div>
    )
  }
}

export default TodoContainer;
