import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
// import Design from "./Container/index"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from './Components/Todo';
import TodoList from './Components/TodoList';
import About from './Components/About';
const root = ReactDOM.createRoot(document.getElementById('root'));
<BrowserRouter>
    <Routes>
        <Route path="/" element = {<App/>}/>
        <Route path="/About" element = {<About/>}/>
    </Routes>

</BrowserRouter>
root.render(<App/>);
