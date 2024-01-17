import { FolderOpenTwoTone } from "@ant-design/icons"
import { PhoneIcon } from "@chakra-ui/icons"
import { Box, Center, VStack, Text, Heading } from "@chakra-ui/react"

const ContactCard = () => {
    return <Box>
        <VStack>
            <Center height="7rem" width="7rem" marginBottom="-3rem" zIndex="2" sx={{
                borderRadius: "100%",
                background: "#F5F5F5",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            }}>
                <PhoneIcon color="highlight" boxSize={"2.5rem"} />
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
                    <Heading size="xl" color={"highlight"} fontWeight={300}>Ruf uns an</Heading>
                    <Heading size="xl" color={"highlight"} fontWeight={600}>+49 123 456 789</Heading>
                </VStack>
            </Center>
        </VStack>
    </Box >
}

export default ContactCard;