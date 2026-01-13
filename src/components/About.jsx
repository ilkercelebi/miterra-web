/**
 * About Component - "Hikayemiz" (Our Story)
 * 
 * About section featuring:
 * - 2x2 image gallery on the left (staggered layout)
 * - Section title "Hikayemiz" with Turkish content
 * - Values grid with 4 cards (Doğal İçerikler, Sıcak Atmosfer, Taze Kavrulmuş, Topluluk Odaklı)
 * - CTA buttons (Daha Fazla Bilgi, Bize Ulaşın)
 */

// Gallery images for the About section
const GALLERY_IMAGES = [
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkW2REJcHgHDg5hYo51_Nagy1x_E6fBTc-6h4f0-fbXknzsWueNRtJUwwAzmQYB7_ESgzqExuvhw2yd26iwsv0o09UFV-hjGDiH1ldHJ7EsuQO5dgXOrORaoEMUIxKLFbtJrsjaOnbxUomFCX2Jju3-DlQpNHqcliIMhwjcVEh7w2Wu_Z3b9S5fZHbmTjaGjzuhfvESapJL-VrHPRYzSH88VUcICCn7Y6LaoqDDhRrMqGVQeVV_w-CHKJ9pbTl6DubRPs_P8lazYfN',
        alt: 'Modern cafe interior with wooden tables and plants',
        aspect: 'aspect-[3/4]',
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3BTwPLw1XVTNxCeEStpKPYpfvrLIKTptnkCwOJsEGEYUBZX_dAqeRxCaJnt4gKrW5zbg9wm-NRHn6_soqNQ81vfNHuPZ-aWD-JcSYx6fSnX5RrvZOpa-tTE7knzKNDZHA0xg72LxkUfQsHCbziO0FoA3V3XSYc8IQ-0z3BTTl1TCD_TeF2w5g2E3oB6G_nyGPv2p2ZOS7qvS7ZG37hWP-5iikvVfZrb9Uz6XNr01U58CL2n5PTAu25c-kHnBFWrETXkyvavSkJjfW',
        alt: 'Freshly roasted organic coffee beans in a bag',
        aspect: 'aspect-square',
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJezEat5wGusfvsZKOi_-8xpho_lBoTdkujXVzfWeZZjgOcB5CVssH9hQHR_o4CZlozpywhjQb2zD30KetMOykskftXZeNYxD6B972ujReAfV2nXOj-ZyNUPst_DnQquSpt-8YlaeMesorInHPwLJWVAxeLkUKOmhaoHO8lab2-Uf-zZXKkK8QxKji98jxCH3iJiAJSwwcGID-ovUOj0HNSyioRbA4C4riTzUD0bxTxEzTvQkLJ7lWWEuVM-GLsPCpUBvs37-s4wHW',
        alt: 'Smiling barista preparing a latte coffee',
        aspect: 'aspect-square',
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlwRrzw2zGDbhWFB29lafjSbmTcNk-D8hekjm6HpsAkMKTElUGrRrkkCZ_KY3wdT2ahFxKVpVZx2g_c_c91LeIQ3b_DQIAK2ZLZZ4eGnpyk6Ty9R2fWsuwFsY680MtjL7dBL5nvcn4NLOZvSdsAtd4hy1ssMyerDqZrtjAUFJrfn77ykiI5ogUNQgNZw_qAXNjKo_4NjycCQNKnNCmVDAVlj8GqI69enUwCcIdNLs119v-fLCGaMcAGtSLz9loOwNDmFEscjt6rznX',
        alt: 'Customer enjoying coffee in a sunlit corner',
        aspect: 'aspect-[3/4]',
    },
];

// Values/features data
const VALUES = [
    {
        icon: 'energy_savings_leaf',
        title: 'Doğal İçerikler',
        description: 'En saf ve organik malzemeleri yerel üreticilerden özenle seçiyoruz.',
    },
    {
        icon: 'chair',
        title: 'Sıcak Atmosfer',
        description: 'Evinizdeki konforu aratmayacak, huzurlu bir ortam sunuyoruz.',
    },
    {
        icon: 'coffee',
        title: 'Taze Kavrulmuş',
        description: 'Kahve çekirdeklerimizi zanaatkar yöntemlerle günlük olarak kavuruyoruz.',
    },
    {
        icon: 'handshake',
        title: 'Topluluk Odaklı',
        description: 'Yerel topluluğumuzu destekliyor ve bağlarımızı güçlendiriyoruz.',
    },
];

