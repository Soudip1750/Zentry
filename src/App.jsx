import React from 'react'
import './index.css'
import Hero from "./Components/Hero.jsx";
import Hero2 from "./Components/Hero2.jsx";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Hero />
            
            <section className="z-0 min-h-screen bg-blue-500" />
        </main>
    )
}
export default App
