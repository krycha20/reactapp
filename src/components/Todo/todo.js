import React from 'react';
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
      }
    ]
  }

  toggleCheck(id) {
    const index = this.state.elements.findIndex(x => x.id === id)
    const newElements = this.state.elements
    newElements[index].isCompleted = !newElements[index].isCompleted

    console.log(window.location.href);

    this.setState({ elements: newElements })
  }

  render() {
    const elements = this.state.elements.map(e => {
      return <TodoItem element={e} markClicked={this.toggleCheck.bind(this)} />
    })
    return (
      <div>
        <h1 className="header">Todo app</h1>
        {elements}
      </div>
    )
  }
}

export default Todo;