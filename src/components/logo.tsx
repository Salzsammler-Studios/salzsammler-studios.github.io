import { Box, Heading, Icon, createIcon } from "@chakra-ui/react";
// somehow this icon gets placed wherever.
import {ReactComponent as SalzsammlerLogoIcon} from "../assets/logo.svg"

type LogoProps = {
    color: string
}
const Logo = ({ color }: LogoProps) => {
    return (
        <>
            <Box visibility={["visible", "hidden"]} marginTop={["3.5rem", "2rem"]} marginLeft={"0.5rem"}>
                <SalzsammlerLogoIcon color={color} height={"1.5rem"}/>
            </Box>
            <Box visibility={["hidden", "visible"]} marginTop={-12} marginLeft={"4rem"}>
                <Heading color={color} size={["3xs", "2xl"]} noOfLines={2} maxW={['10rem', 'md']} paddingTop={['1rem', '2rem']} paddingLeft={['1rem', '1rem']} fontWeight={800}>Salzsammler Studios</Heading>
            </Box>
        </>
    );
}
  
export default Logo;