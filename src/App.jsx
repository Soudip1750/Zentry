import React from 'react'
import './index.css'
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Navbar from "./Components/Navbar.jsx";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
        </main>
    )
}
export default App
