import React, {useState} from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

// Función flecha o Arrow Function
const App = () => {
  //Array destructuring
  // 1er posición: valor (que inicialmente es el valor por defecto)
  // 2da posicion: funcion que me va a permitir modificar el valor por defecto
  const [texto, funcionModificaTexto] = useState("")

  // Lo que ejecuta la función
  console.log("Renderizacion de la app")
  return (
    <main className="react-calculator">
      <Result value={texto}/>
      <Numbers
        onClickNumber={number =>
        //console.log("Click en el número: ", number),
        funcionModificaTexto(number)
        }
      />
      <Functions 
        onContentClear={() =>
          console.log("Content clear")
        }
        onDelete={() => 
          console.log("OnDelete")
        }
      />
      <MathOperations 
        onClickOperation={operation => 
          console.log("Operations: ", operation)  
        }
        onClickEqual={equal => 
          console.log("Equal: ", equal)  
        }
      />
    </main>)
}
// Exportación
export default App;