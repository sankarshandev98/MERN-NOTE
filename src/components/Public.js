import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { SiSimplenote } from "react-icons/si";

import {
  Box,
  Text,
  Center,
  Flex,
  Icon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  useColorModeValue,
  TabPanel,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { useState } from "react";

const Public = () => {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"]
  );

  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  const content = (
    <Box
      margin="auto"
      mt="30px"
      borderRadius="20px"
      width="70%"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    >
      <Flex alignItems="center" justifyContent="space-around">
        <Icon as={SiSimplenote} boxSize={12}></Icon>
        <Center h="100px" fontSize="30px">
          Welcome to Note Taking Web-App
        </Center>
      </Flex>

      <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
        <TabList>
          <Tab>Features</Tab>
          <Tab>Guide To Use This Web-App</Tab>
          <Tab>Tech-Stack Used</Tab>
          <Tab>Contact Me</Tab>
        </TabList>
        <TabPanels p="1rem">
          <TabPanel>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                    >
                      ROLE-BASED AUTHENTICATION
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                    >
                      JWT AUTHENTICATION WITH VALID EMAIL AND PASSWORD (UX)
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                    >
                      CRUD OPERATION WITH express.JS , Mongoose & MongoDB
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                    >
                      MVC BACKEND STRUCTURE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  You can check the backend with this{" "}
                  <a href="https://github.com/sankarshandev98/note-backend">
                    gitHub
                  </a>{" "}
                  Link
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                    >
                      PRODUCTION GRADE FRONTEND STRUCTURE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
      <Center paddingY="20px">
        <Flex alignItems="center">
          <Icon as={MdAccountCircle} boxSize="12" />
          <Link to="/login">
            <Button>Admin / Manager / Employee - Login</Button>
          </Link>
        </Flex>
      </Center>
    </Box>
  );
  return content;
};
export default Public;
