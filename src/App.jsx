/**
 * App Component
 * 
 * Main application component that assembles all sections:
 * - Navbar (fixed navigation)
 * - Hero (full-screen welcome)
 * - About (cafe story)
 * - Gallery (photo gallery)
 * - Contact (location & hours)
 * - Footer (app links & legal)
 */

import './App.css';

// Import all section components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-primary-dark dark:text-gray-200 font-sans transition-colors duration-300">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section - Full screen welcome */}
        <Hero />

        {/* About Section - Cafe story and values */}
        <About />

        {/* Gallery Section - Photo gallery */}
        <Gallery />

        {/* Contact Section - Location and info */}
        <Contact />
      </main>

      {/* Footer with app links and legal */}
      <Footer />
    </div>
  );
}

export default App;
