import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
const Sidenav: React.FC = () => {
  return (
    <Flex sx={{ flex: 1 }} flexDir={"column"}>
      <Header />
      <Flex sx={{ flex: 1 }}>
        <Sidebar />
        <Box sx={{ flex: 1, display: "flex", flexDir: "column" }}>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Sidenav;
