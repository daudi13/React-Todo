import React from "react";
import styles from './TodoItem.module.css'
class TodoItems extends React.Component {
  state = {
    edit: false,
  }
  handlesEditing = () => {
    this.setState({
      edit : true
    })
  }

  handleUpdateDone = (event) => {
    if (event.key === "Enter") {
      this.setState({edit: false})
    }
  }

  componentWillUnmount() {
    console.log("Cleaning up...")
  }

  render() {
    const completedStyle = {
      fontSize: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration:"line-through"
    }

    const { completed, id, title } = this.props.todo

    let viewMode = {}
    let editMode = {}

    if (this.state.edit) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    return (
      <li className={styles.item}>
        <div onClick={this.handlesEditing} style={viewMode}>
          <input type="checkbox"className={styles.checkbox} checked={this.props.todo.completed} onChange={() => this.props.handleChangeProps(id)} />
          <button onClick={() => this.props.checkDel(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>
            {title}
            </span>
        </div>
        <input type="text" style={editMode} className={styles.textInput} value={title} onChange={e => {
          this.props.setUpdate(e.target.value, id)
        }} onKeyDown={this.handleUpdateDone}/>
      </li>
    )
  }
}

export default TodoItems