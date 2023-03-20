import React from 'react'
import carsData from '../../data/cars'
import { useRouter } from 'next/router'
import Carslist from '../../components/templates/carslist'
function SelectedCarType() {    
const router = useRouter()
const {type}=router.query
const foundedType = carsData.filter((el)=>el.category===type)
  return (
    <Carslist cars={foundedType} />
  )
}

export default SelectedCarType