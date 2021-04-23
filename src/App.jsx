import React,{useState} from 'react'
import { Inicio } from './Components/Inicio/Inicio';
import { Menu } from "./Components/Menu/Menu";
import { Visor } from './Components/Visor/Visor';

function App() {
  const [stack,setStack] = useState( <Inicio/> );
  return (
    <div className="App">
     <Menu cambiarcomponente={setStack}/>
     <Visor componente={stack}/>
    </div>
  );
}

export default App;
