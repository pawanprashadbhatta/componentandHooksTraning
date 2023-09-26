import React from 'react'



const Card = (prop) => {
  return (
    <>
   
    <img src={prop.image} alt="imageof pob" />
      <p>{prop.name}</p>
    <p>{prop.content}</p>
    
    </>
  )
}

export default Card