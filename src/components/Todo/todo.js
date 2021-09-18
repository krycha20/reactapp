import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './todo.scss'
import TodoItem from './todoItem';

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
    let checkInput = false;
    const error = <div>dbjskal</div>;
    const item = {
      id: Math.random(),
      title: this.state.inputValue
    }

    const newElements = [item, ...this.state.elements];

    if(item.title === '') {
      console.log('nic nie wpisales');
      checkInput = true;
    } else {
      this.setState({ elements: newElements })
      this.setState({ inputValue: '' })
    }
  }

  removeItem(id) {
    const newList = this.state.elements.filter((item) => item.id !== id)
    this.setState({ elements: newList })
  }

  editItem(id) {
    console.log('duaop');
    // const newItem = this.state.elements.filter((item) => item.title !== title)
    // console.log(newItem);
    // this.setState({ elements: newItem })
  }

  render() {
    const elements = this.state.elements.map(e => {
      return <TodoItem element={e} markClicked={this.toggleCheck.bind(this)} removeHandler={this.removeItem.bind(this)} editItem={this.editItem.bind(this)} />
    })

    return (
      <div className="todo-container">
        <h1 className="title">Todo - app</h1>
        <div className="card-container mb-20">
          <div className={`card${this.checkInput ? ' kapusta' : ''}`}>
            <input type="text" value={this.state.inputValue} placeholder="Enter the name of the task" onChange={this.inputHandler.bind(this)}/>
            <button className="add-button" onClick={this.addItem.bind(this)}>
              <FontAwesomeIcon icon="plus-square" />
            </button>
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