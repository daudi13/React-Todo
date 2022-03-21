import React from "react";
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
        completed: true
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: true
      },
    ]
  }
  render() {
    return (
      <TodoList todos={this.state.todos}/>
    )
  }
}

export default TodoContainer;
