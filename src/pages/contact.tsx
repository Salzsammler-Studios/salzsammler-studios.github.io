import { Box, HStack, Heading, VStack, Image } from "@chakra-ui/react";
import ContactCard from "../components/contact_card";
import { EmailIcon, PhoneIcon, ViewIcon } from "@chakra-ui/icons";
import Footer from "../components/footer";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const instagramLink = "https://www.instagram.com/salzsammler/?igsh=MWlzZWdidzQ5c2F3cQ%3D%3D"
    return <Box>
        <VStack minHeight={["100vh"]} spacing={"2rem"} paddingLeft={["1rem", "5rem"]} paddingRight={["1rem", "5rem"]}>
            <Box height={["2rem","12rem"]}></Box>
            <Heading fontSize={["2.5rem","7xl"]} fontWeight={600} color="background" textAlign="center" w={["90%", "100%"]} >Sie haben Interesse?</Heading>
            <Heading size="lg" fontWeight={100} color="background" textAlign="center" w={["85%","70%"]}>Wir freuen uns darauf, mit Ihnen über zukünftige Installationen zu sprechen.</Heading>
            <Box height={["0rem","4rem"]}></Box>
            {isMobile ?
                <VStack spacing={"2rem"}>
                    <ContactCard icon={<PhoneIcon color="highlight" boxSize={"2.5rem"} />} text="" link="+49 176 240 71380" href="tel:176-240-71380" textWidth="100%" />
                    <ContactCard icon={<EmailIcon color="highlight" boxSize={"3rem"} />} text="" link='salzsammler. studios@gmail.com' href="mailto:salzsammler.studios@gmail.com" textWidth="80%" />
                    <ContactCard icon={<Image src="/instagram.svg" color="highlight" boxSize={"3.5rem"} />} text="" link="Instagram" href={instagramLink} textWidth="100%" />
                </VStack>

                : (<HStack spacing={"3rem"}>
                    <ContactCard icon={<PhoneIcon color="highlight" boxSize={"2.5rem"} />} text="" link="+49 176 240 71380" href="tel:176-240-71380" textWidth="100%" />
                    <ContactCard icon={<EmailIcon color="highlight" boxSize={"3rem"} />} text="" link='salzsammler. studios@gmail.com' href="mailto:salzsammler.studios@gmail.com" textWidth="80%" />
                    <ContactCard icon={<Image src="/instagram.svg" color="highlight" boxSize={"3.5rem"} />} text="" link="Instagram" href={instagramLink} textWidth="100%" />
                </HStack>)}
            <Box height={["2rem","14rem"]}>
            </Box>
        </VStack>
        <Footer bgColor="background" textColor="highlight" currentStep={3} />
    </Box>
}

export default Contact;