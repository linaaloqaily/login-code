import React from "react";
import { useRadio, Box } from "@chakra-ui/react";
export const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label"
      sm={'30em'}
      md={'48em'}
      lg={'62em'}
      xl={'80em'}
    >
      <input {...input} />
      <Box
        {...checkbox}
        color="#2D3748"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "#FFC54D",
          color: "#2D3748",
          borderColor: "#2D3748",
        }}
        // _focus={{
        //   boxShadow: "outline",
        // }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};
