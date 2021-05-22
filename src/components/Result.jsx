import React from 'react'

const Result = ({value}) => {
  console.log("Renderización del Result", value)
  return(
    <div className="result">
      {value}
    </div>
  )
}

export default Result