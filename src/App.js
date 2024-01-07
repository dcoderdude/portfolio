import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <main className="App">
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}

export default App;
