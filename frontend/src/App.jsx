import { useState } from 'react'
import Router from './routes/Router'

function App() {
  const url = "https://cloudkitchen-2itp.onrender.com";
  return (
    <>
      <Router url={url}/>
    </>
  )
}

export default App
