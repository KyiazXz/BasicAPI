import React from 'react'
import { useState , useEffect } from 'react'
import "./basicAPI.css"

const api = 'https://dummyjson.com/users' ;


function BasicAPI() {
const [data , setData] = useState ( [ ] );

const fetchData = fetch (api).then ((res)=>res.json()).then((data)=>setData(data.users))


  return (
    <main>
    {data.map((item)=>{
        return (<section> 
       
        <img src={item.image} alt={item.lastName}/>
          <h2>Name:{item.firstName}</h2>
        <h4>Phone: {item.phone}</h4>
        <p>Card: {item.bank.cardNumber}</p>
        </section>)
    })}
    </main>
  )
}

export default BasicAPI