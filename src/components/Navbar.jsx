import { Button, Center, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import useWeather from "../hooks/useWeather";
import Error from "./Error";

const Navbar = () => {
  const { fetchWeather } = useWeather();
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const handleSearchClick = (e) => {
    e.preventDefault();
    if (city.trim().length === 0) {
      setError(true);
      return;
    }
    setError(false);
    fetchWeather(city);
  };

  return (
    <>
      <Flex
        p={"10px"}
        minH={"70px"}
        bg="teal.100"
        justifyContent={"center"}
        flexDirection={["column", "row"]}
        gap={["10px", "0px"]}
      >
        <Center>
          <Input
            onInput={(e) => {
              setCity(e.target.value);
            }}
            value={city}
            borderRadius={"15px 0px 0px 15px"}
            bg={"white"}
            _focus={{ border: "none" }}
            placeholder="Type your city..."
          />
        </Center>
        <Center>
          <Button
            bg="teal.400"
            _hover={{ bg: "teal.600" }}
            _active={{
              bg: "teal.800",
              transform: "scale(0.95)",
              borderColor: "teal.200",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(90, 238, 231, 0.75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            color={"white"}
            w={"100%"}
            borderRadius={"0px 15px 15px 0px"}
            onClick={handleSearchClick}
          >
            Click and check your weather & forecast
          </Button>
        </Center>
      </Flex>
      {error ? <Error>You must type a city.</Error> : null}
    </>
  );
};

export default Navbar;
