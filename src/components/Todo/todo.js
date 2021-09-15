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
    ]
  }

  toggleCheck(id) {
    const index = this.state.elements.findIndex(x => x.id === id)
    const newElements = this.state.elements
    newElements[index].isCompleted = !newElements[index].isCompleted

    this.setState({ elements: newElements })
  }

  render() {
    const elements = this.state.elements.map(e => {
      return <TodoItem element={e} markClicked={this.toggleCheck.bind(this)} />
    })
    return (
      <div class="todo-container">
        <h1 className="title">Todo - app</h1>
        <div className="card-container">
          {elements}
        </div>
      </div>
    )
  }
}

export default Todo;