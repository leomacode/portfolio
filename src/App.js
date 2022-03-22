import "./App.css";
import { Navbar, Intro, Projects, Skills, Contact, Footer } from "./sections";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="container">
          <Intro />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
