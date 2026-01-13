/**
 * Hero Component
 * 
 * Full-screen hero section with:
 * - Background image with gradient overlay
 * - Animated headline and tagline
 * - CTA buttons (Explore Menu, Our Story)
 * - Scroll indicator
 */

function Hero() {
    // Smooth scroll to about section
    const handleScrollClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with brightness overlay */}
            <div className="absolute inset-0 hero-pattern brightness-90"></div>

            {/* Gradient Overlay for text readability - lighter version */}
            <div className="absolute inset-0 bg-gradient-to-t from-background-light/60 dark:from-background-dark/70 to-transparent"></div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl">
                {/* Main Headline */}
                <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                    Her fincan <br />
                    <span className="text-primary italic">bir hikaye anlatır.</span>
                </h1>

                {/* Tagline */}
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Organik kahve, el yapımı lezzetler ve toprağın sıcaklığından
                    ilham alan samimi bir atmosfer deneyimleyin.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Primary CTA - Explore Menu */}
                    <a
                        href="#menu"
                        onClick={(e) => handleScrollClick(e, '#gallery')}
                        className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform"
                    >
                        Menüyü Keşfet
                    </a>

                    {/* Secondary CTA - Our Story */}
                    <a
                        href="#about"
                        onClick={(e) => handleScrollClick(e, '#about')}
                        className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/30 transition-all"
                    >
                        Hikayemiz
                    </a>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 animate-bounce">
                <a
                    href="#about"
                    onClick={(e) => handleScrollClick(e, '#about')}
                    aria-label="Scroll down to About section"
                >
                    <span className="material-icons text-white text-3xl">expand_more</span>
                </a>
            </div>
        </section>
    );
}

export default Hero;
