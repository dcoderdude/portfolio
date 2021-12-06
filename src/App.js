import './App.css';
import resume from './resume.pdf';

function App() {
  return (
    <div className="App">
      <div id="about">
         I'm Daniel Hernandez.
         <br></br>
         Web Developer
      </div>
      <div>
         <li>
			<a href={resume} download="Resume.pdf">Dowload Resume</a>
         </li>
      </div>
	  <a href="#about">About</a>
    </div>
  );
}

export default App;
