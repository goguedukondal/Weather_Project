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
                
                const arr=item.date_and_time.split(',');
                const date = arr[0]
                const time = arr[1]
                const arr2 = date.split('/')
                const year = arr2[2]
                const month= arr2[1]
                const day = arr2[0]
                const time_arr=time.split(':')
                const hour =time_arr[0]
                const current_date=new Date()
                const current_year=current_date.getFullYear()
                const current_month = current_date.getMonth()+1
                const current_day= current_date.getDate()
                const current_hour=current_date.getHours()
                let year_diff=current_year-year
                let monts_in_prev_year=12-month
                let months=monts_in_prev_year+current_month
                let days_in_prev_year=30-day
                let total_days =days_in_prev_year+current_day
                
                let total_hours=year_diff*365*months*total_days*24
                  let hrs=total_hours+current_hour+(24-hour)
                return(
                  < DetailTable data={item} 
                    
                  key={index} 
                  
                  cityData={cityData} 
                  setCityData={setCityData} 
                  cityName={cityName} 
                  allCities={allCities} 
                  setAllCities={setAllCities} 
                  hrs={hrs} />
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
