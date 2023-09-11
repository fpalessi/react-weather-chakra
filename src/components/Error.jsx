import { Alert, AlertIcon, AlertTitle, Slide } from "@chakra-ui/react";

const Error = ({ children }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>{children}</AlertTitle>
    </Alert>
  );
};

export default Error;
