/**
 * Contact Component - "Contact & Location"
 * 
 * Contact section featuring:
 * - Interactive map on the left with custom marker
 * - Contact information (address, phone, email)
 * - Working hours
 * - Social media links and app store badges
 */

// Instagram SVG Icon
const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

// Facebook SVG Icon
const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z" />
    </svg>
);

// Apple Icon for App Store
const AppleIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2.01.77-3.27.82-1.31.05-2.36-1.31-3.19-2.52-1.71-2.46-3.01-6.96-1.26-10.04.87-1.52 2.43-2.48 4.14-2.51 1.3-.02 2.52.88 3.31.88.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
);

// Google Play Icon
const PlayStoreIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a2.29 2.29 0 0 1-.61-1.585V3.4a2.29 2.29 0 0 1 .61-1.586zM15.208 13.416l2.365 2.365-14.417 8.24c-.167.096-.346.16-.546.179l12.598-12.598-.001.001a1.5 1.5 0 0 1 0-2.122L2.61.884c.199.02.379.083.546.179l14.417 8.24-2.365 2.113zM16.622 12l5.446-3.112a1.5 1.5 0 0 1 0 2.6l-5.446 3.112c.312-.422.312-1.066 0-1.488z" />
    </svg>
);

// Map background image
const MAP_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ8XLxGMJ_0oSE-g_HwfSsmz0WcF06S7C9xXLGVk_Db1a0FlT0DcHg_Pgn_ls7wzDlQ-uO8t8-FV3YxPzaIZfReBib5w8aoFvpqRm__qvoKe9TSwZE51w7YKIyp54qLDO89o5vmjn2e5Us9mYak-CpMzQVJnd5GFK62Z4lYPNbm2RvHjB654Ol9LOC-HXbnAcnupR_QvH31ag4ovd0QQd0Ta5PsBd3P9KAJvMn1jkJpXPR9KE2tEZceWJ7ufCwpO36RCiiYaYO3frj';

// Working hours data
const WORKING_HOURS = [
    { days: 'Her Gün', hours: '08:00 - 23:00' },
];

function Contact() {
    return (
        <section id="contact" className="py-12 px-4 sm:px-10">
            <div className="max-w-[1280px] mx-auto">
                {/* Section Header */}
                <div className="mb-10 text-center lg:text-left">
                    <h1 className="text-primary-dark dark:text-white text-[32px] md:text-[40px] font-bold leading-tight tracking-[-0.015em] mb-2">
                        İletişim & Konum
                    </h1>
                    <p className="text-[#896f61] dark:text-[#a68e82] text-lg max-w-2xl">
                        Kahve dükkanımıza gelin veya sorularınız için bize ulaşın.
                    </p>
                </div>

                {/* Main Content Card */}
                <div className="flex flex-col lg:flex-row gap-0 bg-white dark:bg-[#2D1B14] rounded-xl overflow-hidden shadow-sm border border-[#e6dfdb] dark:border-[#3a2a22]">
                    {/* Left Side: Map */}
                    <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]">
                        {/* Google Maps Iframe - Miterra Coffee, Görükle, Bursa */}
                        <iframe
                            src="https://www.google.com/maps?q=Miterra+Coffee,+Görükle+Mah.,+Üniversite-1.+Cad.,+Nilüfer,+Bursa&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Miterra Coffee - Görükle, Nilüfer, Bursa"
                        />

                        {/* Get Directions Button */}
                        <a
                            href="https://www.google.com/maps/dir//Miterra+Coffee,+Görükle+Mah.,+Üniversite-1.+Cad.,+Nilüfer,+Bursa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-6 left-6 flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-lg font-bold shadow-lg hover:bg-primary/90 transition-all z-10"
                        >
                            <span className="material-symbols-outlined">directions</span>
                            <span>Yol Tarifi Al</span>
                        </a>
                    </div>

                    {/* Right Side: Contact Information */}
                    <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                        <div>
                            {/* Section Title */}
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-primary"></span>
                                Bize Ulaşın
                            </h2>

                            {/* Contact Details */}
                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start gap-4 group">
                                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm uppercase tracking-wider text-[#896f61] dark:text-[#a68e82]">
                                            Adres
                                        </h3>
                                        <p className="text-lg">
                                            Uludağ Üniversitesi, Görükle<br />
                                            Cadde No:1, 16000 Bursa
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4 group">
                                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm uppercase tracking-wider text-[#896f61] dark:text-[#a68e82]">
                                            Telefon
                                        </h3>
                                        <p className="text-lg">
                                            <a href="tel:+31201234567" className="hover:text-primary transition-colors">
                                                +31 (20) 123-4567
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4 group">
                                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm uppercase tracking-wider text-[#896f61] dark:text-[#a68e82]">
                                            E-posta
                                        </h3>
                                        <p className="text-lg">
                                            <a href="mailto:hello@miterra.cafe" className="hover:text-primary transition-colors">
                                                hello@miterra.cafe
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Working Hours */}
                                <div className="pt-6 border-t border-[#e6dfdb] dark:border-[#3a2a22]">
                                    <h3 className="font-bold text-sm uppercase tracking-wider text-[#896f61] dark:text-[#a68e82] mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">schedule</span>
                                        Çalışma Saatleri
                                    </h3>
                                    <div className="grid grid-cols-2 gap-y-2 max-w-sm">
                                        {WORKING_HOURS.map((item) => (
                                            <div key={item.days} className="contents">
                                                <p className="font-medium">{item.days}</p>
                                                <p className="text-right">{item.hours}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer: Social & App Links */}
                        <div className="mt-12 pt-8 border-t border-[#e6dfdb] dark:border-[#3a2a22]">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                {/* Social Icons */}
                                <div className="flex items-center gap-4">
                                    <a
                                        href="https://instagram.com/miterra.cafe"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2D1B14] text-white hover:bg-primary transition-all"
                                        aria-label="Instagram"
                                    >
                                        <InstagramIcon />
                                    </a>
                                    <a
                                        href="https://facebook.com/miterra.cafe"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2D1B14] text-white hover:bg-primary transition-all"
                                        aria-label="Facebook"
                                    >
                                        <FacebookIcon />
                                    </a>
                                    <p className="text-sm font-semibold ml-2">@miterra.cafe</p>
                                </div>

                                {/* App Store Badges */}
                                <div className="flex items-center gap-3">
                                    <a
                                        href="https://apps.apple.com/app/miterra-cafe"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-[#181311] text-white px-4 py-2 rounded-lg hover:bg-black transition-colors border border-white/10"
                                    >
                                        <AppleIcon />
                                        <div className="flex flex-col">
                                            <span className="text-[9px] uppercase leading-none opacity-70">Download on the</span>
                                            <span className="text-xs font-bold leading-none">App Store</span>
                                        </div>
                                    </a>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.miterra.cafe"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-[#181311] text-white px-4 py-2 rounded-lg hover:bg-black transition-colors border border-white/10"
                                    >
                                        <PlayStoreIcon />
                                        <div className="flex flex-col">
                                            <span className="text-[9px] uppercase leading-none opacity-70">Get it on</span>
                                            <span className="text-xs font-bold leading-none">Google Play</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
