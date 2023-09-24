import ReactDOM from 'react-dom/client';

import {Route, BrowserRouter, Routes} from 'react-router-dom';

import reportWebVitals from "./reportWebVitals";
import Homepage from "./pages/homepage";
import AboutUs from "./pages/about_us";

import "./App.css"
import BaseLayout from "./components/BaseLayout";
import Project from "./pages/project";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="about_us" element={<AboutUs/>}/>
                    <Route path="project" element={<Project/>}/>
                    <Route path="gallery" element={<Project/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
