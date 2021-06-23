import React, { FC } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Center,
  Square,
  Circle,
} from "@chakra-ui/react";

const Signup: FC = () => {
  return (
    <Center className="container">
      <Box w="250px" l="600px">
        <FormControl id="Email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email" />
          <FormLabel>Password</FormLabel>
          <Input placeholder="Password" />
        </FormControl>
      </Box>
    </Center>
  );
};

export default Signup;
