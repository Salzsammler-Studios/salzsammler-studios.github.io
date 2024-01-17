import { Box, HStack, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ContactCard from "../components/contact_card";

const Contact = () => {
    return <Box paddingLeft={"5rem"} paddingRight={"5rem"}>
        <VStack spacing={"2rem"}>
            <Box height="1rem"></Box>
            <Heading color="background" size="4xl" textAlign="center" sx={{ fontWeight: 600 }}>Kontaktieren Sie uns</Heading>
            <Heading size="md" fontWeight={400} color="background">Wir würden uns gerne über zukünftige Installationen unterhalten</Heading>
            <Box height="1rem"></Box>
            <HStack spacing={"3rem"}>
                <ContactCard />
                <ContactCard />
                <ContactCard />
            </HStack>
            <Box height="3rem"></Box>
        </VStack>
    </Box>
}

export default Contact;