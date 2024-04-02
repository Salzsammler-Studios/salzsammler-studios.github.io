import { Box, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Footer from "../components/footer";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

const Project = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
     return (
        <Box>
            {isMobile ? <MobileProject /> : <DesktopProject/>}
            {/*<Grid padding={"5rem"} gap={10} templateColumns='repeat(3, 1fr)' backgroundColor={"highlight"}>
                <GridItem colSpan={1}><Heading size={["xs", "2xl"]} style={{ fontWeight: 600 }} color="background" w="80%">Kamera</Heading></GridItem>
                <GridItem colSpan={1}><Heading size={["xs", "2xl"]} style={{ fontWeight: 600 }} color="background" w="80%">Projektor</Heading></GridItem>
                <GridItem colSpan={1}><Heading size={["xs", "2xl"]} style={{ fontWeight: 600 }} color="background" w="80%">Würfel</Heading></GridItem>
                <GridItem colSpan={1}><Text color="background" w="80%">Die Kamera wird zentral über der Spielfläche installiert. Sie dient als Sensor, um der Anwendung zu ermöglichen, Spielende und Würfel zu erfassen.</Text></GridItem>
                <GridItem colSpan={1}><Text color="background" w="80%">Der Projektor wird über der Spielfläche installiert und ist für die Erzeugung der interaktiven Projektionsfläche verantwortlich. Das zu projizierende Bild erhält der Projektor durch die Recheneinheit.</Text></GridItem>
                <GridItem colSpan={1}><Text color="background" w="80%">Die Würfel sind Spielobjekte mit verschiedenen Symbolen auf ihren Seitenflächen, die von den Spielenden platziert und rotiert werden können, um den Zustand der Anwendung zu beeinflussen. Je nach Ausrichtung und Position der Symbole können diese über das Bild der Kamera erfasst und an die Anwendung weitergeleitet und dort weiterverarbeitet werden.</Text></GridItem>
                    </Grid>*/}
            <Footer currentStep={1} bgColor="highlight" textColor="background" />
        </Box>
    );
}

const MobileProject = () => {
    const { t } = useTranslation();
    return (
        <VStack padding={"2rem"} gap={10} marginTop={"2rem"}>
            <Heading size={["lg", "2xl"]} style={{ fontWeight: 700 }} color="highlight">{t('project.headerText')}</Heading>
            <Box
                as='iframe'
                src='https://www.youtube.com/embed/_pMCzDzWwfA?si=6P265PWT41l5tdFC?frameborder=0'
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width={['100%', '100%']}
                sx={{
                    aspectRatio: '16/9',
                    borderRadius: '15',
                }}
            />
            <Heading size={["md", "xl"]} color="highlight">{t('project.header1')}</Heading>
            <Text fontSize={"xs"}>{t('project.leftText')}</Text>
            <Text fontSize={"xs"}>{t('project.rightText')}</Text>
        </VStack>)
}

const DesktopProject = () => {
    const { t } = useTranslation();
    return (<Grid padding={["1rem", "5rem"]} gap={10} marginTop={["2rem", "4rem"]} templateColumns='repeat(3, 1fr)'>
        <GridItem colSpan={3}><Heading size={["xs", "3xl"]} style={{ fontWeight: 600 }} color="highlight" w="80%">{t('project.headerText')}</Heading></GridItem>
        <GridItem colSpan={3}>
            <Box
                title="Ein Video von Salzsammler Studios, das die Anwendung Salzsammler zeigt."
                as='iframe'
                src='https://www.youtube.com/embed/_pMCzDzWwfA?si=6P265PWT41l5tdFC?frameborder=0'
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width={['90%', '100%']}
                sx={{
                    aspectRatio: '16/9',
                    borderRadius: '63',
                }}
            />
        </GridItem>
        <GridItem colSpan={1}><Image src="horse.png" marginTop={"-10rem"} alt="Ein Bild von einem Pferd mit Karren" /></GridItem>
        <GridItem colSpan={2} alignSelf="center"><Heading size={["xs", "xl"]} color="highlight">{t('project.header1')}</Heading></GridItem>
        <GridItem colSpan={1}></GridItem>
        <GridItem colSpan={1}><Text fontSize={"xl"}>{t('project.leftText')}</Text></GridItem>
        <GridItem colSpan={1}><Text fontSize={"xl"}>{t('project.rightText')}</Text></GridItem>
    </Grid>)
}

export default Project;