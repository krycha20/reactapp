import React from 'react'
import './app.scss'
import Header from './components/header/header'
import Todo from './components/Todo/todo'



function App() {
  return (
    <div className="app">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
