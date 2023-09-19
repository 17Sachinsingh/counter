import React, { useState } from 'react'
import './counter.css'
const Counter = () => {
    const [count ,setCount]=useState(0);
    const increase=()=>{
        setCount(count=>count+1)
    }
    const decrease=()=>{
        if(count>0){
        setCount(count=>count-1)
        }
    }
    const reset=()=>{
        setCount(0)
    }
  return (
    <div className='counter'>
        <span className='res'>{count}</span>
    <div className="buttons">
      <button onClick={increase} className='inc'>Increase</button>
      <button onClick={decrease} className='dec'>Decrease</button>
      <button onClick={reset} className='reset'>Reset</button>
      </div>
    </div>
  )
}

export default Counter
