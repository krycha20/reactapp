import { React } from 'react';
import './components/FontAwesomeIcons/awesomeFont';
import './app.scss'
import Header from './components/Header/header'
import Todo from './components/Todo/todo';

function App() {

  return (
    <div className="app">
      <Header />
      <Todo />
    </div>
  );
}

export default App;