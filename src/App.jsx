/** @format */
import Nav from "./component/Nav.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Social from "./component/Social.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Experience from "./pages/Experience.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

function App() {
    return (
        <div className='bg-gradient-to-b w-full via-black from-black to-gray-800'>
            <Nav />
            <Home />
            <Social />
            <About />
            <Portfolio />
            <Experience />
            <Contact />
        </div>
    );
}

export default App;
