import React from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

// Función flecha o Arrow Function
const App = () => {
  // Lo que ejecuta la función
  return (
    <main className="react-calculator">
      <Result value={undefined}/>
      <Numbers
        onClickNumber={number =>
        console.log("Click en el número: ", number)
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