function About() {
    // Smooth scroll for buttons
    const handleScrollClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="about" className="py-12 lg:py-24 px-4 lg:px-10">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left: Visual Gallery - Staggered 2x2 Grid */}
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                        {/* First Column */}
                        <div className="flex flex-col gap-4">
                            <div
                                className="w-full aspect-[3/4] bg-center bg-no-repeat bg-cover rounded-xl shadow-lg"
                                style={{ backgroundImage: `url("${GALLERY_IMAGES[0].src}")` }}
                                role="img"
                                aria-label={GALLERY_IMAGES[0].alt}
                            />
                            <div
                                className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-xl shadow-lg"
                                style={{ backgroundImage: `url("${GALLERY_IMAGES[1].src}")` }}
                                role="img"
                                aria-label={GALLERY_IMAGES[1].alt}
                            />
                        </div>

                        {/* Second Column - Offset for staggered effect */}
                        <div className="flex flex-col gap-4 pt-8">
                            <div
                                className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-xl shadow-lg"
                                style={{ backgroundImage: `url("${GALLERY_IMAGES[2].src}")` }}
                                role="img"
                                aria-label={GALLERY_IMAGES[2].alt}
                            />
                            <div
                                className="w-full aspect-[3/4] bg-center bg-no-repeat bg-cover rounded-xl shadow-lg"
                                style={{ backgroundImage: `url("${GALLERY_IMAGES[3].src}")` }}
                                role="img"
                                aria-label={GALLERY_IMAGES[3].alt}
                            />
                        </div>
                    </div>

                    {/* Right: Content & Values */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        {/* Section Header */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-primary font-bold uppercase tracking-widest text-sm">
                                Biz Kimiz?
                            </h3>
                            <h1 className="text-primary-dark dark:text-white text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                                Hikayemiz
                            </h1>
                            <p className="text-lg text-[#5a4a42] dark:text-gray-300 leading-relaxed max-w-[540px]">
                                Miterra'nın hikayesi, doğaya olan tutkumuz ve en taze malzemeleri sizinle buluşturma arzumuzla başladı. Toprağın bereketine olan inancımızla, her fincanda bir hikaye anlatıyoruz.
                            </p>
                            <p className="text-base text-[#896f61] dark:text-gray-400 leading-relaxed max-w-[540px]">
                                Küçük bir mahalle kafesi olarak yola çıktığımızda tek bir amacımız vardı: İnsanların kendilerini evinde hissedeceği, organik köklerimize sadık kalarak hazırlanan lezzetlerin paylaşıldığı samimi bir alan yaratmak. Bugün, aynı tutkuyla her sabah kapılarımızı açıyoruz.
                            </p>
                        </div>

                        {/* Values Grid - 2x2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {VALUES.map((value) => (
                                <div
                                    key={value.title}
                                    className="flex gap-4 p-5 rounded-xl border border-[#e6dfdb] dark:border-[#3d2b21] bg-white/50 dark:bg-white/5 backdrop-blur-sm"
                                >
                                    {/* Icon */}
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                                        <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                                    </div>
                                    {/* Text */}
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-base font-bold">{value.title}</h2>
                                        <p className="text-xs text-[#896f61] dark:text-gray-400">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-4 flex flex-wrap gap-4">
                            <button
                                onClick={(e) => handleScrollClick(e, '#contact')}
                                className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:shadow-lg transition-all"
                            >
                                <span className="truncate">Daha Fazla Bilgi</span>
                            </button>
                            <button
                                onClick={(e) => handleScrollClick(e, '#contact')}
                                className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border border-primary text-primary text-base font-bold hover:bg-primary/5 transition-all"
                            >
                                <span className="truncate">Bize Ulaşın</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
