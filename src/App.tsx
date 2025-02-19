import React from 'react';
import { Github, Linkedin, Mail, BookOpen, Code, Camera, Music, Trophy } from 'lucide-react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Hobbies />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 K. Sree Adithya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;