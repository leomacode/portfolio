import { useEffect } from "react";
import "./App.css";
import { Navbar, Intro, Projects } from "./sections";
import { BrowserRouter } from "react-router-dom";
import { keepTheme } from "./utils/themes";

function App() {
  useEffect(() => {
    keepTheme();
  });
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="container">
          <Intro />
          <Projects />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
