import { useRouter } from 'next/router'
import React from 'react'
import Carslist from '../../components/templates/carslist';
import carsData from '../../data/cars';
function FilteredCars() {
    const router = useRouter();

    const [min, max] = router.query.slug || [];
  
    const filteredData = carsData.filter(
      (item) => item.price > min && item.price < max
    );
  
    if (!filteredData.length) return <h3>NotFound</h3>;
  
    return <Carslist cars={filteredData} />;
  
}

export default FilteredCars