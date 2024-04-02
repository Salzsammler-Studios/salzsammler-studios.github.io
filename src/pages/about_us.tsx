import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import TeamCards from "../components/teamCards";
import Footer from "../components/footer";
import { ReactComponent as AboutUsFooter } from '../assets/aboutUsFooter.svg';
import { useTranslation } from "react-i18next";
const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <Box>
            <SimpleGrid columns={[1, 3]} alignItems={"baseline"} justifyContent={"center"} columnGap={"2rem"} paddingLeft={"5vw"} paddingRight={"4vw"} >
                <Box height={["2rem", "5rem"]}></Box>
                <Box height={["2rem", "5rem"]}></Box>
                <Box height={["2rem", "5rem"]}></Box>
                <Box></Box>
                <Heading size="3xl" textAlign="center" sx={{ fontWeight: 600 }} marginBottom="3rem">{t('about_us.header')}</Heading>
                <Box></Box>
                <TeamCards image='/ruben.png' name='Ruben Schäfer' title='DEVELOPER' text={t('about_us.rubentext')} />
                <TeamCards image='/john.png' name='John Beinecke' title='PRODUCER' text={t('about_us.johntext')} />
                <TeamCards image='/nic.png' name='Nic Schilling' title='GAME DESIGNER' text={t('about_us.nictext')} />
            </SimpleGrid>
            <AboutUsFooter style={{ display: "flex", width: "100%", height: "auto", zIndex: "2" }} title="Eine Stadt in der Installation Salzsammler" />
            <Footer bgColor="backgroundGreen" textColor="background" currentStep={2} />
        </Box>
    );
}

export default AboutUs;