import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Skills from "./components/pages/skills/Skills";
import Services from "./components/pages/services/Services";
import Qualification from "./components/pages/qualification/Qualification";
import Interests from "./components/pages/interests/Interests";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </Router> */}
      <Header />
      <main className="main">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Services />
        <Qualification />
        <Interests />
      </main>
      <Footer />
    </>
  );
}

export default App;
