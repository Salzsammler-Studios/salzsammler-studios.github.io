import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import TeamCards from "../components/teamCards";
import Footer from "../components/footer";
import { ReactComponent as AboutUsFooter } from '../assets/aboutUsFooter.svg';
const AboutUs = () => {
    return (
        <Box>
            <SimpleGrid columns={[1, 3]} alignItems={"baseline"} justifyContent={"center"} columnGap={"2rem"} paddingLeft={"5vw"} paddingRight={"4vw"} >
                <Box height={["2rem","5rem"]}></Box>
                <Box height={["2rem","5rem"]}></Box>
                <Box height={["2rem","5rem"]}></Box>
                <Box></Box>
                <Heading size="3xl" textAlign="center" sx={{ fontWeight: 600 }} marginBottom="3rem">Das Team</Heading>
                <Box></Box>
                <TeamCards image='/ruben.png' name='Ruben Schäfer' title='DEVELOPER' text='Wenn ich nicht gerade an Salzsammler arbeite, bin ich Webentwickler. kreative Selbstverwirklichung mit technischem Know-how.' />
                <TeamCards image='/john.png' name='John Beinecke' title='PRODUCER' text='Meine Aufgabe als Producer vereint meine Leidenschaft und Expertise für Spieleentwicklung und lässt mich mit einem kühlen Kopf den Überblick behalten.' />
                <TeamCards image='/nic.png' name='Nic Schilling' title='GAME DESIGNER' text='Mit meiner Leidenschaft für Musik, Theater und Games arbeite ich im Game Design, in der Produktion und in der Komposition und verbinde alles zu einem harmonischen Ganzen.' />
            </SimpleGrid>
            <AboutUsFooter style={{display: "flex",width: "100%", height: "auto", zIndex: "2"}} title="Eine Stadt in der Installation Salzsammler"/>
            <Footer bgColor="backgroundGreen" textColor="background" currentStep={2}/>
        </Box>
    );
}

export default AboutUs;