import React from "react";

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
      <ul>
        {this.state.todos.map(todo => (
          <li>{todo.title}</li>
        ))}
      </ul>
    )
  }
}

export default TodoContainer;
