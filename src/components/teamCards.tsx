import { Box, Heading, Image, Text } from "@chakra-ui/react";

type TeamCardProps = {
    image: string;
    name: string;
    title: string;
    text: string;

}
const TeamCards = ({image, name, title, text}: TeamCardProps) => {

    return <Box style={{marginLeft: 'auto', marginRight: 'auto'}}>
        <Image src={image} marginBottom="1rem" height={["60%"]}></Image>
        <Heading size="xl" sx={{ fontWeight: 600 }} color="highlight">{name}</Heading>
        <Heading size="md" sx={{ fontWeight: 400 }} marginBottom={"1rem"}>{title}</Heading>
        <Text maxW="xs">{text}</Text>
    </Box>
}

export default TeamCards;