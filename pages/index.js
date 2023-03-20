import Head from 'next/head'
import Image from 'next/image'
import CarsData from "../data/cars" 
import Carslist from '../components/templates/carslist'
import Categories from '../components/modules/categories'
import SeeAllButton from '../components/modules/SeeAllButton'
import SearchBar from '../components/modules/SearchBar'
export default function Home() {
  const cars =CarsData.slice(0,4)
  return (
    <div >
    <Categories />
    <SearchBar />
    <SeeAllButton />
    <Carslist cars={cars}   />
    </div>
  )
}
