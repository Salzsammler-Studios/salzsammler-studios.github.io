import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Content from './components/content';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Feedback from "./pages/feedback";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Content initialTabIndex={0} />} />
                <Route path="/project" element={<Content initialTabIndex={1} />} />
                <Route path="/team" element={<Content initialTabIndex={2} />} />
                <Route path="/contact" element={<Content initialTabIndex={3} />} />
                <Route path="/feedback" element=<Feedback/>/>
                {/* Add more routes for additional tabs */}
            </Routes>
        </Router>)
}

export default App;