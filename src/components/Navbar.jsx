/**
 * Navbar Component
 * 
 * Glass-morphism navigation bar with:
 * - Logo
 * - Navigation links with smooth scroll
 * - Dark mode toggle
 * - Mobile responsive hamburger menu
 */

import { useState } from 'react';

// Navigation links for smooth scrolling
const NAV_LINKS = [
    { href: '#home', label: 'Ana Sayfa' },
    { href: '#about', label: 'Hakkımızda' },
    { href: '#gallery', label: 'Galeri' },
    { href: '#contact', label: 'İletişim' },
];

function Navbar() {
    // State for mobile menu toggle
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                {/* Logo - Clickable to scroll to top */}
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, '#home')}
                    className="flex items-center space-x-2 cursor-pointer"
                >
                    <img
                        src="/cream_logo.svg"
                        alt="Miterra Coffee Logo"
                        className="h-20 w-auto"
                    />
                </a>

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

                {/* Right side: CTA */}
                <div className="flex items-center space-x-4">

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
