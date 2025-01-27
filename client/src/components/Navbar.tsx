import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Container, Box, Flex, Text, Button } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"900px"}>
      <Box
        bg={useColorModeValue("gray.400", "gray.700")}
        px={4}
        my={4}
        borderRadius={"5"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* Left Side */}
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
            display={{ base: "none", sm: "flex" }}
          >
            <img src="/react.png" alt="react-logo" width={50} height={50} />
            <Text fontSize={"40"}>+</Text>
            <img src="/go.png" alt="go-logo" width={50} height={50} />
            <Text fontSize={"40"}>=</Text>
            <img src="/explode.png" alt="explode-logo" width={50} height={50} />
          </Flex>
          {/* Right Side */}
          <Flex alignItems={"center"} gap={3}>
            <Text fontSize={"lg"} fontWeight={500}>
              Daily Tasks
            </Text>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}
