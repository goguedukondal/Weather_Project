import "./App.css";
import {  useState} from "react";
import LeftTable from "./Components/LeftTable";
import RightTable from "./Components/RightTable";
import { MyContext } from "./Context/Context";

function App() {
  const [cityData,setCityData] = useState([]);
  const [allCities,setAllCities]  = useState(["London","New York","Los Angeles","Las Vegas"]);
  const [cityName,setCityName] = useState("");
  

  return (
    <div className="App">
      <div className="navbar"> Gogu Edukondal's Weather App </div>

      <MyContext.Provider value={[cityData,allCities,
        setCityData,
        setAllCities,
        cityName,
        setCityName]}>
      <div className="details_container">
      
        <LeftTable />

        <div className="right_part"> 
         
           <RightTable />
        </div>
      </div>
      </MyContext.Provider>
    </div>
  );
}

export default App;

