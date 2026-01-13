/**
 * Footer Component
 * 
 * Simple footer with copyright and legal links
 */

// Legal links
const LEGAL_LINKS = [
    { href: '/privacy', label: 'Gizlilik Politikası' },
    { href: '/terms', label: 'Kullanım Şartları' },
    { href: '/cookies', label: 'Çerez Tercihleri' },
];

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-background-dark py-10 text-center border-t border-[#e6dfdb] dark:border-[#3a2a22]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Copyright and Legal Links */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-[#896f61]">
                    {/* Copyright */}
                    <p>© {currentYear} Miterra Artisan Coffee. Tüm Hakları Saklıdır.</p>

                    {/* Legal Links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {LEGAL_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="hover:text-primary transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
