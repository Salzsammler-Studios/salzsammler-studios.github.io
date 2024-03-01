import {useNavigate} from 'react-router-dom';
import { Box, Text, Heading, Stack, SimpleGrid, VStack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {ReactComponent as HomepageBackground} from '../assets/homepage_background.svg';
import { useMediaQuery } from 'react-responsive';

const Homepage = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    return <Box>
        {isMobile ? <MobileHomepage /> : <DesktopHomepage />}
    </Box>
}
    export default Homepage;


const DesktopHomepage = () => {
    return <Box minH={"100vh"}>
    <Box pointerEvents={"none"} bgSize={"25%"} width={"100%"} height={"100%"} position={"absolute"} bgImage={"url('/cloud_small.svg')"} bgRepeat={"no-repeat"} bgPosition={"left top"} style={{ shapeRendering: "crispEdges" }}></Box>
    <HomepageBackground pointerEvents={"none"} style={{position: "absolute", bottom: "-1.5rem", left: "-0.3rem"}} />
    <Box pointerEvents={"none"} bgSize={"60%"} width={"100%"} height={"100%"} position={"absolute"} bgImage={"url('/cloud_big.svg')"} bgRepeat={"no-repeat"} bgPosition={"left top"} style={{ shapeRendering: "crispEdges" }}></Box>

    <SimpleGrid columns={2} spacing={10}>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Stack marginTop={["10rem", "16rem"]} maxW="110%" marginLeft={["-1rem", "2rem"]} marginRight={"auto"}>
            <Heading fontSize={["sm", "3xl"]} marginBottom={["-0.5rem", "-1.25rem"]} sx={{ fontWeight: 600 }}>Interaktive Installationen</Heading>
            <Heading whiteSpace={"nowrap"} fontSize={["xl", "5rem"]} sx={{ fontWeight: 900 }}>Salzsammler</Heading>

            <Text marginTop={["0rem", "-0.7rem"]} maxW={["100%", "90%"]} fontSize={["sm", "2xl"]} lineHeight={["", "9"]}>Salzsammler Studios fokussiert sich auf Innovationen im Bereich der Extended Reality, um didaktisch wertvolle Informationen interaktiv und spielbar erfahrbar zu machen.</Text>
            <Text as="u" color="highlight" marginTop={"1rem"}><Text as="a" href="#/project" fontSize={["sm", "2xl"]} sx={{ fontWeight: 600 }}>Mehr erfahren</Text><ArrowForwardIcon /></Text>
        </Stack>
    </SimpleGrid>
</Box>
}

const MobileHomepage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/project");
    };

    return <Box minH={"105vh"}>
         <Box marginTop={"-3rem"} pointerEvents={"none"} bgSize={"80%"} width={"100%"} height={"100%"} position={"absolute"} bgImage={"url('/mobile_clouds.svg')"} bgRepeat={"no-repeat"} bgPosition={"left top"} style={{ shapeRendering: "crispEdges" }}></Box>
         <Box marginTop={"1rem"} zIndex={2} pointerEvents={"none"} bgSize={"80%"} width={"101%"} height={"101%"} position={"absolute"} bgImage={"url('/mobile_town.svg')"} bgRepeat={"no-repeat"} bgPosition={"right bottom"} bottom={0}style={{ shapeRendering: "crispEdges" }}></Box>
        <VStack>
            <Box marginTop={"16rem"} pointerEvents={"none"}></Box>
            <Heading fontSize={"md"} marginBottom={"-1.25rem"} sx={{ fontWeight: 600}}>Interaktive Installationen</Heading>
            <Heading fontSize={ "4xl"} sx={{ fontWeight: 900}}>Salzsammler</Heading>
            <Heading fontSize={ "4xl"} sx={{ fontWeight: 900}} marginTop={"-1.5rem"}>Studios</Heading>

            <Text marginTop={"0.5rem"} maxW={"70%"} fontSize={"sm"} lineHeight={["", "9"]}>Salzsammler Studios fokussiert sich auf Innovationen im Bereich der Extended Reality, um didaktisch wertvolle Informationen interaktiv und spielbar erfahrbar zu machen.</Text>
            <Box as="button" marginTop={"0.1rem"} onClick={handleClick} bg="highlight" color={"background"} borderRadius={"5px"} padding="0.6rem"><b>Mehr erfahren</b></Box>
        </VStack>
    </Box>
}