import React from 'react';
import { Box, Text, Heading, Stack, SimpleGrid } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Homepage = () => {
    return <Box minH={"105vh"}>
        <Box pointerEvents={"none"} marginLeft={"-15rem"} marginTop={"-21rem"} bgSize={"100%"}width={"100%"} height={"100%"} position={"absolute"} bgImage={"url('/cloudsTogether.png')"} bgRepeat={"no-repeat"} bgPosition={"left top"}></Box>
        <Box pointerEvents={"none"} marginLeft={"-0.1rem"} position={"absolute"} width={"100%"} height={"100%"} bgImage={"url('/layout2.svg')"} bgPosition="left bottom" bgRepeat="no-repeat" bgSize="50%"/>
        <SimpleGrid columns={2} spacing={10}>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Stack marginTop={"16rem" }maxW="110%" marginLeft={["-3rem","-4.5rem"]} paddingRight={["2rem","3rem"]}>
                <Heading fontSize={["sm", "3xl"]} marginBottom={"-1rem"} sx={{fontWeight: 600}}>Interaktive Installationen</Heading>
                <Heading fontSize={["lg", "8xl"]} sx={{ fontWeight: 900 }}>Salzsammler</Heading>

                <Text maxW="90%" fontSize={["sm", "2xl"]}>Salzsammler Studios fokussiert sich auf Innovationen im Bereich der Extended Reality, um didaktisch wertvolle Informationen interaktiv und spielbar erfahrbar zu machen.</Text>
                <Text as="u" color="highlight"><Text as="a" href="#" fontSize={["sm", "2xl"]} sx={{ fontWeight: 600 }}>Mehr erfahren</Text><ArrowForwardIcon /></Text>
            </Stack>
        </SimpleGrid>
    </Box>
}

export default Homepage;