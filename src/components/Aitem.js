import React from 'react'

const Aitem = ({name, eno }) => {
  return (
    <div className="attendenceItem">
    <h1> {name} </h1>
    <p> <b>{eno}</b> </p>
  </div> 
     )
}

export default Aitem