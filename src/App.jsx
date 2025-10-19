import React, { useState,useEffect } from 'react'
import DigitalClock from './DigitalCLock'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DigitalClock/>
    </>
  )
}

export default App
