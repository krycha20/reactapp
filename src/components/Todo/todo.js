import React from 'react';
import './todo.scss'
import TodoItem from './todoItem'

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

  inputHandler(event) {
    const newValue = event.target.value
    this.setState({ inputValue: newValue })
  }

  addItem() {
    // add to list
    const item = {
      id: Math.random(),
      title: this.state.inputValue
    }
    const newElements = [item, ...this.state.elements]

    this.setState({ elements: newElements })
    this.setState({ inputValue: '' })
  }

  removeItem(id) {
    const newList = this.state.elements.filter((item) => item.id !== id)
    this.setState({ elements: newList })
  }

  render() {
    const elements = this.state.elements.map(e => {
      return <TodoItem element={e} markClicked={this.toggleCheck.bind(this)} removeHandler={this.removeItem.bind(this)} />
    })
    return (
      <div className="todo-container">
        <h1 className="title">Todo - app</h1>
        <div className="card-container mb-20">
          <div className="card">
            <input type="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)}/>
            <button onClick={this.addItem.bind(this)}>Dodaj do listy</button>
          </div>
        </div>
        <div className="card-container">
          {elements}
        </div>
      </div>
    )
  }
}

export default Todo;