import ReactDOM from 'react-dom/client';
import reportWebVitals from "./reportWebVitals";
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import App from './App';

// import i18n (needs to be bundled ;))
import './i18n';

const fonts = {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
};
const theme = extendTheme({
    fonts,
    colors: {
        black: '#121212',
        highlight: '#A74D4A',
        backgroundAboutUs: '#F5F5F5',
        backgroundProject: '#EAE6E1',
        background: '#F6F4EF',
        backgroundGreen: '#708E66',
        random: '#F4F4F4'
    }
});

function Page() {
    return (
        <ChakraProvider theme={theme}>
        <App/>
        </ChakraProvider>
    );

}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Page/>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
