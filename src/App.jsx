import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Check from "./components/Check";
import Cross from "./components/Cross"

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="app-content">
          <Check />
          {/* profile image here */}
          <Cross />
          <Router />
        </div>
        <Navbar />
      </BrowserRouter>
    </div>
  );
};

export default App;