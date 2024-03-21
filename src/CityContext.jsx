import { createContext, useContext, useState } from "react";
import axios from "axios";

const cityContext = createContext();
const Context = () => useContext(cityContext);

export const CityProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("");
  const [coords, setCoords] = useState([]);

  const fetchData = async () => {
    const key = import.meta.env.VITE_API_KEY;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&cnt=5`
      );

      const mapResponse = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${city}&format=json`
      );

      if (mapResponse.data.length) {
        const { lat, lon } = mapResponse.data[0];
        setCoords([lat, lon]);
      }

      setWeatherData(response.data);
    } catch (error) {
      console.error("Error bei Data Abruf", error);
    }
  };
  //   console.log(coords);
  //   console.log(weatherData);
  return (
    <cityContext.Provider
      value={{ fetchData, city, setCity, weatherData, coords }}
    >
      {children}
    </cityContext.Provider>
  );
};

export default Context;
