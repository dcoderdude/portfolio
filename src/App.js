import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import References from './components/References';

function App() {
  return (
    <main className="App">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <References />
      <Contact />
    </main>
  );
}

export default App;
