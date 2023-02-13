import React from "react";

import { MyContext } from "../Context/Context";
import { useContext } from "react";
const LeftTable = () => {
  const [cityData,allCities,setCityData,setAllCities,isCityDataFetched,setIsCityDataFetched] = useContext(MyContext);

  const fetchingData = () => {
    if(allCities.length>0){
    const query = allCities[0];
    fetch(
      `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        
        const newAllCities = allCities.filter((item,index)=>index!==0);
        setIsCityDataFetched(true);
        setAllCities(newAllCities);
        setCityData( [...cityData,{name:query,...data}]);
       
      });
    }
  };


  return (

    <div className="left_part">
      {/* {console.log(cityData)} */}
      <button className="get_weather" onClick={fetchingData}>
        Get Weather
      </button>

      <table className="table_part">
        <thead className="t1">
          <tr>
            <th className="city">City</th>
          </tr>
        </thead>
        <tbody className="t2">
          <tr>
            <td className={isCityDataFetched?"t":"t0"}>London</td>
          </tr>
        </tbody>
        <tbody className="t3">
          <tr>
            <td className={isCityDataFetched?"t":"t0"}>New York</td>
          </tr>
        </tbody>
        <tbody className="t4">
          <tr>
            <td className={isCityDataFetched?"t":"t0"}>Los Angeles</td>
          </tr>
        </tbody>
        <tbody className="t5">
          <tr>
            <td className={isCityDataFetched?"t":"t0"}>Las Vegas</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeftTable;
