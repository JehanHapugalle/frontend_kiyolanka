import React from 'react';
import './App.css';
import Header from './components/Header';
import logo from './images/logo.jpeg'

function App() {
  return (
    <div className="App">
      <img src={logo} width="150" alt="logo"/>
      <h1>Kiyo Lanka Coco Products PVT Ltd</h1>
      <Header/>
    </div>
  )
}

export default App;
