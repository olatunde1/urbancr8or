import React from "react";
import { Box, Text } from "@chakra-ui/react";
import logo from './images/logo.jpeg'

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold" width={50} height={50}>
        <img src={logo}/>
      </Text>
    </Box>
  );
}