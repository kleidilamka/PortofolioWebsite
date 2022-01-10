import styles from "./App.module.css";
import Hero from "./components/Hero";
import About from "./components/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SectionDivider } from "./styles/GlobalComponents";
import Projects from "./components/Projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className={styles.app}>
        <ToastContainer />
        <NavBar />
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <Experience />
        <SectionDivider />
        <Technologies />
        <SectionDivider />
        <Contact />
      </div>
    </div>
  );
}

export default App;
