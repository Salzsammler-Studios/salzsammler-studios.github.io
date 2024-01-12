import { Box, Heading, Image, Text } from "@chakra-ui/react";

type TeamCardProps = {
    image: string;
    name: string;
    title: string;
    text: string;

}
const TeamCards = ({image, name, title, text}: TeamCardProps) => {

    return <Box>
        <Image src={image} marginBottom="1rem"></Image>
        <Heading size="xl" sx={{ fontWeight: 600 }} color="#A74D4A">{name}</Heading>
        <Heading size="md" sx={{ fontWeight: 400 }} marginBottom={"1rem"}>{title}</Heading>
        <Text maxW="sm">{text}</Text>
    </Box>
}

export default TeamCards;