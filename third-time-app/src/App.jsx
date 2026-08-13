import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Stopwatch from './components/Stopwatch/Stopwatch'
import Toggle from './components/Toggle/Toggle'

function App() {

  return (
    <div className='everything'>
      <Toggle></Toggle>
      <Stopwatch></Stopwatch>
    </div>
  )
}

export default App
