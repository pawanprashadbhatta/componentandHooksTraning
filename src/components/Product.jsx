import React from 'react'


 
    const Product = (prop) => {
  return (
    <>
  
      <img
        style={{ width: 200, height: 200,  objectFit: "cover" , }}
        src={prop.products.image}
        alt="image"
      />
      <p>Name: {prop.products.name}</p>
      <p>Price: Rs.{prop.products.price}</p>
    </>
  );
};
    


export default Product