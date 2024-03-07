import { Box, Heading, Image, Text } from "@chakra-ui/react";

type TeamCardProps = {
    image: string;
    name: string;
    title: string;
    text: string;

}
const TeamCards = ({image, name, title, text}: TeamCardProps) => {

    return <Box style={{marginLeft: 'auto', marginRight: 'auto'}} width={["100%","25rem"]}>
        <Image src={image} marginBottom="1rem" height={["auto"]} width={"24.5rem"}></Image>
        <Heading size="xl" sx={{ fontWeight: 600 }} color="highlight">{name}</Heading>
        <Heading size="md" sx={{ fontWeight: 400 }} marginBottom={"1rem"}>{title}</Heading>
        <Text fontSize={"lg"} maxW={["90%","98%"]} marginBottom={"4rem"}>{text}</Text>
    </Box>
}

export default TeamCards;