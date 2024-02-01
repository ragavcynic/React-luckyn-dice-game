import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LuckyN from './LuckyN'
import BoxGrid from './assets/BoxGrid'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    {/* <LuckyN numDice={3} goal={11}/> */}
    <BoxGrid/>
    </>)
}

export default App
