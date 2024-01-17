import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Project = () => {
    return (
        <Box>
            <Grid padding={"5rem"} gap={10} marginTop={["2rem", "4rem"]} templateColumns='repeat(3, 1fr)'>
                <GridItem colSpan={3}><Heading size={["xs", "2xl"]} style={{fontWeight: 600}} color="highlight" w="80%">Eine interaktive Installation, die es Kindern ermöglicht, geschichtlichen Inhalten und Materialien intuitiv und mit Spielspaß zu begegnen.</Heading></GridItem>
                <GridItem colSpan={3}><Image src="project_image.png" w="100%" /></GridItem>
                <GridItem colSpan={1}><Image src="horse.png" marginTop={["0", "-10rem"]} /></GridItem>
                <GridItem colSpan={2} alignSelf="center"><Heading size={["xs", "xl"]} color="highlight">Der Handel und Transport von Waren stehen im Mittelpunkt. Kinder übernehmen Aufgaben wie das Annehmen von Baumaterialien, Lebensmitteln und Luxusgütern</Heading></GridItem>
                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={1}><Text>Der Handel und Transport von Waren stehen im Mittelpunkt. Kinder übernehmen Aufgaben wie das Annehmen von Baumaterialien, Lebensmitteln und Luxusgütern. Die Installation besteht aus Spielflächen, einem Projektor, einer Kamera, Würfeln und einer Recheneinheit.</Text></GridItem>
                <GridItem colSpan={1}><Text>Der Fluss: Hier interagieren bis zu 3 Spieler mit Booten, verschieben sie und agieren auf der größten Spielfläche.
                    Die Stadt und Brücke (Passiv): Diese Spielflächen vermitteln wertvolle Informationen über historische Ereignisse ohne interaktive Elemente.</Text></GridItem>
            </Grid>
        </Box>
    );
}

export default Project;