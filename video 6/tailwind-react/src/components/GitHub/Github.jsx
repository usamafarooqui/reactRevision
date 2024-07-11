import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData()

  // we will get this data from loader 
  // const [data , setData] = useState([])
  // useEffect(()=>{
  //   fetch(`https://api.github.com/users/hiteshchoudhary`)
  //   .then((res)=> res.json())
  //   .then((data)=>{
  //     console.log(data)
  //     setData(data)
  //   })
  // },[])
  return (
    <div>Github {data.followers}</div>
  )
}

export default Github


// method for api call in loader 

export  const githubInfoLoader = async () =>{
  const response = await fetch(`https://api.github.com/users/hiteshchoudhary`)
  return response.json()
}