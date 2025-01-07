import { useEffect, useState } from "react";
import axios from "axios";


const Weather_API_KEY = import.meta.env.VITE_API_KEY;
const App = () => {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(null); 
  const [weatherData, setWeatherData] = useState(null); 
  const [filterText, setFilterText] = useState("");
 

  const onFilterChange = (event) => {
    setFilterText(event.target.value);
    setShowData(null); // Reset showData when filter text changes
  };

  const onShow = (country) => {
    setShowData(country); // Store the entire country object
  };

  useEffect(()=>{
    if(showData){
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${showData.capital}&appid=${Weather_API_KEY}`)
        .then((res)=>setWeatherData(res.data))
        .catch((err)=>console.error('error while featching the weather data', err))
    }
  },[showData])
  console.log(weatherData)

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const filterValues = data.filter((country) =>
    country.name.common.toLowerCase().includes(filterText.toLowerCase())
  );

  useEffect(()=>{
    if(filterValues.length === 1){
      setShowData(filterValues[0])
    }
  },[filterValues])


  return (
    <>
      find countries{" "}
      <input type="text" value={filterText} onChange={onFilterChange} />
      <br />
      {showData ? (
        <>
          <h1>{showData.name.common}</h1>
          <p>
            capital: {showData.capital} <br /> area: {showData.area}
          </p>
          <h2>Languages:</h2>
          <ul>
            {Object.values(showData.languages).map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
          <img src={showData.flags.png} alt={showData.flags.alt} />
        </>
      )
      : filterValues.length < 10 ? (
        <ul>
          {filterValues.map((country) => (
            <li key={country.name.common}>
              {country.name.common}{" "}
              <button onClick={() => onShow(country)}>show</button>
            </li>
          ))}
        </ul>
      ) : (
        "Too many matches, please specify another filter"
      )}
    </>
  );
};

export default App;
