import React from 'react'

const Result = (props) => {
  const { value } = props;

  console.log("Renderización del Result", value)
  return(
    <div className="result">
      {value}
    </div>
  )
}

export default Result