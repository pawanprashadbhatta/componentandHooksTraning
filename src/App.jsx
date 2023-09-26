import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Product from './components/Product'
import Demo, { emp } from './components/Demo'
import Hook from './components/Hook'

import ProductCard from './components/fakeapi'


 


const temp = [
  {
    name: "name 1",
    price: 400,
    image:
      "https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=2048x2048&w=is&k=20&c=8Y2YB8oWnPb17Gl2dIKjm7GanOtnC2OSWLPrIUmnGuQ=",
  },
  {
    name: "name 2",
    price: 500,
    image:
      "https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=2048x2048&w=is&k=20&c=8Y2YB8oWnPb17Gl2dIKjm7GanOtnC2OSWLPrIUmnGuQ=",
  },
  {
    name: "name 3",
    price: 600,
    image:
      "https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=2048x2048&w=is&k=20&c=8Y2YB8oWnPb17Gl2dIKjm7GanOtnC2OSWLPrIUmnGuQ=",
  },
];
function App() {
  

  return (
    <>
      <Hook  />
      <Card image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJHRTNiBx4-H2sVC_Rxa8UFP6epuD9PfFctvdWPM&s' name='pob'content='hello there how r u'/>
       
      <div className="test">
      {temp.map((a, r) => (
        <Product key={r} products={a} />
      ))}
    </div>

    
    <div >
      {emp.map((element, index) => (
        < Demo  key={index}  demo={element} />
      ))}
    </div>
    {/* {
  // Your array.map() function here
  yourArray.map((element, index) => (
    // JSX to render for each element
    <YourComponent key={index} yourProp={element} />
  ))
} */}
<ProductCard  />
    </>
  )
}

export default App
