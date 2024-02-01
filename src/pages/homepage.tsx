import React from 'react';
import { Box, Text, Heading, Stack, SimpleGrid } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Homepage = () => {
    return <Box minH={"105vh"}>
        <Box marginLeft={"-15rem"} marginTop={"-20rem"} width={"100%"} height={"100%"} position={"absolute"} bgImage={"url('/cloudsTogether.png')"} bgRepeat={"no-repeat"} bgPosition={"left top"}></Box>
        <Box marginLeft={"-0.1rem"} position={"absolute"} width={"100%"} height={"100%"} bgImage={"url('/layout2.svg')"} bgPosition="left bottom" bgRepeat="no-repeat" bgSize="60%"/>
        <SimpleGrid columns={2} spacing={10}>
            <Box height={["2xs","xs"]}></Box>
            <Box></Box>
            <Box></Box>
            <Stack maxW="90%" marginLeft={["-3rem",0]} paddingRight={["2rem",0]}>
                <Heading fontSize={["sm", "3xl"]}>Interaktive Installationen</Heading>
                <Heading fontSize={["lg", "7xl"]} sx={{ fontWeight: 900 }}>Salzsammler</Heading>

                <Text maxW="90%" fontSize={["sm", "2xl"]}>Salzsammler Studios fokussiert sich auf Innovationen im Bereich der Extended Reality, um didaktisch wertvolle Informationen interaktiv und spielbar erfahrbar zu machen.</Text>
                <Text as="u" color="highlight"><Text as="a" href="#" sx={{ fontWeight: 600 }}>Mehr erfahren</Text><ArrowForwardIcon /></Text>
            </Stack>
        </SimpleGrid>
    </Box>
}

export default Homepage;