import { Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay, IconButton, Link, MenuIcon, Tab, TabList, TabPanel, TabPanels, Tabs, VStack, useDisclosure } from "@chakra-ui/react";
import Homepage from "../pages/homepage";
import Contact from "../pages/contact";
import Logo from "./logo";
import AboutUs from "../pages/about_us";
import Project from "../pages/project";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import { HamburgerIcon, SunIcon } from "@chakra-ui/icons";

type ContentType = {
    initialTabIndex: number
}
const Content = ({ initialTabIndex }: ContentType) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const colors: string[] = ["background", 'background', 'background', 'highlight']
    const [tabIndex, setTabIndex] = useState(0)
    const bg = colors[tabIndex]

    const navigate = useNavigate();
    const location = useLocation();

    const handleTabChange = (index: number) => {
        setTabIndex(index);
        switch (index) {
            case 0:
                navigate('/');
                break;
            case 1:
                navigate('/project');
                break;
            case 2:
                navigate('/team');
                break;
            case 3:
                navigate('/contact');
                break;
            // Add more cases for additional tabs
            default:
                navigate('/');
        }
    };

    // Based on the current URL, determine the initial tab index
    useEffect(() => {
        switch (location.pathname) {
            case '/':
                handleTabChange(0);
                break;
            case '/project':
                handleTabChange(1);
                break;
            case '/team':
                handleTabChange(2);
                break;
            case '/contact':
                handleTabChange(3);
                break;
            // Add more cases for additional tabs
            default:
                handleTabChange(initialTabIndex);
        }
    }, [location.pathname, initialTabIndex]);

    return (
        <Box bg={bg} bgSize="cover" position="relative">
        {isMobile ? (
          <>
            <IconButton
              icon={<HamburgerIcon color={location.pathname == "/contact" ? "background" : "black"} />}
              aria-label="Menu"
              onClick={onOpen}
              variant="ghost"
              zIndex={100}
              borderRadius="50%"
              position="absolute"
              top="3rem"
              right="1rem"
            />
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <VStack spacing={4}>
              <Link href="#/" onClick={onClose}>Home</Link>
              <Link href="#/project" onClick={onClose}>Projekt</Link>
              <Link href="#/team" onClick={onClose}>Team</Link>
              <Link href="#/contact" onClick={onClose}>Kontakt</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* Render TabPanels for mobile */}
      <Tabs index={initialTabIndex}>
      <TabPanels textAlign="start">
        <TabPanel sx={{ margin: 0, padding: 0 }}><Homepage /></TabPanel>
        <TabPanel sx={{ margin: 0, padding: 0 }}>
          <Logo color='black' />
          <Project />
        </TabPanel>
        <TabPanel sx={{ margin: 0, padding: 0 }} >
          <Logo color='black' />
          <AboutUs />
        </TabPanel>
        <TabPanel sx={{ margin: 0, padding: 0 }}><Logo color='background' /><Contact /></TabPanel>
      </TabPanels>
      </Tabs>
          </>
        ) : (
          <Tabs index={initialTabIndex} isLazy align='end' position="relative" variant='unstyled' size={['sm', 'lg']} onChange={handleTabChange}>
            <TabList sx={{ marginBottom: ["-7.5rem", "-8.5rem"] }} padding={"2rem"} paddingRight={["0rem","3rem"]}>
              <Tab color={tabIndex === 3 ? 'background' : 'black'} _selected={{ opacity: 1, fontSize: ['sm', '3xl'] }} sx={{ fontWeight: 600, opacity: 0.5 }} fontSize={['xs', '2xl']}>Home</Tab>
              <Tab color={tabIndex === 3 ? 'background' : 'black'} _selected={{ opacity: 1, fontSize: ['sm', '3xl'] }} sx={{ fontWeight: 600, opacity: 0.5 }} fontSize={['xs', '2xl']}>Projekt</Tab>
              <Tab color={tabIndex === 3 ? 'background' : 'black'} _selected={{ opacity: 1, fontSize: ['sm', '3xl'] }} sx={{ fontWeight: 600, opacity: 0.5 }} fontSize={['xs', '2xl']}>Team</Tab>
              <Tab color={tabIndex === 3 ? 'background' : 'black'} _selected={{ opacity: 1, fontSize: ['sm', '3xl'] }} sx={{ fontWeight: 600, opacity: 0.5 }} fontSize={['xs', '2xl']}>Kontakt</Tab>
            </TabList>
            <TabPanels textAlign="start">
              <TabPanel sx={{ margin: 0, padding: 0 }}><Homepage /></TabPanel>
              <TabPanel sx={{ margin: 0, padding: 0 }}>
                <Logo color='black' />
                <Project /></TabPanel>
              <TabPanel sx={{ margin: 0, padding: 0 }} >
                <Logo color='black' />
                <AboutUs /></TabPanel>
              <TabPanel sx={{ margin: 0, padding: 0 }}><Logo color='background' /><Contact /></TabPanel>
            </TabPanels>
          </Tabs>
        )}
      </Box>
    );
  };

export default Content;