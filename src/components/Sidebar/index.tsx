import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiPlayCircle, FiBarChart, FiDollarSign } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
// import { Container } from './styles';

const Sidebar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("content");
  const sidebarMenus = [
    { name: "Meu conteudo", icon: <FiPlayCircle />, link: "" },
    { name: "Analytics", icon: <FiBarChart />, link: "analytics" },
    { name: "Monetização", icon: <FiDollarSign />, link: "money" },
  ];
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "200px" }} borderRight={"1px solid #00000020"}>
      {sidebarMenus.map((m) => (
        <Flex
          onClick={() => {
            navigate("/user/" + m.link);
            setActiveMenu(m.link);
          }}
          sx={{ p: 4, transition: ".2s all linear" }}
          borderLeft={`${activeMenu == m.link ? 5 : 0}px solid`}
          borderColor={"purple.600"}
          color={`${activeMenu == m.link ? "purple.800" : "blackAlpha.700"}`}
          fontWeight={`${activeMenu == m.link ? "500" : "400"}`}
          backgroundColor={activeMenu == m.link ? "#ffffff60" : "transparent"}
          borderBottom={"1px solid #00000020"}
          alignItems={"center"}
          cursor={"pointer"}
          _hover={{
            backgroundColor: activeMenu == m.link ? "#ffffff60" : "#00000010",
          }}
        >
          <Box sx={{ width: "30px" }}>{m.icon}</Box>
          <Box>
            <Text fontSize="1xl">{m.name}</Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default Sidebar;
