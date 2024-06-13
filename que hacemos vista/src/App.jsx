import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quehacemos from './componentes/Quehacemos'
import Boton from './componentes/Boton'
import pc from './assets/pc.png';
import fondo from './assets/fondo.png';
import Compu from './componentes/Compu'



function App() {
  const [count, setCount] = useState(0)
  return (
 
 <div className='Container'>
  
        <Boton />
        <Quehacemos />
        <Compu imagen={pc} />

    </div>

    
  )
}
export default App
