import { Box, Heading, Text } from "@chakra-ui/react";

const Impressum = () => {
    return (
        <Box bgColor="background" minH="100vh" minW="100vw" margin="auto" padding="3rem">
                <Heading>Impressum</Heading>
                <Text>Angaben gemäß § 5 TMG</Text>
                <br></br>
                <b>Niclas Schilling, Ruben Schäfer und John Beinecke GbR, Salzsammler Studios</b>
                <p>Schwindstraße 28</p>
                <p>95447 Bayreuth</p>
                <br></br>
                <p>Gesellschafter: Nic Schilling, John Beinecke und Ruben Schäfer</p>
                <br></br>
                <b>Kontakt:</b>
                <p>Telefon: 0176 24071386</p>
                <p>E-Mail: salzsammler.studios@gmail.com</p>
                <br></br>
                <p>Inhaltlich Verantwortlicher: Ruben Schäfer, Kirchgasse 12, 95444 Bayreuth</p>
                <br></br>
                <br></br>
                <b>Haftungshinweis:</b>
                <p>Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und grundsätzlich nicht bereit.</p>
        </Box>
    );
}

export default Impressum;