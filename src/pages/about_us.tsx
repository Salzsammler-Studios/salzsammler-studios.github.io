import { Box, Heading, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";
import TeamCards from "../components/teamCards";

const AboutUs = () => {
    return (
        <Box>
            <SimpleGrid columns={[1, 3]} spacing={0} marginLeft={["1.5rem","2.5rem"]}>
                <Box height="5rem"></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Heading size="2xl" sx={{ fontWeight: 600 }} marginBottom="3rem">Das Team</Heading>
                <Box></Box>
                <TeamCards image='/ruben.png' name='Ruben Schäfer' title='DEVELOPER' text='Wenn ich nicht gerade an Salzsammler arbeite, bin ich Webentwickler. kreative Selbstverwirklichung mit technischem Know-how'/>
                <TeamCards image='/john.png' name='John Beinecke' title='PROJECTMANAGER' text='Programmierer und artist für Salzsammler. Ich bin auch projektmanager., vereint Leidenschaft und Expertise'/>
                <TeamCards image='/nic.png' name='Nic Schilling' title='SOUND & GAME DESIGN' text='Theater, musik und Komponist, studiert Videospiele science an der Uni Bayreuth. Kreative Multitalente, von der Musikbühne zum Game Design'/>
            </SimpleGrid>

            <Image src="/about_us_footer.png" width="100vw" margin={0} padding={0}/>
        </Box>
    );
}

export default AboutUs;