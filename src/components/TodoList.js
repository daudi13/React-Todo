import React from "react";
import TodoItem from "./TodoItems";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} checkDel={this.props.checkDel} setUpdate={this.props.setUpdate}/>
        ))}
    </ul>
    )
  }
}

export default TodoList