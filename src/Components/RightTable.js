import React, { useRef } from "react";
import { MyContext } from "../Context/Context";
import { useContext } from "react";
import DetailTable from "./DetailTable";


function RightTable() {
  

  const [cityData,allCities,setCityData,setAllCities,cityName,setCityName] = useContext(MyContext);

 const input = useRef();
 const getSearch=()=>{
  setCityName(input.current.value);
 setTimeout(() => {
  setCityName("");
 }, 3000);
  
  
 }
 
  return (
    <div className="city_details">
       <div className="cityname">
            <input type="text" ref={input} placeholder="City Name" />
            <button onClick={getSearch} className="search"  >
              Search
            </button>
          </div>

      
      <table>
        <thead className="table_headline">
          <tr>
            <th className="c"> City </th>
            <th className="d">description </th>
            <th className="T"> Temperature(&deg;C)</th>
            <th className="p"> Pressure (hPa) </th>
            <th className="d"> Data age (hrs) </th>
            <th className="d"> </th>
          </tr>
        </thead>
    
        <tbody>
          {cityData.length===0 ? (
            <tr>
              <th colSpan="6">
                <h1 className="no_data">No Data</h1>
              </th>
            </tr>
          ) :(
            <>
            {
              cityData.map((item,index)=>{
                console.log(item.name);
                return(
                  < DetailTable data={item} 
                    
                  key={index} 
                  
                  cityData={cityData} 
                  setCityData={setCityData} 
                  cityName={cityName} 
                  allCities={allCities} 
                  setAllCities={setAllCities}  />
                )
                
              })
           }
            </>
          )
          
          }
        </tbody>
      </table>
    </div>
  );
}

export default RightTable;
