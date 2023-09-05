import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import data from './data'
import { Card } from './Card'

function App() {
 
  const info=data.map(data=>{

   return <Card 
      img={`../src/images/${data.img}`}
      name={data.name}
      date={data.date} 
      description={data.description}
      price={data.price}
      location={data.location}
      />
  }
  )

  return (
    <>

     
      <Header />
      {info}
      
    </>
  )
}

export default App
