import { Box, Heading, Icon, createIcon } from "@chakra-ui/react";
// somehow this icon gets placed wherever.
import {ReactComponent as SalzsammlerLogoIcon} from "../assets/logo.svg"

type LogoProps = {
    color: string
}
const Logo = ({ color }: LogoProps) => {
    return (
        <>
            <Box marginTop={[-1,-12]} marginLeft={["1rem","4rem"]}>
                <Heading as="a" href="#/" color={color} size={["lg", "2xl"]} noOfLines={2} maxW={['12rem', 'md']} paddingTop={['3rem', '2rem']} paddingLeft={['1rem', '1rem']} fontWeight={800}>Salzsammler Studios</Heading>
            </Box>
        </>
    );
}
  
export default Logo;