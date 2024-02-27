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
            <p><b>Vertretungsberechtigte Gesellschafter:</b> Nic Schilling, John Beinecke und Ruben Schäfer</p>
            <br></br>
            <b>Kontakt:</b>
            <p>Telefon: 0176 24071386</p>
            <p>E-Mail: salzsammler.studios@gmail.com</p>
            <br></br>
            <p>Inhaltlich Verantwortlicher: Ruben Schäfer, Kirchgasse 12, 95444 Bayreuth</p>
            <br></br>
            <br></br>
            <b>Haftungshinweis:</b>
            <p>Wir übernehmen übernimmt keinerlei Verantwortung oder Haftung für die Angaben auf dieser Webseite. Unser Ziel ist es, aktuelle und genaue Informationen bereitzustellen. Allerdings kann nicht garantiert werden, dass die auf dieser Webseite verfügbaren Angaben tatsächlich aktuell, umfassend, komplett oder genau sind.

                Bei den bereitgestellten Informationen handelt es sich um solche allgemeiner Art, die nicht auf die besonderen Bedürfnisse bestimmter Personen oder Unternehmen abgestimmt sind. Insbesondere soll durch sie keine Beratung erfolgen.

                Sofern von dieser Webseite auf andere Webseiten verwiesen wird, können wir deren Inhalt nicht beeinflussen und für diesen auch keine Verantwortung übernehmen. </p>
        </Box>
    );
}

export default Impressum;