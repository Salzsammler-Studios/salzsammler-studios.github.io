import ReactDOM from 'react-dom/client';
import reportWebVitals from "./reportWebVitals";
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import App from './App';


const fonts = {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
};
const theme = extendTheme({fonts});

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
