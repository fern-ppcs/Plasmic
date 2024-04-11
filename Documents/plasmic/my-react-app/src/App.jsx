import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button2 from './components/Button2'
import PlasmicNewPage from './components/plasmic/website_starter/PlasmicNewPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PlasmicNewPage />

    </>
  )
}

export default App
