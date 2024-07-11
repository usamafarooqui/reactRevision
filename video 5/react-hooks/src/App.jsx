import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5);

  function increase() {
    // it will run only one time
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    // try this then 
    setCount((previous)=> previous+1);
    setCount((previous)=> previous+1);
    setCount((previous)=> previous+1);
    setCount((previous)=> previous+1);
    setCount((previous)=> previous+1);
  }

  function decrese() {
    if(count <= 0){
      setCount(0);
    }else{
      setCount(count-1)
    }
}
  return (
    <>
     <h1>hello </h1>
     <h3>Counter value : {count}</h3>
     <button onClick={increase}>Increase</button>
     <button onClick={decrese}>Decrease</button>
    </>
  )
}

export default App
