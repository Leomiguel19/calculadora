import React from 'react'
import Result from './components/Result'
import Button from './components/Button'
import './App.css'

// Función flecha o Arrow Function
const App = () => {
  // Lo que ejecuta la función
  console.log("Renderización de la App")
  return (
    <main className="react-calculator">
      <Result value={undefined}/>
      <div className="numbers">
        <Button text='1'/>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </div>
      <div className="functions">
        <button>clear</button>
        <button>r</button>
      </div>
      <div className="math-operations">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div>
    </main>)
}
// Exportación
export default App;