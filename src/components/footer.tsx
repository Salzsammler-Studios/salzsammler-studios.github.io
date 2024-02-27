import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import Logo from "./logo";

type FooterProps = {
    bgColor: string;
    textColor: string;	
}
const Footer = ({bgColor, textColor}:FooterProps) => {
    return (
        <Box minH={["sm","10rem"]} bgColor={bgColor} marginTop={"-0.1rem"}>
            <HStack justifyContent={"space-between"} alignItems={"baseline"}>
                <Logo color={textColor} />
                <VStack spacing={0} alignItems={"start"}>
                    <Text as="b" color={textColor}>MENU</Text>
                    <Text as="a" href={"#/"} color={textColor}><Text as="u">Home</Text></Text>
                    <Text as="a" href={"#/project"} color={textColor}><Text as="u">Projekt</Text></Text>
                    <Text as="a" href={"#/team"} color={textColor}><Text as="u">Team</Text></Text>
                    <Text as="a" href={"#/contact"} color={textColor}><Text as="u">Kontakt</Text></Text>
                    <Text as="a" href={"#/"} color={textColor}><Text as="u">Impressum</Text></Text>
                </VStack>
                <VStack spacing={0} alignItems={"start"} paddingRight={"2rem"}>
                    <Text as="b" color={textColor}>KONTAKT</Text>
                    <Text as="a" href="tel:176-240-71380" color={textColor}><Text as="u">+49 176 240 71380</Text></Text>
                    <Text as="a" href={"mailto:salzsammler.studios@gmail.com"} color={textColor}><Text as="u">salzsammler.studios@gmail.com</Text></Text>
                </VStack>
            </HStack>
        </Box>
    )
}

export default Footer;