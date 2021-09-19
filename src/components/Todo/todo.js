import React, { useState } from 'react';
import './todo.scss'
import TodoItem from './todoItem';
import NewTodoForm from './newTodoForm';

class Todo extends React.Component {
  state = {
    tasksList: [
      {
        id: '1',
        title: 'zrobic zakupy',
        isCompleted: true
      },
      {
        id: '2',
        title: 'frachty',
        isCompleted: false
      }
    ],
    inputValue: ''
  }

  toggleCheck(id) {
    const index = this.state.tasksList.findIndex(x => x.id === id)
    const newElements = this.state.tasksList
    newElements[index].isCompleted = !newElements[index].isCompleted

    this.setState({ tasksList: newElements })
  }

  updateDraft = event => {
    this.setState({ inputValue: event.target.value })
  }

  addTodo = () => {
    // add to list
    let checkInput = false;
    const item = {
      id: Math.random(),
      title: this.state.inputValue
    }

    const newElements = [item, ...this.state.tasksList];

    if(item.title === '') {
      checkInput = true;
    } else {
      this.setState({ tasksList: newElements })
      this.setState({ inputValue: '' })
    }
  }

  removeTodo(id) {
    const newList = this.state.tasksList.filter((item) => item.id !== id)
    this.setState({ tasksList: newList })
  }

  removeAll = () => {
    console.log('dsadsa', this.state.tasksList);
    this.setState({tasksList: []});
  }

  editTodo() {
  }

  render() {
    const { tasksList, inputValue } = this.state;
    const tasks = tasksList.map(task => {
      console.log('task', task);
      return <TodoItem task={task} markClicked={this.toggleCheck.bind(this)} removeHandler={this.removeTodo.bind(this)} editHandler={this.editTodo.bind(this)} />
    })

    console.log('taksk', tasks)

    return (
      <div className="todo-container">
        {tasks ? 'elo' : 'nie elo'}
        <h1 className="title">Todo - app</h1>
        <div className="card-container mb-20">
          <NewTodoForm 
            onSubmit={this.addTodo}
            onChange={this.updateDraft}
            inputValue={inputValue}
            />
        </div>
        <div className="other-actions">
          <button onClick={this.removeAll}>Remove All</button>
        </div>
        <div className="card-container tasks-list">
          {tasks}
        </div>
      </div>
    )
  }
}

export default Todo;