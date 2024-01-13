import { Box, Heading, Image } from "@chakra-ui/react";

const Logo = () => {
    return (
        <>
            <Box visibility={["visible", "hidden"]} marginTop={7}>
                <Image src={"/salzsammler-logo-short.ico"} h={6} alt="logo" />
            </Box>
            <Box visibility={["hidden","visible"]} marginTop={-12}>
                <Heading size={["3xs", "2xl"]} noOfLines={2} maxW={['10rem', 'md']} paddingTop={['1rem', '1rem']} paddingLeft={['1rem', '1rem']}>Salzsammler Studios</Heading>
            </Box>
        </>
    );
}

export default Logo;