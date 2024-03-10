import './App.css'
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

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
                <Home darkMode={darkModeState} updateDarkModeState={updateDarkModeState} />
                <About />
                <Skills />
                <Projects />
            </main>
        </div>
    );
}

export default App;