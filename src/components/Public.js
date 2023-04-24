import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { SiSimplenote } from "react-icons/si";

import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  IconButton,
  Center,
  Flex,
  Icon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  useColorModeValue,
  TabPanel,
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
          <Tab>Red</Tab>
          <Tab>Teal</Tab>
          <Tab>Blue</Tab>
        </TabList>
        <TabPanels p="2rem">
          <TabPanel>The Primary Colors</TabPanel>
          <TabPanel>Are 1, 2, 3</TabPanel>
          <TabPanel>Red, yellow and blue.</TabPanel>
        </TabPanels>
      </Tabs>

      <Card border="1px solid black">
        <CardHeader>
          <Heading size="md">Client Report</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Analysis
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Icon
        colorScheme="teal"
        placeholder="Call Segun"
        size="lg"
        icon={<MdAccountCircle />}
      >
        <Link to="/login">Employee Login</Link>
      </Icon>
    </Box>
  );
  return content;
};
export default Public;
