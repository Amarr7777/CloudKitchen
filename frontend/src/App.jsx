import { useState } from 'react'
import Router from './routes/Router'

function App() {
  const url = "http://localhost:4000";
  return (
    <>
      <Router url={url}/>
    </>
  )
}

export default App
