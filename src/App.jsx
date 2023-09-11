import WeatherApp from "./components/WeatherApp";
import Navbar from "./components/Navbar";
import { WeatherProvider } from "./context/WeatherProvider";

function App() {
  return (
    <>
      <WeatherProvider>
        <Navbar />
        <WeatherApp />
      </WeatherProvider>
    </>
  );
}

export default App;
