import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

const Project = () => {
    return (
        <Box>
            <Grid padding={"5rem"} gap={10} marginTop={["2rem", "4rem"]} templateColumns='repeat(3, 1fr)'>
                <GridItem colSpan={3}><Heading size={["xs", "2xl"]} style={{ fontWeight: 600 }} color="highlight" w="80%">Eine interaktive Installation, die es Kindern ermöglicht, geschichtlichen Inhalten und Materialien intuitiv und mit Spielspaß zu begegnen.</Heading></GridItem>
                <GridItem colSpan={3}><Image src="project_image.png" w="100%" /></GridItem>
                <GridItem colSpan={1}><Image src="horse.png" marginTop={["0", "-10rem"]} /></GridItem>
                <GridItem colSpan={2} alignSelf="center"><Heading size={["xs", "xl"]} color="highlight">Der Handel und Transport von Waren stehen im Mittelpunkt. Kinder übernehmen Aufgaben wie das Annehmen von Baumaterialien, Lebensmitteln und Luxusgütern</Heading></GridItem>
                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={1}><Text>Der Handel und Transport von Waren stehen im Mittelpunkt. Kinder übernehmen Aufgaben wie das Annehmen von Baumaterialien, Lebensmitteln und Luxusgütern. Die Installation besteht aus Spielflächen, einem Projektor, einer Kamera, Würfeln und einer Recheneinheit.</Text></GridItem>
                <GridItem colSpan={1}><Text>Der Fluss: Hier interagieren bis zu 3 Spieler mit Booten, verschieben sie und agieren auf der größten Spielfläche.
                    Die Stadt und Brücke (Passiv): Diese Spielflächen vermitteln wertvolle Informationen über historische Ereignisse ohne interaktive Elemente.</Text></GridItem>
            </Grid>
            <Grid padding={"5rem"} gap={10} templateColumns='repeat(3, 1fr)' backgroundColor={"highlight"}>
                <GridItem colSpan={1}><Heading size={["xs", "2xl"]} style={{ fontWeight: 600 }} color="background" w="80%">Kamera</Heading></GridItem>
                <GridItem colSpan={1}><Heading size={["xs", "2xl"]} style={{ fontWeight: 600 }} color="background" w="80%">Projektor</Heading></GridItem>
                <GridItem colSpan={1}><Heading size={["xs", "2xl"]} style={{ fontWeight: 600 }} color="background" w="80%">Würfel</Heading></GridItem>
                <GridItem colSpan={1}><Text color="background" w="80%">Die Kamera wird zentral über der Spielfläche installiert. Sie dient als Sensor, um der Anwendung zu ermöglichen, Spielende und Würfel zu erfassen.</Text></GridItem>
                <GridItem colSpan={1}><Text color="background" w="80%">Der Projektor wird über der Spielfläche installiert und ist für die Erzeugung der interaktiven Projektionsfläche verantwortlich. Das zu projizierende Bild erhält der Projektor durch die Recheneinheit.</Text></GridItem>
                <GridItem colSpan={1}><Text color="background" w="80%">Die Würfel sind Spielobjekte mit verschiedenen Symbolen auf ihren Seitenflächen, die von den Spielenden platziert und rotiert werden können, um den Zustand der Anwendung zu beeinflussen. Je nach Ausrichtung und Position der Symbole können diese über das Bild der Kamera erfasst und an die Anwendung weitergeleitet und dort weiterverarbeitet werden.</Text></GridItem>
            </Grid>
        </Box>
    );
}

export default Project;