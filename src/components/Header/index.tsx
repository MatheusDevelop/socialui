import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
const Header: React.FC = () => {
  return (
    <Flex
      sx={{ px: 4, height: "80px" }}
      borderBottom="1px solid #00000020"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex sx={{ width: "100px" }}>
        <Text fontSize={"2xl"} color="blackAlpha">
        </Text>
      </Flex>
      <Flex alignItems={"center"}>
        <Text fontSize={"1xl"} color="blackAlpha.700" ml={2}>
          Olá,
        </Text>
        <Text
          fontSize={"1xl"}
          fontWeight={"medium"}
          color="blackAlpha.800"
          ml={0.5}
        >
          Matheus Barbosa
        </Text>
        <Avatar
          size="md"
          src="https://i.pinimg.com/736x/5e/41/d9/5e41d9770f8000390acf7c8dbe0387bb.jpg"
          ml={3}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
