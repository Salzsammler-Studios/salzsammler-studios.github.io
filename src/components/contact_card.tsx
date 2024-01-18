import { Box, Center, VStack, Heading, Link } from "@chakra-ui/react"

type ContactCardProps = {
    icon: React.ReactElement;
    text: string;
    link: string;
    href?: string;
}
const ContactCard = ({ icon, text, link, href }: ContactCardProps) => {
    return <Box>
        <VStack>
            <Center height="7rem" width="7rem" marginBottom="-3rem" zIndex="2" sx={{
                borderRadius: "100%",
                background: "#F5F5F5",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            }}>
                {icon}
            </Center>
            <Center
                height="13rem"
                width="20rem"
                sx={{
                    borderRadius: "17px",
                    background: "#F5F5F5",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}>
                <VStack>
                    <Box h={"1rem"}></Box>
                    <Heading size="xl" color={"highlight"} fontWeight={300}>{text}</Heading>
                    <Link href={href} isExternal color={"highlight"}><Heading textAlign="center" size="lg" color={"highlight"} fontWeight={600}>{link}</Heading></Link>
                </VStack>
            </Center>
        </VStack>
    </Box >
}

export default ContactCard;