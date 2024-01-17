import React from 'react';
import { Box, Text, Heading, Stack, SimpleGrid } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Homepage = () => {
    return <Box minH="102vh" h="100%" bgImage={["url('/mobile_overlay.png')", "url('/overlay.png')"]} bgPosition="bottom left" bgRepeat="no-repeat" bgSize="cover">
        <SimpleGrid columns={2} spacing={10}>
            <Box height={["2xs","2xs"]}></Box>
            <Box></Box>
            <Box></Box>
            <Stack maxW="xl" marginLeft={["-3rem",0]} paddingRight={["2rem",0]}>
                <Heading size="sm">Interaktive Installationen</Heading>
                <Heading size={["lg", "4xl"]} sx={{ fontWeight: 900 }}>Salzsammler</Heading>

                <Text maxW="md" fontSize={["sm", "lg"]}>Salzsammler Studios fokussiert sich auf Innovationen im Bereich der Extended Reality, um didaktisch wertvolle Informationen interaktiv und spielbar erfahrbar zu machen.</Text>
                <Text as="u" color="highlight"><Text as="a" href="#" sx={{ fontWeight: 600 }}>Mehr erfahren</Text><ArrowForwardIcon /></Text>
            </Stack>
        </SimpleGrid>
    </Box>
}

export default Homepage;