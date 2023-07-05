import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
const Profile: React.FC = () => {
  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Flex
        sx={{
          height: "170px",
          backgroundAttachment: "fixed",
          backgroundImage:
            "url('https://images.pexels.com/photos/2425011/pexels-photo-2425011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#00000080",
            backdropFilter: "blur(6px)",
          }}
        ></Box>
      </Flex>
      <Flex p={5} borderTop="1px solid #00000020">
        <Box
          sx={{
            width: "150px",
            height: "150px",
            background: "white",
            borderRadius: "150px",
            mt: -20,
            zIndex: 99,
            mr: 5,
            border: "1px solid #00000020",
          }}
        ></Box>
        <Box>
          <Text
            color="blackAlpha"
            fontWeight={"500"}
            letterSpacing={"-1px"}
            fontSize={"3xl"}
          >
            Matheus Barbosa
          </Text>
          <Text
            mt={-2}
            color="blackAlpha"
            letterSpacing={"-1px"}
            fontSize={"1xl"}
          >
            @mathviera
          </Text>
        </Box>
      </Flex>
      <Flex flex={1}>
        <Tabs flex={1} colorScheme="purple">
          <TabList>
            <Tab>Videos</Tab>
            <Tab>Publicações</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
};

export default Profile;
