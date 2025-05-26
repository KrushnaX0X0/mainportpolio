import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SplashCursor from "./components/SplashCursor";

function App() {
  return (
    <div className='h-screen w-screen '>
      <Navbar />   
      <Hero />
      <SplashCursor />

    </div>
  )
}

export default App