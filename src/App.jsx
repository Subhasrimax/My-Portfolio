import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Awards } from "./components/Awards/awards"
import { Skills } from "./components/skills/skills";
import { Education } from "./components/Education/education";
import { ContactForm } from "./components/ContactForm/ContactForm"

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education/>
      <Skills/>
      <Experience />
      <Projects />
      <Awards />
      <ContactForm />
      <Contact />
    </div>
  );
}

export default App;
