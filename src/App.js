import './App.css'
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
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
                    <Routes>
                        <Route path='/portfolio' element={<Home darkMode={darkModeState} updateDarkModeState={updateDarkModeState} />} />
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