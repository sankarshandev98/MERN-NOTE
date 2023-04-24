import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { SiSimplenote } from "react-icons/si";

import {
  Box,
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
  List,
  ListItem,
  ListIcon,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdSettings } from "react-icons/md";

const Public = () => {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50", "gray.50"],
    ["red.900", "teal.900", "blue.900", "gray.900"]
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
          <Tab fontWeight="bold">Features</Tab>
          <Tab fontWeight="bold">Guide To Use This Web-App</Tab>
          <Tab fontWeight="bold">Tech-Stack Used</Tab>
          <Tab fontWeight="bold">Contact Me</Tab>
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
                  Login with three different credentials. Admin, Manager and
                  Employee. Each roles have their own unique features. Example
                  like Admin Can add new Employee and update their role and see
                  given task and alote tasks to them.
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
                  Signup with valid and right format email and minimum 8 digit
                  password combine with number, symbol and upper & lower case
                  letter. Password stored in database with bcrypt format.
                  Refresh & Access token with expiry time.
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
                  RestFUL Api with express.JS, mongoose and stored in MongoDB
                  Atlas.
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
                  <a
                    href="https://github.com/sankarshandev98/note-backend"
                    target="_blank"
                  >
                    gitHub
                  </a>{" "}
                  Link. Create the backend folder structure with Model View
                  Controller architectural pattern in mind.
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
                  For better code readibility and management with industry
                  standards.
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
                      GLOBAL STATE MANAGEMENT WITH REACT-REDUX AND REDUX/TOOLKIT
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Using Api like createApi, fetchBaseQuery. Also Prefetching
                  Without Hooks.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </TabPanel>
          <TabPanel>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdSettings} color="green.500" />
                Click on below button and sign in with this credentials-[Admin
                username: admin, password: 123456] , [Employee username:
                sankarshan, password: sankarshan]
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel>
            <Tabs isFitted variant="enclosed">
              <TabList mb="1rem">
                <Tab fontWeight="bold">FRONTEND</Tab>
                <Tab fontWeight="bold">BACKEND</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Wrap>
                    <WrapItem>
                      <Avatar
                        size="lg"
                        name="React"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                      />
                    </WrapItem>
                    <WrapItem>
                      <Avatar
                        size="lg"
                        name="Redux"
                        src="https://img.icons8.com/color/512/redux.png"
                      />
                    </WrapItem>
                    <WrapItem>
                      <Avatar
                        size="lg"
                        name="Chakra UI"
                        src="https://www.coffeeclass.io/logos/chakra-ui.png"
                      />
                    </WrapItem>
                    <WrapItem>
                      <Avatar
                        size="lg"
                        name="React Router Dom"
                        src="https://static-00.iconduck.com/assets.00/react-router-icon-512x279-zswz065s.png"
                      />
                    </WrapItem>
                    <WrapItem>
                      <Avatar
                        size="lg"
                        name="React Icons"
                        src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667"
                      />
                    </WrapItem>
                  </Wrap>
                </TabPanel>
                <TabPanel>
                  <Wrap>
                    <WrapItem>
                      <Avatar
                        size="lg"
                        name="node.js"
                        src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
                      />
                    </WrapItem>
                    <WrapItem>
                      <Avatar
                        size="lg"
                        name="express.js"
                        src="https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png"
                      />
                    </WrapItem>
                    <WrapItem>
                      <Avatar
                        size="lg"
                        name="MongoDB"
                        src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png"
                      />
                    </WrapItem>
                    <WrapItem>
                      <Avatar
                        size="lg"
                        name="mongoose"
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--P2LgNuEs--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dwcj63fdldqgmvtptoga.png"
                      />
                    </WrapItem>
                    <WrapItem>
                      <Avatar
                        size="lg"
                        name="jwt"
                        src="https://user-images.githubusercontent.com/5418178/177059352-fe91dcd5-e17b-4103-88ae-70d6d396cf85.png"
                      />
                    </WrapItem>
                    <WrapItem>
                      <Avatar
                        size="lg"
                        name="bcrypt"
                        src="https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGU30LWO2YUXQtIYwJY_Ac_c=/bcryptnet-2023-01-04%2000-00-00-2022-11-02%2015-51-22"
                      />
                    </WrapItem>
                  </Wrap>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Wrap>
              <WrapItem>
                <a href="https://github.com/sankarshandev98" target="_blank">
                  <Avatar
                    size="xl"
                    name="github"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  />
                </a>
              </WrapItem>
              <WrapItem>
                <a href="https://sankarshandev98.github.io/" target="_blank">
                  <Avatar
                    size="xl"
                    name="portfolio"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/source/945b0225337909.563440870421b.png"
                  />
                </a>
              </WrapItem>
              <WrapItem>
                <a
                  href="https://drive.google.com/file/d/1Z8I0_ZJFcuqakPRvCgIrs4DpNVSuBT3A/view?usp=share_link"
                  target="_blank"
                >
                  <Avatar
                    size="xl"
                    name="resume"
                    src="https://cdn-icons-png.flaticon.com/512/1870/1870080.png"
                  />
                </a>
              </WrapItem>
            </Wrap>
          </TabPanel>
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
