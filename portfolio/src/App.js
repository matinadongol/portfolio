import './App.css';
import About from './about/About';
import Experience from './experience/Experience';
import Home from './home/Home';
import Skills from './skills/Skills';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
    </div>
  );
}

export default App;
