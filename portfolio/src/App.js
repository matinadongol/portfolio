import './App.css';
import About from './about/About';
import Education from './education/Education';
import Experience from './experience/Experience';
import Home from './home/Home';
import Projects from './projects/Projects';
import Skills from './skills/Skills';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Education/>
    </div>
  );
}

export default App;
