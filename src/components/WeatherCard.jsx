import { Box } from "@chakra-ui/react";

const WeatherCard = ({ children }) => {
  return (
    <Box
      overflow={"hidden"}
      shadow={"0px 0px 30px 6px #E2E2E2"}
      borderRadius={"10px"}
      h={"300px"}
    >
      {children}
    </Box>
  );
};
export default WeatherCard;
