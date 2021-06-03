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
  const [stack, setStack] = useState("")

  // Lo que ejecuta la función
  console.log("Renderizacion de la app")
  return (
    <main className="react-calculator">
      <Result value={stack}/>
      <Numbers
        onClickNumber={number =>
        //console.log("Click en el número: ", number),
        setStack(`${stack}${number}`)
        }
      />
      <Functions 
        onContentClear={() =>
          //console.log("Content clear")
          setStack('')
        }
        onDelete={() => {
          //console.log("OnDelete")
          if(stack.length > 0){
            const newStack = stack.substring(0, stack.length -1)
            setStack(newStack)
          }          
        }}
      />
      <MathOperations 
        onClickOperation={operation => 
          //console.log("Operations: ", operation)  
          setStack(`${stack}${operation}`)
        }
        onClickEqual={equal => 
          //console.log("Equal: ", equal)  
          setStack(`${stack}${equal}`)
        }
      />
    </main>)
}
// Exportación
export default App;