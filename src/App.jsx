import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from './components/Landing'
import Landing2 from './components/Landing2'
import Landing3 from './components/Landing3'
import Landing4 from './components/Landing4'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Landing/>
    <Landing2/>
    <Landing3/>
    <Landing4/>
  
    </>
  )
}

export default App
