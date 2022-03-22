import React, { Component } from "react";

class inputTodo extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Add Todo..." />
        <button>Submit</button>
      </form>
    )
  }
}

export default inputTodo;