import { useNavigate } from 'react-router-dom';
import { Box, Text, Heading, Stack, SimpleGrid, VStack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as HomepageBackground } from '../assets/homepage_background.svg';
import { ReactComponent as CloudBig } from '../assets/cloud_big.svg';
import { ReactComponent as CloudSmall } from '../assets/cloud_small.svg';
import { ReactComponent as MobileHomepageBackground } from '../assets/mobile_homepage_background.svg';
import { ReactComponent as MobileCloudBig } from '../assets/mobileCloudBig.svg';
import { ReactComponent as MobileCloudSmall } from '../assets/mobileCloudSmall.svg';
import '../App.css';

const Homepage = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    return <Box>
        {isMobile ? <MobileHomepage /> : <DesktopHomepage />}
    </Box>
}
export default Homepage;


const DesktopHomepage = () => {
    return <Box minH={"100vh"}>
        <CloudSmall style={{ position: "absolute", top: "0" }} className='SmallCloudAnimation' role="img" title='>Eine kleine Wolke auf der Salzsammler Homepage' />
        <HomepageBackground pointerEvents={"none"} style={{ position: "absolute", bottom: "-1.5rem", left: "-0.3rem" }} role="img" title='Eine Stadt in der Installation Salzsammler' />
        <CloudBig style={{ position: "absolute", top: "0" }} className='BigCloudAnimation' role="img" title='>Eine große Wolke auf der Salzsammler Homepage' />

        <SimpleGrid columns={2} spacing={10}>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Stack marginTop={["10rem", "16rem"]} maxW="110%" marginLeft={["-1rem", "2rem"]} marginRight={"auto"}>
                <Heading fontSize={["sm", "3xl"]} marginBottom={["-0.5rem", "-1.25rem"]} sx={{ fontWeight: 600 }} className='TitleAnimation'>Interaktive Installationen</Heading>
                <Heading whiteSpace={"nowrap"} fontSize={["xl", "5rem"]} sx={{ fontWeight: 900 }} className={'TitleAnimation'}>Salzsammler</Heading>

                <Text marginTop={["0rem", "-0.7rem"]} maxW={["100%", "90%"]} fontSize={["sm", "2xl"]} lineHeight={["", "9"]} className='SubTitleAnimation'>Salzsammler Studios fokussiert sich auf Innovationen im Bereich der Extended Reality, um didaktisch wertvolle Informationen interaktiv und spielbar erfahrbar zu machen.</Text>
                <Text as="u" color="highlight" marginTop={"1rem"} className='ExploreMoreAnimation'><Text as="a" href="#/project" fontSize={["sm", "2xl"]} sx={{ fontWeight: 600 }}>Mehr erfahren</Text><ArrowForwardIcon /></Text>
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
        <MobileCloudSmall className='SmallCloudAnimation' pointerEvents={"none"} style={{ position: "absolute", top: "3rem" }} />
        <MobileCloudBig className='BigCloudAnimation' pointerEvents={"none"} style={{ position: "absolute", top:"-3rem", left: "0"}} />
        <MobileHomepageBackground pointerEvents={"none"} style={{ position: "absolute", bottom: "0", right: "0" }} />

        <VStack>
            <Box marginTop={"16rem"} pointerEvents={"none"}></Box>
            <Heading fontSize={"md"} marginBottom={"-1.25rem"} sx={{ fontWeight: 600 }} className='TitleAnimation'>Interaktive Installationen</Heading>
            <Heading fontSize={"4xl"} sx={{ fontWeight: 900 }} className={'TitleAnimation'}>Salzsammler</Heading>
            <Heading fontSize={"4xl"} sx={{ fontWeight: 900 }} marginTop={"-1.5rem"} className={'TitleAnimation'}>Studios</Heading>

            <Text marginTop={"0.5rem"} maxW={"70%"} fontSize={"sm"} lineHeight={["", "9"]} className='SubTitleAnimation'>Salzsammler Studios fokussiert sich auf Innovationen im Bereich der Extended Reality, um didaktisch wertvolle Informationen interaktiv und spielbar erfahrbar zu machen.</Text>
            <Box as="button" marginTop={"0.1rem"} onClick={handleClick} bg="highlight" color={"background"} borderRadius={"5px"} padding="0.6rem" className='ExploreMoreAnimation'><b>Mehr erfahren</b></Box>
        </VStack>
    </Box>
}