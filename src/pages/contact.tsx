import { Box, HStack, Heading, VStack } from "@chakra-ui/react";
import ContactCard from "../components/contact_card";
import { EmailIcon, PhoneIcon, ViewIcon } from "@chakra-ui/icons";

const Contact = () => {
    const instagramLink = "https://www.instagram.com/salzsammler/?igsh=MWlzZWdidzQ5c2F3cQ%3D%3D"
    return <Box paddingLeft={"5rem"} paddingRight={"5rem"}>
        <VStack spacing={"2rem"}>
            <Box height="1rem"></Box>
            <Heading size="xl" fontWeight={400} color="background" textAlign="center" w="80%" sx={{ fontWeight: 600 }}>Gemeinsam individuelle Lösungen finden - Sprechen Sie mit uns!</Heading>
            <Box height="1rem"></Box>
            <HStack spacing={"3rem"}>
                <ContactCard icon={<PhoneIcon color="highlight" boxSize={"2.5rem"} />} text="" link="+49 123 456 78" href="tel:123-456-7890" textWidth="100%"/>
                <ContactCard icon={<EmailIcon color="highlight" boxSize={"3rem"} />} text="" link='salzsammler. studios@gmail.com' href="mailto:salzsammler.studios@gmail.com" textWidth="80%"/>
                <ContactCard icon={<ViewIcon color="highlight" boxSize={"3rem"} />} text="" link="Instagram" href={instagramLink} textWidth="100%"/>
            </HStack>
            <Box height="15rem"></Box>
        </VStack>
    </Box>
}

export default Contact;