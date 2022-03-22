import "./App.css";
import { Navbar, Intro, Projects, Skills, Contact, Footer } from "./sections";
import { BrowserRouter } from "react-router-dom";
import ReactGa from "react-ga";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGa.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS_API_KEY}`);
    // to report page view
    ReactGa.pageview("/");
  }, []);

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
