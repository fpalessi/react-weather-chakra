import { useState, createContext } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});

  const fetchWeather = async (city) => {
    setIsLoading(true);
    try {
      const { data: weatherData } = await axios(
        `${import.meta.env.VITE_WEATHER_BASE_URL}/weather?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      setCurrentWeatherData(weatherData);

      const { lat, lon } = weatherData.coord;
      const { data: forecast } = await axios(
        `${
          import.meta.env.VITE_WEATHER_BASE_URL
        }/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      setForecastData(forecast.daily);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
      setIsError(false);
    }
  };
  return (
    <WeatherContext.Provider
      value={{
        fetchWeather,
        currentWeatherData,
        forecastData,
        isLoading,
        isError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
export { WeatherProvider };
export default WeatherContext;
