import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <main className="App">
      <About />
      <Navbar />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
