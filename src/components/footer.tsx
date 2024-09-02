import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import Logo from "./logo";
import { useMediaQuery } from "react-responsive";

type FooterProps = {
    bgColor: string;
    textColor: string;
    currentStep: number;
}
const Footer = ({ bgColor, textColor, currentStep }: FooterProps) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    return (
        <Box>
            {isMobile ? <MobileFooter bgColor={bgColor} textColor={textColor} currentStep={currentStep} /> : <DesktopFooter bgColor={bgColor} textColor={textColor} currentStep={currentStep} />}
        </Box>
    )
}

const MobileFooter = ({ bgColor, textColor, currentStep }: FooterProps) => {
    return (
        <Box borderTopRadius={currentStep === 2 ? ["0px", "0px"] : ["30px", "0px"]} minH={["0rem", "8rem"]} bgColor={bgColor} marginTop={"-0.1rem"} padding={"2rem"}>
            <VStack justifyContent={"space-between"} alignItems={"top"} paddingTop={["0rem","4rem"]}>
                <Box marginLeft={["-2rem","0rem"]} marginBottom={"2rem"} marginTop={["-3rem","0rem"]}>
                    <Logo color={textColor} />
                </Box>
                <VStack spacing={10} alignItems={"start"}>
                    <VStack spacing={0} alignItems={"start"}>
                        <Text as="b" color={textColor}>MENU</Text>
                        <Text as="a" href={"#/"} color={textColor} lineHeight={"1.2rem"}><Text as="u">Home</Text></Text>
                        {currentStep !== 1 && <Text as="a" href={"#/project"} color={textColor} lineHeight={"1.2rem"}><Text as="u">Projekt</Text></Text>}
                        {currentStep !== 2 && <Text as="a" href={"#/team"} color={textColor} lineHeight={"1.2rem"}><Text as="u">Team</Text></Text>}
                        {currentStep !== 3 && <Text as="a" href={"#/contact"} color={textColor} lineHeight={"1.2rem"}><Text as="u">Kontakt</Text></Text>}
                        <Text as="a" href={"#/impressum"} color={textColor}><Text as="u" lineHeight={"1.2rem"}>Impressum</Text></Text>
                    </VStack>
                    <VStack spacing={0} alignItems={"start"} paddingRight={"2rem"}>
                        <Text as="b" color={textColor}>KONTAKT</Text>
                        <Text as="a" href="tel:176-240-71380" color={textColor} lineHeight={"1.2rem"}><Text as="u">+49 176 240 71380</Text></Text>
                        <Text as="a" href={"mailto:info@salzsammler.de"} color={textColor} lineHeight={"1.2rem"}><Text as="u">info@salzsammler.de</Text></Text>
                    </VStack>
                </VStack>
            </VStack>
        </Box>
    )
}

const DesktopFooter = ({ bgColor, textColor, currentStep }: FooterProps) => {
    return (
        <Box minH={["sm", "8rem"]} bgColor={bgColor} marginTop="-0.1rem" paddingBottom={"2rem"}>
            <HStack justifyContent={"space-between"} alignItems={"top"} paddingTop={"4rem"}>
                <Logo color={textColor} />
                <HStack spacing={10} alignItems={"start"}>
                    <VStack spacing={0} alignItems={"start"}>
                        <Text as="b" color={textColor}>MENU</Text>
                        <Text as="a" href={"#/"} color={textColor}><Text as="u">Home</Text></Text>
                        {currentStep !== 1 && <Text as="a" href={"#/project"} color={textColor}><Text as="u">Projekt</Text></Text>}
                        {currentStep !== 2 && <Text as="a" href={"#/team"} color={textColor}><Text as="u">Team</Text></Text>}
                        {currentStep !== 3 && <Text as="a" href={"#/contact"} color={textColor}><Text as="u">Kontakt</Text></Text>}
                        <Text as="a" href={"#/impressum"} color={textColor}><Text as="u">Impressum</Text></Text>
                    </VStack>
                    <VStack spacing={0} alignItems={"start"} paddingRight={"2rem"}>
                        <Text as="b" color={textColor}>KONTAKT</Text>
                        <Text as="a" href="tel:176-240-71380" color={textColor}><Text as="u">+49 176 240 71380</Text></Text>
                        <Text as="a" href={"mailto:salzsammler.studios@gmail.com"} color={textColor}><Text as="u">salzsammler.studios@gmail.com</Text></Text>
                    </VStack>
                </HStack>
            </HStack>
        </Box>
    )
}

export default Footer;