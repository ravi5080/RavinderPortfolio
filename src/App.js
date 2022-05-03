import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About/>
      <Projects/>
      <Skills/>
      <Testimonials/>
      <Contact/>
      <Navbar/>
    </main>
  );
}

export default App;

