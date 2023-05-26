import Donacion from './componentes/Donacion'
import datos from './data/datos'
import './App.css'

function App() {
  const list = datos.map((d) => {
    return <Donacion element = {d}/>
  })
  
  return (
    <div>
      {list}
    </div>
  )
}

export default App
