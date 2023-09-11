import { Text } from "@chakra-ui/react";
const WhiteText = ({ children }) => {
  return (
    <Text color={"white"} fontWeight={500} mt={"15px"} fontSize={"18px"}>
      {children}
    </Text>
  );
};
export default WhiteText;
