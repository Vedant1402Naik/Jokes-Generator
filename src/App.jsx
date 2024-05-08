import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Joke from './Joke'
import Button from './Button'
import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <h1>Generate Joke Using React</h1>
        <Joke/>
      </div>
    </>
  )
}

export default App
