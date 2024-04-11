import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    homepage: {
                        header1: 'Interactive Installations',
                        header2: 'Salzsammler',
                        header3: 'Studios',
                        subheader: 'Salzsammler Studios focuses on innovations in the field of extended reality in order to make didactically valuable information interactive and playable.',
                        button: 'Learn more',
                    },
                    project: {
                        header1: 'The trade and transport of goods take center stage. Children take on tasks such as accepting wares like building materials, food, and luxury goods.',
                        headerText: 'An interactive installation that enables children to encounter historical content while having fun.',
                        leftText: 'Children are not only encouraged to play, but also to explore historical topics and develop a deep understanding of cultural contexts. Close cooperation with experts from cultural institutions creates an immersive learning environment that gets children excited about history and offers them interactive access to historical content.',
                        rightText: 'Salzsammler employs a projector to create an immersive and interactive projection screen. The players and dice are seamlessly integrated into the application via the usage of camera. In addition, the application uses state-of-the-art computer vision technologies to ensure a smooth and fluid user experience.',
                    },
                    about_us: {
                        header: 'About us',
                        rubentext: 'When I\'m not working on salzsammler, I\'m a web developer combining creative self-realization with technical know-how.',
                        johntext: 'My job as a producer combines my passion and expertise for game development and allows me to keep a cool head and keep an overview.',
                        nictext: 'With my passion for music, theater and games, I work in game design, production and composition and combine everything into a harmonious whole.',
                    },
                    contact: {
                        header: 'Get in Touch',
                        subheader: 'We would love to chat about future installations with you.',
                    }
                }
            },
            de: {
                translation: {
                    homepage: {
                        header1: 'Interaktive Installationen',
                        header2: 'Salzsammler',
                        header3: 'Studios',
                        subheader: 'Salzsammler Studios fokussiert sich auf Innovationen im Bereich der Extended Reality, um didaktisch wertvolle Informationen interaktiv und spielbar erfahrbar zu machen.',
                        button: 'Mehr erfahren',
                    },
                    project: {
                        header1: 'Der Handel und Transport von Waren stehen im Mittelpunkt. Kinder übernehmen Aufgaben wie das Annehmen von Baumaterialien, Lebensmitteln und Luxusgütern',
                        headerText: 'Eine interaktive Installation, die es Kindern ermöglicht, geschichtlichen Inhalten mit Spielspaß zu begegnen.',
                        leftText: 'Kinder werden nicht nur zum Spielen angeregt, sondern auch dazu, historische Themen zu erforschen und ein tiefes Verständnis für kulturelle Zusammenhänge zu entwickeln. Durch die enge Zusammenarbeit mit Experten aus Kulturinstitutionen entsteht eine immersive Lernumgebung, die Kinder für Geschichte begeistert und ihnen einen interaktiven Zugang zu historischen Inhalten bietet.',
                        rightText: 'Salzsammler nutzt einen Projektor, um eine immersive und interaktive Projektionsfläche zu erschaffen, auf der Spielende und Würfel von der Kamera erfasst werden und somit nahtlos in die Anwendung integriert werden. Darüber hinaus setzt die Anwendung modernste Computer Vision-Technologien ein, um einen flüssigen Ablauf und eine beeindruckende Nutzererfahrung sicherzustellen.',
                    },
                    about_us: {
                        header: 'Das Team',
                        rubentext: 'Wenn ich nicht gerade an Salzsammler arbeite, bin ich Webentwickler. Kreative Selbstverwirklichung mit technischem Know-how.',
                        johntext: 'Meine Aufgabe als Producer vereint meine Leidenschaft und Expertise für Spieleentwicklung und lässt mich mit einem kühlen Kopf den Überblick behalten.',
                        nictext: 'Mit meiner Leidenschaft für Musik, Theater und Games arbeite ich im Game Design, in der Produktion und in der Komposition und verbinde alles zu einem harmonischen Ganzen.',
                    },
                    contact: {
                        header: 'Kontaktieren Sie uns!',
                        subheader: 'Wir freuen uns darauf, mit Ihnen über zukünftige Installationen zu sprechen.',
                    }
                }
            }
        }
    });

export default i18n;