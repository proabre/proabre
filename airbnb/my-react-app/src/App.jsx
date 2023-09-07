import { useState } from 'react'
import React from 'react'
import './App.css'
import { AirBnbHeader } from './AirBnbHeader'
import { Air } from './Air'
import Data from './Data'
import { Card } from './Card'


function App() {

    const cards=Data.map(data=>{
    
        return <Card 

                      img={`../src/images/${data.coverimg}`}
                      starimg={`../src/images/${data.starimg}`}
                      name={data.name} 
                      distance={data.distance} 
                      date={data.date } 
                      rating={data.rating}
                      price={data.price}
                      bage={data.bage}
                />
                
        })

    return (
      <>
        <Air />
        <div className="car">
            {cards}
        </div>
      

      </>
    )
}

export default App
