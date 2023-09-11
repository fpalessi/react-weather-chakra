import {
  Box,
  Grid,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import WhiteText from "./WhiteText";
import { formatDate } from "../helpers/formatDate";
import { ImSun } from "react-icons/im";
import { MdOutlineNightsStay } from "react-icons/md";

const ForecastModal = ({ data }) => {
  const { date, day } = formatDate(data.dt);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box onClick={onOpen} cursor={"pointer"} mt={"10px"}>
        <Text color={"teal.400"} fontWeight={500} fontSize={"27px"}>
          <Icon as={ImSun} /> {Math.round(data.temp.day)}
          <sup>o</sup> C
        </Text>
        <Text color={"teal.400"} fontWeight={500} fontSize={"27px"}>
          <Icon as={MdOutlineNightsStay} /> {Math.round(data.temp.night)}
          <sup>o</sup> C
        </Text>
        <Text color={"teal.400"} fontWeight={500} fontSize={"20px"}>
          {data.weather[0].main}
        </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box p={"10px"}>
              <Box
                p={"5px"}
                bg={"teal.400"}
                textAlign={"center"}
                borderRadius={"30px"}
                mb={"20px"}
              >
                <Text fontWeight={500} color={"white"} fontSize={"18px"}>
                  {date}
                </Text>
                <Text fontWeight={500} color={"white"} fontSize={"18px"}>
                  {day}
                </Text>
              </Box>

              <Grid templateColumns={"50% 50%"}>
                <Box pb={"10px"} pl={"15%"}>
                  {[
                    "Felt Temp.",
                    "Humidity",
                    "Wind",
                    "Pressure",
                    "Day Temp.",
                    "Evening Temp.",
                    "Night Temp.",
                    "Max Temp.",
                    "Min Temp.",
                  ].map((e, i) => (
                    <Text
                      key={i}
                      color={"teal.400"}
                      fontWeight={500}
                      mt={"15px"}
                      fontSize={"18px"}
                    >
                      {e}
                    </Text>
                  ))}
                </Box>
                <Box
                  borderRadius={"30px"}
                  bg={"teal.400"}
                  pb={"10px"}
                  pl={"15%"}
                >
                  <WhiteText>
                    {data.feels_like.day}
                    <sup>o</sup> C
                  </WhiteText>
                  <WhiteText>{data.humidity}%</WhiteText>
                  <WhiteText>
                    {(data.wind_speed * 3.6).toFixed(2)} Km/h
                  </WhiteText>
                  <WhiteText>{data.pressure} hPa</WhiteText>
                  <WhiteText>
                    {data.temp.day}
                    <sup>o</sup> C
                  </WhiteText>
                  <WhiteText>
                    {data.temp.eve}
                    <sup>o</sup> C
                  </WhiteText>
                  <WhiteText>
                    {data.temp.night}
                    <sup>o</sup> C
                  </WhiteText>
                  <WhiteText>
                    {data.temp.min}
                    <sup>o</sup> C
                  </WhiteText>
                  <WhiteText>
                    {data.temp.max}
                    <sup>o</sup> C
                  </WhiteText>
                </Box>
              </Grid>
            </Box>
          </ModalBody>

          <ModalFooter>Oviedo</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ForecastModal;
