import { Box, Text, Heading, Stack, SimpleGrid } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import homepage_background from '../assets/homepage_background.svg';

const Homepage = () => {
    return <Box minH={"105vh"}>
        <Box pointerEvents={"none"} bgSize={"25%"} width={"100%"} height={"100%"} position={"absolute"} bgImage={"url('/cloud_small.svg')"} bgRepeat={"no-repeat"} bgPosition={"left top"}></Box>
        <Box pointerEvents={"none"} marginLeft={"-0.1rem"} position={"absolute"} width={"100%"} height={"100%"} bgImage={homepage_background} bgPosition="left bottom" bgRepeat="no-repeat" bgSize={["90%","50%"]}/>
        <Box pointerEvents={"none"} bgSize={"60%"} width={"100%"} height={"100%"} position={"absolute"} bgImage={"url('/cloud_big.svg')"} bgRepeat={"no-repeat"} bgPosition={"left top"}></Box>
        
        <SimpleGrid columns={2} spacing={10}>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Stack marginTop={["10rem","16rem"]}maxW="110%" marginLeft={["-1rem","4rem"]} paddingRight={["2rem","3rem"]}>
                <Heading fontSize={["sm", "3xl"]} marginBottom={["-0.5rem","-1.25rem"]} sx={{fontWeight: 600}}>Interaktive Installationen</Heading>
                <Heading fontSize={["xl", "7xl"]} sx={{ fontWeight: 900 }}>Salzsammler</Heading>

                <Text marginTop={["0rem","-0.7rem"]}maxW={["100%","90%"]} fontSize={["sm", "2xl"]} lineHeight={["","9"]}>Salzsammler Studios fokussiert sich auf Innovationen im Bereich der Extended Reality, um didaktisch wertvolle Informationen interaktiv und spielbar erfahrbar zu machen.</Text>
                <Text as="u" color="highlight" marginTop={"1rem"}><Text as="a" href="#/project" fontSize={["sm", "2xl"]} sx={{ fontWeight: 600 }}>Mehr erfahren</Text><ArrowForwardIcon /></Text>
            </Stack>
        </SimpleGrid>
    </Box>
}

export default Homepage;