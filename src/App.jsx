import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')


  return (
    <>
      <div className='w-screen h-screen' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap justify-center text-black gap-3 shadow-lg px-3 py-2 '>
          <button className='bg-red-500' onClick={()=>{setColor('red')}}>Red</button>
          <button className='bg-green-500' onClick={()=>{setColor('green')}}>Green</button>
          <button className='bg-blue-500' onClick={()=>{setColor('blue')}}>Blue</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
