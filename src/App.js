import { useEffect } from "react";
import "./App.css";
import { Navbar } from "./components";
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
      </div>
    </BrowserRouter>
  );
}

export default App;
