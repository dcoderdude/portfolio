import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

import AppBanner from './components/AppBanner';
import AppFooter from './components/AppFooter'

function App() {
    return (
        <section id="main">
            <Router>
                <AppBanner />
                <Routes>
                    <Route path="/portfolio" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <AppFooter />
            </Router>
        </section>
    );
}

export default App;