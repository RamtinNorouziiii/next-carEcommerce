import React from 'react'
import Carslist from '../../components/templates/carslist'
import carsData from "../../data/cars"
function ShowCars() {
  
  return (
    <div>
        <Carslist cars={carsData} />
    </div>
  )
}

export default ShowCars