import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useRadioGroup,
  Img,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon, Image } from "@chakra-ui/icons";
import { Link as ReachLink } from "react-router-dom";
import { RadioCard } from "../componets/radio-card";
const SignupPage = () => {
  const options = ["عميل", "مقاول", "مهندس", "مشرف"];

  const [showPassword, setShowPassword] = useState(false);
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "userType",
    defaultValue: "عميل",
    onChange: console.log,
  });
  const group = getRootProps();

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
      <Stack
       spacing={8} 
       mx={"auto"} 
       maxW={"auto"} 
       py={12} 
       px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        > 
        <HStack mb={8} align={"center"} justify={"center"} {...group}>
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard 
                key={value} 
                {...radio}>
                {value}
                </RadioCard>
              );
            })}
          </HStack>
          <Stack 
          spacing={4}
          color={"#2D3748"}
          >
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>الأسم الاول</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>الأسم الأخير</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>البريد الألكتروني</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="mobile" isRequired>
              <FormLabel>رقم الجوال</FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>كلمة المرور</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#FFC54D"}
                color={"#2D3748"}
                _hover={{
                  color: "#FFC54D",
                  bg: "#2D3748",
                }}
              >
                تسجيل
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"} color={"#2D3748"}>
                لديك حساب بالفعل؟{" "}
                <Link as={ReachLink} to="/login" color={"#FFC54D"}>
                  تسجيل الدخول
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignupPage;
