import React, { useState } from 'react'
import '../App.css'
const BgChange = () => {
    const [color , setColor] = useState("olive")


  return (
    <div style={{backgroundColor:color}}>
        <div className='btnContainer'>
            <button className='btn' onClick={()=>setColor('red')}>Red</button>
            <button className='btn' onClick={()=>setColor('green')}>Green</button>
            <button className='btn' onClick={()=>setColor('yellow')}>Yellow</button>
        </div>
    </div>
  )
}

export default BgChange