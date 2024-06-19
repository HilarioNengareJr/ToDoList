import React from 'react';
import Header from './components/Header';
import Main from './components/MainPage';
import './App.css';

const App = () => {
  return (
    <article className='app-box'>
      <Header />
      <Main />
    </article>
  );
}

export default App;
