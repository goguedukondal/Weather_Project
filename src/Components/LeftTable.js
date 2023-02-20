import { MyContext } from "../Context/Context";
import { useContext } from "react";
const LeftTable = () => {
 
  const [cityData,allCities,setCityData,setAllCities] = useContext(MyContext);

  const fetchingData = () => {
    if(allCities.length>0){
    const query = allCities[0];
   
    
    fetch(
      `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        
        const newAllCities = allCities.filter((item,index)=>index!==0);
       
        setAllCities(newAllCities);
        setCityData( [...cityData,{name:query,...data}]);
       
      });
    }
  };
  


  return (

    <div className="left_part">
     
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
            <td className={cityData.length<1?"t0":"t"}>London</td>
          </tr>
       
          <tr>
            <td className={cityData.length<2?"t0":"t"}>New York</td>
          </tr>
       
          <tr>
            <td className={cityData.length<3?"t0":"t"}>Los Angeles</td>
          </tr>
        
          <tr>
            <td className={cityData.length<4?"t0":"t"}>Las Vegas</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeftTable;
