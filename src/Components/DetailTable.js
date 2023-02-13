import React from 'react'
import { useState } from 'react'

function DetailTable({data,cityData,setCityData,cityName,allCities,setAllCities}){
  
  const [value,setValue]=useState(data.description)
 
  //console.log(cityData);

  const del=(deleteCity)=>{
    const rows = cityData.filter(item=>item.name!==deleteCity);
    setCityData(rows);
   
    setAllCities([...allCities,deleteCity])

  }
 

  return (
     <>
            <tr className={cityName!==data.name?"row":"norow"}>
                <td className="d1">{data.name}</td>
                <td className="d2"><input className="input" value={value} onChange={(e)=>setValue(e.target.value)}/></td>
                <td className="d3">{data.temp_in_celsius}</td>
                <td className="d4">{data.pressure_in_hPa}</td>
                <td className="d5">24</td>
                <td className="delete" onClick={()=>del(data.name)} >delete </td>
              </tr>
              </>
  )       

}
     
       

export default DetailTable