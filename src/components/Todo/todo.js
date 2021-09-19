import React, { useState } from 'react';
import './todo.scss'
import TodoItem from './todoItem';
import NewTodoForm from './newTodoForm';

class Todo extends React.Component {
  state = {
    elements: [
      {
        id: '1',
        title: 'zrobic zakupy',
        isCompleted: true
      },
      {
        id: '2',
        title: 'frachty',
        isCompleted: false
      },
      {
        id: '3',
        title: 'kurczaczki',
        isCompleted: false
      },
      {
        id: '4',
        title: 'jajuszka',
        isCompleted: false
      },
      {
        id: '5',
        title: 'kiełbaski',
        isCompleted: false
      }
    ],
    inputValue: ''
  }

  toggleCheck(id) {
    const index = this.state.elements.findIndex(x => x.id === id)
    const newElements = this.state.elements
    newElements[index].isCompleted = !newElements[index].isCompleted

    this.setState({ elements: newElements })
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

    const newElements = [item, ...this.state.elements];

    if(item.title === '') {
      checkInput = true;
    } else {
      this.setState({ elements: newElements })
      this.setState({ inputValue: '' })
    }
  }

  removeTodo(id) {
    const newList = this.state.elements.filter((item) => item.id !== id)
    this.setState({ elements: newList })
  }

  editTodo() {
  }

  render() {
    const { elements, inputValue } = this.state;
    const tasks = elements.map(task => {
      return <TodoItem task={task} markClicked={this.toggleCheck.bind(this)} removeHandler={this.removeTodo.bind(this)} editHandler={this.editTodo.bind(this)} />
    })

    return (
      <div className="todo-container">
        <h1 className="title">Todo - app</h1>
        <div className="card-container mb-20">
          <NewTodoForm 
            onSubmit={this.addTodo}
            onChange={this.updateDraft}
            inputValue={inputValue}
            />
        </div>
        <div className="card-container">
          {tasks}
        </div>
      </div>
    )
  }
}

export default Todo;