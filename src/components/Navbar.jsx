/**
 * Navbar Component
 * 
 * Glass-morphism navigation bar with:
 * - Logo
 * - Navigation links with smooth scroll
 * - Dark mode toggle
 * - Mobile responsive hamburger menu
 */

import { useState, useEffect } from 'react';

// Logo image URL from the original design
const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIR__PWRq9Nw7V5-tIvh026UvS1e-RCpopTsfD5pU_Ijoa2yDOj-hovX2zDkLFPSFyvWLngX-TCBFCcrSC7d395EoYYZRnxTMFO4CPQAmftt-B8CrvG12kCBvSdSzlGKhxPht-f9q0dSE8Jjvzatu6WyZVqHSH8h7k7GDVN1HiPghb16igh5bGLsdk5okUUDYcyb1U9ruGZjIo1yKWRTVhd6igYi-PrOzisz4unAhzMyub6yNoV_0Jv8P_eqQUp8jWZqp1wxfrw93g';

// Navigation links for smooth scrolling
const NAV_LINKS = [
    { href: '#home', label: 'Ana Sayfa' },
    { href: '#about', label: 'Hakkımızda' },
    { href: '#gallery', label: 'Galeri' },
    { href: '#contact', label: 'İletişim' },
];

function Navbar() {
    // State for dark mode toggle
    const [isDark, setIsDark] = useState(false);
    // State for mobile menu toggle
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Initialize dark mode from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    // Toggle dark mode and persist preference
    const toggleDarkMode = () => {
        setIsDark(!isDark);
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    // Smooth scroll to section
    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed w-full z-50 glass-nav border-b border-primary/10 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        src={LOGO_URL}
                        alt="Miterra Logo"
                        className="h-10 w-auto"
                    />
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-8 font-medium">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right side: Dark mode toggle & CTA */}
                <div className="flex items-center space-x-4">
                    {/* Dark Mode Toggle Button */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
                        aria-label="Toggle dark mode"
                    >
                        <span className={`material-icons text-xl ${isDark ? 'hidden' : ''}`}>
                            dark_mode
                        </span>
                        <span className={`material-icons text-xl ${isDark ? '' : 'hidden'}`}>
                            light_mode
                        </span>
                    </button>

                    {/* Visit Us CTA Button */}
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="hidden sm:block bg-primary text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-all"
                    >
                        Ziyaret Et
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
                        aria-label="Toggle mobile menu"
                    >
                        <span className="material-icons text-xl">
                            {isMobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-background-light dark:bg-background-dark border-t border-primary/10 dark:border-white/10">
                    <div className="px-6 py-4 space-y-4">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="block hover:text-primary transition-colors font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className="block bg-primary text-white px-6 py-2 rounded-full font-medium text-center hover:opacity-90 transition-all"
                        >
                            Ziyaret Et
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
