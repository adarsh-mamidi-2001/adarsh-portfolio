import React from 'react';
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/sections.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Publications, Skills, Achievements } from './components/Sections';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Publications />
                <Skills />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;