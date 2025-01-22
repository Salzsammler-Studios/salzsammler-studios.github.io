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
import { useTranslation } from 'react-i18next';

const Homepage = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    return <Box>
        {isMobile ? <MobileHomepage /> : <DesktopHomepage />}
    </Box>
}
export default Homepage;


const DesktopHomepage = () => {
    const { t } = useTranslation();
    return <Box minH={"100vh"}>
        <CloudSmall style={{ position: "absolute", top: "0" }} className='SmallCloudAnimation' role="img" title='>Eine kleine Wolke auf der Salzsammler Homepage' />
        <HomepageBackground pointerEvents={"none"} style={{ position: "absolute", bottom: "-1.5rem", left: "-0.3rem" }} role="img" title='Eine Stadt in der Installation Salzsammler' />
        <CloudBig style={{ position: "absolute", top: "0" }} className='BigCloudAnimation' role="img" title='>Eine große Wolke auf der Salzsammler Homepage' />

        <SimpleGrid columns={2} spacing={10}>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Stack marginTop={["10rem", "16rem"]} maxW="110%" marginLeft={["-1rem", "2rem"]} marginRight={"auto"}>
                <Heading fontSize={["sm", "3xl"]} marginBottom={["-0.5rem", "-1.25rem"]} sx={{ fontWeight: 600 }} className='TitleAnimation'>{t('homepage.header1')}</Heading>
                <Heading whiteSpace={"nowrap"} fontSize={["xl", "5rem"]} sx={{ fontWeight: 900 }} className={'TitleAnimation'}>{t('homepage.header2')}</Heading>

                <Text marginTop={["0rem", "-0.7rem"]} maxW={["100%", "90%"]} fontSize={["sm", "2xl"]} lineHeight={["", "9"]} className='SubTitleAnimation'>{t('homepage.subheader')}</Text>
                <Text as="u" color="highlight" marginTop={"1rem"} className='ExploreMoreAnimation'><Text as="a" href="#/project" fontSize={["sm", "2xl"]} sx={{ fontWeight: 600 }}>{t('homepage.button')}</Text><ArrowForwardIcon /></Text>
            </Stack>
        </SimpleGrid>
    </Box>
}

const MobileHomepage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/project");
    };

    return <Box minH={"105vh"}>
        <MobileCloudSmall className='SmallCloudAnimation' pointerEvents={"none"} style={{ position: "absolute", top: "3rem" }} />
        <MobileCloudBig className='BigCloudAnimation' pointerEvents={"none"} style={{ position: "absolute", top:"-5rem", left: "0"}} />
        <MobileHomepageBackground pointerEvents={"none"} style={{ position: "absolute", bottom: "2.5rem", right: "0" }} />

        <VStack>
            <Box marginTop={"14rem"} pointerEvents={"none"}></Box>
            <Heading fontSize={"xl"} marginBottom={"-1.25rem"} sx={{ fontWeight: 600 }} className='TitleAnimation'>{t('homepage.header1')}</Heading>
            <Heading fontSize={"5xl"} sx={{ fontWeight: 900 }} className={'TitleAnimation'}>{t('homepage.header2')}</Heading>
            <Heading fontSize={"5xl"} sx={{ fontWeight: 900 }} marginTop={"-1.5rem"} className={'TitleAnimation'}>{t('homepage.header3')}</Heading>

            <Text marginTop={"0.5rem"} textAlign={"center"} maxW={"80%"} fontSize={"md"} lineHeight={"5"} className='SubTitleAnimation'>{t('homepage.subheader')}</Text>
            <Box as="button" marginTop={"1rem"} onClick={handleClick} bg="highlight" color={"background"} borderRadius={"10px"} padding="0.8rem" className='ExploreMoreAnimation'><b>{t('homepage.button')}</b></Box>
        </VStack>
    </Box>
}