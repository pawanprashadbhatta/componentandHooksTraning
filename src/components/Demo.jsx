import React from 'react'
   export const emp = [
  {
    name: "John Doe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJHRTNiBx4-H2sVC_Rxa8UFP6epuD9PfFctvdWPM&s",
    phoneNumber: "+1 (123) 456-7890",
    salary: 60000,
    age: 30,
    post: "Software Engineer",
  },
  {
    name: "Jane Smith",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJHRTNiBx4-H2sVC_Rxa8UFP6epuD9PfFctvdWPM&s", 
    phoneNumber: "+1 (234) 567-8901",
    salary: 70000,
    age: 28,
    post: "Project Manager",
  },
  {
    name: "Michael Johnson",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJHRTNiBx4-H2sVC_Rxa8UFP6epuD9PfFctvdWPM&s",
    phoneNumber: "+1 (345) 678-9012",
    salary: 75000,
    age: 35,
    post: "Data Analyst",
  },
  
];

     
  
 
const Demo = (pr) => {
  return (
    <>
    <img
        style={{ width: 200, height: 200,  objectFit: "cover" }}
        src={pr.demo.image}
        alt="image"
      />
      <p>Name: {pr.demo.name}</p>
      <p>Price: Rs.{pr.demo.salary}</p>
      <p>Age:{pr.demo.age}</p>
      <p>Post:{pr.demo.post}</p>
      <p>Phone:{pr.demo.phoneNumber}</p>
    </>
  )
}

export default Demo