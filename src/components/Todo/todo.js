import React, { Component } from 'react';
import './todo.scss';
import TodoItem from './todoItem';
import NewTodoForm from './newTodoForm';
import * as toDoItemApi from '../../helpers/toDoItemApi';
import * as _ from 'ramda';

class Todo extends Component {
  
  componentDidMount = async () => {
    const tasks = await toDoItemApi.getAll()
    this.setState({ tasks })

    toDoItemApi.getAll()
  }

  state = {
    tasks: [],
    inputValue: ''
  }
  
  toggleCheck = (id) => {
    console.log('id => ', id)
    // fetch(`http://localhost:5000/tasksList/${id}`, {
    //   method: 'PUT',
    //   headers: { "Content-Type": 'application/json; charset=utf-8' },
    //   body: JSON.stringify({
    //     done: !this.state.done
    //   })
    // }).then(response => {
    //   if(response.ok) {
    //     this.setState({ done: !this.state.done} )
    //   }
    // });
    // const index = this.state.tasksList.findIndex(x => x.id === id)
    // const newElements = this.state.tasksList
    // newElements[index].isCompleted = !newElements[index].isCompleted

    // this.setState({ tasksList: newElements })
  }

  updateDraft = event => {
    this.setState({ inputValue: event.target.value })
  }

  addTodo = async () => {
    const { tasks, inputValue } = this.state;
    const task = await toDoItemApi.create({ title: inputValue, done: false});
    this.setState({ tasks: _.append(task, tasks), inputeValue: ''})
  }

  findById = (id, arr) => {
    const index = _.findIndex(_.propEq('id', id))(arr)

    return { index, task : arr[index]}
  }

  destroyTodo = async (id) => {
    const { tasks} = this.state;
    await toDoItemApi.destroy(id)
    const { index } = this.findById(id, tasks);

    this.setState({ tasks: _.remove(index, 1, tasks) });
  }

  removeAll = async () => {
    const { tasks} = this.state;
    await toDoItemApi.destroy(tasks)
    console.log('remove all', tasks);
    this.setState({ tasks: _.remove(tasks)} );
  }

  editTodo() {
  }

  render() {
    const { tasks, inputValue } = this.state;
    const taskItem = tasks.map(item => {
      return <TodoItem 
        id={item.id} 
        key={item.id} 
        task={item} 
        // markClicked={this.toggleCheck.bind(this)} 
        destroy={this.destroyTodo} 
        />
    })

    let otherOptions;
    if(tasks.length)
      otherOptions = 
        <div className="other-actions">
          <button onClick={this.removeAll}>Remove All</button>
        </div>;

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
        {otherOptions}
        <div className="card-container tasks-list">{taskItem}</div>
      </div>
    )
  }
}

export default Todo;