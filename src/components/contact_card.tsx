import { Box, Center, VStack, Heading, Link } from "@chakra-ui/react"

type ContactCardProps = {
    icon: React.ReactElement;
    text: string;
    link: string;
    href?: string;
    textWidth: string;
}
const ContactCard = ({ icon, text, link, href, textWidth }: ContactCardProps) => {
    return <Box>
        <VStack>
            <Center height="7rem" width="7rem" marginBottom="-3.5rem" zIndex="2" sx={{
                borderRadius: "100%",
                background: "#F5F5F5",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            }}>
                {icon}
            </Center>
            <Center
                height="13rem"
                width="22rem"
                sx={{
                    borderRadius: "17px",
                    background: "#F5F5F5",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}>
                <VStack>
                    <Heading size="xl" color={"highlight"} fontWeight={300}>{text}</Heading>
                    <Link w={textWidth} href={href} isExternal color={"highlight"}><Heading textAlign="center" fontSize={"1.7rem"}color={"highlight"} fontWeight={600}>{link}</Heading></Link>
                </VStack>
            </Center>
        </VStack>
    </Box >
}

export default ContactCard;