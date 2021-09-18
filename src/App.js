import { React } from 'react';
import './components/FontAwesomeIcons/awesomeFont';
import './app.scss'
import Header from './components/Header/header'
import Todo from './components/Todo/todo';
import { useState } from 'react';
import Modal from './components/Modal/modal';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="app">
      <Header />
      <Todo />
      <Modal />
    </div>
  );
}

export default App;