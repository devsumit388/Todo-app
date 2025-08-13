import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Bar from './Components/bar'
import Add from './Components/List'

function App() {

  return (
    <>
      <div className='relative h-[100vh] w-[100vw]  overflow-hidden'>
        <div className='bg-[#063766] h-[100vh] w-[100vw]  bg-cover  absolute inset-0'> </div>
        <div className='bg-black h-[100vh] w-[100vw] opacity-[60%] absolute top-0'> </div>
        <div className='w-[80vw] sm:w-[60vw] h-[100vh] mx-auto  relative z-10  top-0 rounded-[30px]  font-quicksand'> 
        <Nav/>
        <Bar/>
        <Add/>
        </div>
      </div>
    </>
  )
}

export default App
