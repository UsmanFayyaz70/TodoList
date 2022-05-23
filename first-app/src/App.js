import React, { useEffect, useState } from 'react';
import Header from './Components/Header'
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <Header/>
      <h1>Count is: {count}</h1>
      <button onClick={()=>{setCount(count+10)}}>+</button>
      <button onClick={()=>{setCount(count-1)}}>-</button>
    </div>
  )
}

export default App
