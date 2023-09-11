import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import useWeather from "../hooks/useWeather";
import Loader from "./Loader";
import WeatherCard from "./WeatherCard";
import WhiteText from "./WhiteText";
import GoogleMap from "./GoogleMap";
import ForecastCard from "./ForecastCard";

const Index = () => {
  const { currentWeatherData, forecastData, isLoading } = useWeather();

  const { name, main, weather, wind, visibility } = currentWeatherData;

  const kelvin = 273.15;

  if (Object.keys(currentWeatherData).length === 0) return null;

  if (isLoading) return <Loader />;

  return (
    <>
      <Box maxW={"1200px"} m={"20px auto 5px"} p={"20px"} minH={"550px"}>
        <Grid
          gridTemplateColumns={[
            "100%",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "30% 27.5% 38%",
          ]}
          gap={"30px"}
        >
          <WeatherCard>
            <Box color="teal.400" p={"20px"} textAlign={"center"}>
              <Heading>{name}</Heading>
              <Heading fontSize={["100px", "120px", "120px", "100px", "120px"]}>
                {Math.round(main.temp - 273)}
                <sup>o</sup>C
              </Heading>
              <Heading>{weather[0].main}</Heading>
            </Box>
          </WeatherCard>

          <WeatherCard>
            <Grid templateColumns={"50% 50%"} h={"100%"} p={"8px"}>
              <Box py={"10px"} pl={"15%"}>
                {[
                  "Felt Temp.",
                  "Humidity",
                  "Wind",
                  "Visibility",
                  "Max Temp.",
                  "Min Temp.",
                ].map((e, i) => (
                  <Text
                    key={i}
                    color="teal.400"
                    fontWeight={500}
                    mt={"15px"}
                    fontSize={"18px"}
                  >
                    {e}
                  </Text>
                ))}
              </Box>
              <Box borderRadius={"30px"} bg="teal.400" py={"10px"} pl={"15%"}>
                <WhiteText>
                  {parseInt(main.feels_like - kelvin)}
                  <sup>o</sup> C
                </WhiteText>
                <WhiteText>{main.humidity}%</WhiteText>
                <WhiteText color="red.100">
                  {(wind.speed * 3.6).toFixed(2)} Km/h
                </WhiteText>
                <WhiteText>{(visibility * 0.001).toFixed(2)} Km</WhiteText>
                <WhiteText>
                  {parseInt(main.temp_max - kelvin)}
                  <sup>o</sup> C
                </WhiteText>
                <WhiteText>
                  {parseInt(main.temp_min - kelvin)}
                  <sup>o</sup> C
                </WhiteText>
              </Box>
            </Grid>
          </WeatherCard>

          <WeatherCard>
            <GoogleMap city={name} />
          </WeatherCard>
        </Grid>

        <Grid
          mt={"40px"}
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
            "repeat(5, 1fr)",
            "repeat(8, 1fr)",
          ]}
          gap={"20px"}
        >
          {forecastData.map((e, i) => (
            <ForecastCard key={i} data={e} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Index;
