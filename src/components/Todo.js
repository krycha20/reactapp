import React from 'react';
import TodoItem from './TodoItem'

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

  // markCompleted(id) {
  //   const index = this.state.elements.findIndex(x => x.id == id)
  //   const newElements = this.state.elements
  //   newElements[index].isCompleted = true

  //   this.setState({ elements: newElemenets })
  // }

  render() {
    const elements = this.state.elements.map(e => {
      return <TodoItem element={e} />
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