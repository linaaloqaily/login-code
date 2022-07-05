import React from "react";
import { Link as ReachLink } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
const LoginPage = () => {
  return (
    <Flex
      sm={'30em'}
      md={'48em'}
      lg={'62em'}
      xl={'80em'}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      backgroundColor={"gray.700"}
    color="#2D3748"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        {/* <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack> */}
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>البريد الألكتروني</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>كملة السر</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={5}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Link color={"#2D3748"}>هل نسيت كلمة المرور؟</Link>
                <Link as={ReachLink} to="/sginup" color={"#FFC54D"}>
                  إنشاء حساب جديد
                </Link>
              </Stack>
              {/* <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack> */}
              <Button
                bg={"#FFC54D"}
                color={"black"}
                _hover={{
                  bg: "#2D3748",
                  color: "#FFC54D",
                }}
              >
                تسجيل الدخول
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginPage;
