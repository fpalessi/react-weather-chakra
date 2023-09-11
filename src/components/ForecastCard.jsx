import { Box, Text } from "@chakra-ui/react";
import { formatDate } from "../helpers/formatDate";
import ForecastModal from "./ForecastModal";

const ForecastCard = ({ data }) => {
  const { date, day } = formatDate(data.dt);
  return (
    <Box
      textAlign={"center"}
      overflow={"hidden"}
      borderRadius={"10px"}
      shadow={"0px 0px 30px 6px #E2E2E2"}
      h={"200px"}
    >
      <Box p={"5px"} bg={"teal.400"}>
        <Text fontWeight={500} color={"white"} fontSize={"18px"}>
          {date}
        </Text>
        <Text fontWeight={500} color={"white"} fontSize={"18px"}>
          {day}
        </Text>
      </Box>
      <ForecastModal data={data} />
    </Box>
  );
};

export default ForecastCard;
