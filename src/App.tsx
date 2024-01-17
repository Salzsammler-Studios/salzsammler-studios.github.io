import React, { useState } from 'react';
import { Box, Image, Tab, Tabs, TabList, TabPanel, TabPanels, Heading } from '@chakra-ui/react';
import Homepage from './pages/homepage';
import Project from './pages/project';
import AboutUs from './pages/about_us';
import Logo from './components/logo';
import Contact from './pages/contact';

const App = () => {

    const colors: string[] = ["background", 'backgroundProject', 'backgroundAboutUs', 'highlight']
    const [tabIndex, setTabIndex] = useState(0)
    const bg = colors[tabIndex]

    return <Box backgroundColor={bg}>
        <Tabs align='end' position="relative" variant='unstyled' isLazy size={['sm', 'lg']} onChange={(index) => setTabIndex(index)}>
            <TabList sx={{ marginBottom: ["-7.5rem", "-8.5rem"] }} padding={"2rem"}>
                <Tab color={tabIndex == 3 ? 'background' : 'black'} _selected={{ opacity: 1, fontSize: ['sm', '3xl'] }} sx={{ fontWeight: 600, opacity: 0.5 }} fontSize={['xs', '2xl']}>Home</Tab>
                <Tab color={tabIndex == 3 ? 'background' : 'black'} _selected={{ opacity: 1, fontSize: ['sm', '3xl'] }} sx={{ fontWeight: 600, opacity: 0.5 }} fontSize={['xs', '2xl']}>Projekt</Tab>
                <Tab color={tabIndex == 3 ? 'background' : 'black'} _selected={{ opacity: 1, fontSize: ['sm', '3xl'] }} sx={{ fontWeight: 600, opacity: 0.5 }} fontSize={['xs', '2xl']}>Team</Tab>
                <Tab color={tabIndex == 3 ? 'background' : 'black'} _selected={{ opacity: 1, fontSize: ['sm', '3xl'] }} sx={{ fontWeight: 600, opacity: 0.5 }} fontSize={['xs', '2xl']}>Kontakt</Tab>
            </TabList>
            <TabPanels textAlign="start">
                <TabPanel sx={{ margin: 0, padding: 0 }}><Homepage /></TabPanel>
                <TabPanel sx={{ margin: 0, padding: 0 }}>
                    <Logo color='black'/>
                    <Project /></TabPanel>
                <TabPanel sx={{ margin: 0, padding: 0 }} >
                    <Logo color='black'/>
                    <AboutUs /></TabPanel>
                <TabPanel sx={{ margin: 0, padding: 0 }}><Logo color='background'/><Contact /></TabPanel>
            </TabPanels>
        </Tabs>
    </Box>
}

export default App;