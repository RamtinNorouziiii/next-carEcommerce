import React from 'react'
import Card from '../modules/Card'
import styles from "./CarsList.module.css"
function Carslist({cars}) {
    console.log(cars)
  return (
    <div className={styles.container}>
    {cars.map((car) => (
      <Card key={car.id} {...car} />
    ))}
  </div>
  ) 
}

export default Carslist