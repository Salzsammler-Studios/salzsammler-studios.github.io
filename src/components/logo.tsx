import { Box, Heading} from "@chakra-ui/react";

type LogoProps = {
    color: string
}
const Logo = ({ color }: LogoProps) => {
    return (
        <>
            <Box marginTop={[-4,-12]} marginLeft={["1rem","4rem"]}>
                <Heading as="a" href="#/" color={color} size={["md", "2xl"]} noOfLines={2} maxW={['12rem', 'md']} paddingTop={['3rem', '2rem']} paddingLeft={['1rem', '1rem']} fontWeight={800}>Salzsammler Studios</Heading>
            </Box>
        </>
    );
}
  
export default Logo;