import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <div className = "App">
    <Header tryout = "Hello"/>  
    <img src = {logo} className="App-logo" ></img>
    <Footer item = "logo"/>
    </div>
    </>
  );
}

export default App;
