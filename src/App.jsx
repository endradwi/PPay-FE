import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <button className='btn btn-primary text-info'> Click me</button>
    <button className='btn btn-secondary'> Click me</button>
    <button className='btn bg-abuMuda'> Click me</button>
    <button className='btn btn-neutral'> Click me</button>
    <button className='btn btn-info'> Click me</button>
    <button className='btn btn-success'> Click me</button>
    <button className='btn btn-warning'> Click me</button>
    </>
  )
}

export default App

