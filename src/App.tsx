import Content from './components/content';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Impressum from './pages/impressum';
import DataPrivacy from './pages/data_privacy';
import Feedback from "./pages/feedback";
import SchalterPrivacy from "./pages/der-schalter/privacy_policy"
import SchalterSupport from "./pages/der-schalter/support_page";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Content initialTabIndex={0} />} />
                <Route path="/project" element={<Content initialTabIndex={1} />} />
                <Route path="/team" element={<Content initialTabIndex={2} />} />
                <Route path="/contact" element={<Content initialTabIndex={3} />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/data_privacy" element={<DataPrivacy />} />
                <Route path="/feedback" element=<Feedback/>/>
                <Route path="/der-schalter/privacy" element=<SchalterPrivacy/>/>
                <Route path="/der-schalter/support" element=<SchalterSupport/>/>
                {/* Add more routes for additional tabs */}
            </Routes>
        </Router>)
}

export default App;