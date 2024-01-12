import React from 'react';
import { Box, Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react';
import Homepage from './pages/homepage';
import Project from './pages/project';
import AboutUs from './pages/about_us';

const App = () => {
    return <Box>
        <Tabs align='end' position="relative" variant='unstyled' isLazy size='lg'>
            <TabList sx={{marginBottom: [-14,-20]}}>
                <Tab _selected={{opacity: 1, fontSize: ['md','3xl']}} sx={{fontWeight: 600, opacity: 0.5}} fontSize={['sm','2xl']}>Home</Tab>
                <Tab _selected={{opacity: 1, fontSize: ['md','3xl']}} sx={{fontWeight: 600, opacity: 0.5}} fontSize={['sm','2xl']}>Project</Tab>
                <Tab _selected={{opacity: 1, fontSize: ['md','3xl']}} sx={{fontWeight: 600, opacity: 0.5}} fontSize={['sm','2xl']}>About us</Tab>
                <Tab _selected={{opacity: 1, fontSize: ['md','3xl']}} sx={{fontWeight: 600, opacity: 0.5}} fontSize={['sm','2xl']}>Contact</Tab>
            </TabList>

            <TabPanels>
                <TabPanel sx={{margin: 0, padding: 0}}><Homepage/></TabPanel>
                <TabPanel><Project/></TabPanel>
                <TabPanel><AboutUs/></TabPanel>
                <TabPanel>Contact</TabPanel>
            </TabPanels>
        </Tabs>
    </Box>
}

export default App;