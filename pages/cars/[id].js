import React from 'react'
import carsData from "../../data/cars"
import CarPage from '../../components/templates/CarPage'
import { useRouter } from 'next/router'
function CarsDet() {
    const router = useRouter()
    const carId = router.query.id*1
  
 const foundedCar=carsData.find((el)=> el.id===carId)
 console.log(foundedCar)


  return (
    <div>
    <CarPage {...foundedCar} />
    </div>
  )
}

export default CarsDet