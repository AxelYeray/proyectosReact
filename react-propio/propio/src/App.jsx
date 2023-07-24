import { useState } from 'react';
import './App.css';
import React from 'react';



export default function App() {
  const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
};

return(
  
  <div>
     <button onClick={handleClick}>Click me: {count}</button>
<h1>Axel es genial</h1>
  </div>

 )

}