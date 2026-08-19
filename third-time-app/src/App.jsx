import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Stopwatch from './components/Stopwatch/Stopwatch'
import Toggle from './components/Toggle/Toggle'
import HomePage from './components/HomePage/HomePage'
import 'react-tooltip/dist/react-tooltip.css'

function App() {

  return (
    <div className='everything'>
      <HomePage></HomePage>
    </div>
  )
}

export default App
