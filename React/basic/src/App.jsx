import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button count={count} setCount={setCount}></Button>
    </>
  )
}

export default App
