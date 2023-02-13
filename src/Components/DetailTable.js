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
            <tr className={cityName!==data.name?"norow":"color"}>
                <td className=cityName!==data.name?"d1":"color d1"}>{data.name}</td>
                <td className=cityName!==data.name?"d2":"color d2"}><input className="input" value={value} onChange={(e)=>setValue(e.target.value)}/></td>
                <td className=cityName!==data.name?"d3":"color d3"}>{data.temp_in_celsius}</td>
                <td className=cityName!==data.name?"d4":"color d4"}>{data.pressure_in_hPa}</td>
                <td className=cityName!==data.name?"d5":"color d5"}>24</td>
                <td className=cityName!==data.name?"delete":"color delete"} onClick={()=>del(data.name)} >delete </td>
              </tr>
              </>
  )       

}
     
       

export default DetailTable
