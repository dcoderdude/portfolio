import './App.css'
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BannerHeader from './components/BannerHeader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [darkModeState, setDarkMode] = useState('');
    const updateDarkModeState = (newValue) => {
        setDarkMode(newValue);
    };

    const twMainClass = `
    bg-white 
    px-10 
    md:px-20 
    lg:px-40 
    dark:bg-gray-900
    `;

    return (
        <div className={darkModeState}>
            <main className={twMainClass}>
                <Router>
                    <BannerHeader className='flex py-10 mb-12 justify-between' darkMode={darkModeState} updateDarkModeState={updateDarkModeState} />
                    <Routes>
                        <Route path='/portfolio' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/skills' element={<Skills />} />
                        <Route path='/projects' element={<Projects />} />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;