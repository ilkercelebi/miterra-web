/**
 * Gallery Component - "The Miterra Experience"
 * 
 * Gallery section featuring:
 * - Section heading with subtitle
 * - Filter chips (All Stories, The Craft, Pastries, Interior)
 * - Masonry grid layout with hover effects
 * - Instagram CTA section
 */

import { useState } from 'react';

// Gallery items with their images and metadata
const GALLERY_ITEMS = [
    {
        id: 1,
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA2nZx5H59io4vWSNxmOA-oiSnc2iIdHBChQw0nINNhf3v_CJL4tirRWCZSrL07tNzOvcAIfsqrmQ-9QfcuJ8gv3AVfMdWuiUvQ2W1UTzEM2v2NQuPqpPc7MHrtaeGe6tFyXoRd9JAe1htoVGuhQQxW516nmr6eC3CbW8AlZ4hJ_bsF106AXxZPESJZHiATWbSunqrSeDhAhLQaayqcB-ZFk-sbx6eAnlGHdlzj6C4WAS0e5-IsjH93tsIvF38d1SmLKnkz2fD7x8l',
        alt: 'Close up of detailed latte art in ceramic cup',
        title: 'Signature Roast',
        subtitle: 'Our daily craft',
        category: 'craft',
        size: 'tall', // tall = spans 2 rows
    },
    {
        id: 2,
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGuPE8Q6ZEPDamMARjWNAB1nbtKdR0OOPff8NrV2M91m9LODH2r77UO9jhpiK6hc5hUuEfsat3DTm5WrLfje-yy9KiAKTwVBwoTW0UXQn8I8kKg0pqAlHKnFi_7Q98np7WSVBcUnTYSEJIoKl9U-9k4FaupNYMRJ6hu4Jm7wMT-PxgE7WuiGA_jWxkFvS7CpcaNOoCZEFCnVdFI5bWK1T0h1ZloMQz8EtmH3JOBmL-pDKslyFLyw6WQNHtU_SEd6TkRiRq_lmptvuE',
        alt: 'Wide shot of modern cafe interior with terracotta accents',
        category: 'interior',
        size: 'wide', // wide = spans 2 columns on lg screens
    },
    {
        id: 3,
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC19NrfmEczqy9cXXtVGZMPmAyZi-i2QQ0WHHIgM-J9oqK1ElchPGoD1Brvs7DHFTlAath1LK43m2yG6ZYeyU6BELtRZmZBdrj5csHCEvQj-ovnf2ahV1nNrKdOovyCGbmxhH82sVf6eg4IibMrLQMsL59j-inC9PX-KLEcf4juXdjHm2r5pwV4b1YGH5sVFx5eUo5PSz3N1lxUSDk4wKchpjQVBxPUqXJ6JTzAmWaEP5Y1fa_CO6WC4CGpevOnQQf1GOd69EtjELHu',
        alt: 'Golden freshly baked almond croissant on marble',
        title: 'Fresh Baked',
        category: 'pastries',
        size: 'normal',
    },
    {
        id: 4,
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqtu47LzwO_j48mjZDKSsJURnZnt0zG5bFOA0_FES4WZvwqFukD8GzP7fC22T4EucPkarBW1kliexphbFGNatW0M9dHro6UVV8MKtoWHZh5YAZPzaKHs8BT0uvnqkSL-sLHpikmwcamC6OZOiq8_HC1ZgayorbizJtNlmNwAW0PwXu-Rj-b1witzZFD9OkdrDWcpIPJDfA-XLfZKx0Oyp1ofniw9NE8TxFVTMgECjbsF-Ix3KG6fPgJ6eNBjfM-PKVpqJIdB73Iw5Q',
        alt: 'Minimalist coffee bar corner with warm wood textures',
        category: 'interior',
        size: 'normal',
    },
    {
        id: 5,
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUmOu98QflGuQ7Ancx5JuGYJ3mHip-VTD7YMiLMsJmLCIiBFMrnmYj7JlbEcOYxwjl3Oh881LTpezy74W1iay77MeSaIcbNwlLVqNVZFKxCMEwIXoSuVRQAHXz0qg32q1r1ZRe9BjnBhhBX3qBnlFxySGYNB8jV7AUMFKpfmnGwKMyFOFOFusdJg4PiHQD3N8xugak3yK2Zpgz_4zYn85FhSHSr5hMoedpyZCjkpWuI3e_T9m5swMEiJhDa8AjwfijoUJJPzMIh7ti',
        alt: 'Professional barista preparing manual pour over coffee',
        title: 'Precision',
        subtitle: 'Bean to cup',
        category: 'craft',
        size: 'tall',
    },
    {
        id: 6,
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMZmCqzIcjB6sy7LJK7tJLnLfUMuGgdBqcGtkKalYVjzXN47tcC_IUdxKw63l1ejOrgjsS73rCfIfc92MY5XZoHKH1J_2iJHOtkUgUVH68LukSuGXn8c7fmmet5SRIN-CCMoFavIs-tMzy3gMiKqdRJ1gkPRO42nwqYPP2PoyuTNmE-AAiqGJwWv4hcJu0plqZzpds7HFpSGr39vBvQVKYr-bQxe_y_g49FwrmMeoJurxJGUtxGpJPZFlNv0pIvQhEtpUmCprZ6_QV',
        alt: 'Atmospheric shot of coffee shop front with large windows',
        category: 'interior',
        size: 'wide',
    },
];

// Filter categories
const FILTERS = [
    { id: 'all', label: 'Tümü' },
    { id: 'craft', label: 'Kahve Sanatı' },
    { id: 'pastries', label: 'Lezzetler' },
    { id: 'interior', label: 'Mekan' },
];

function Gallery() {
    const [activeFilter, setActiveFilter] = useState('all');

    // Filter gallery items based on active filter
    const filteredItems = activeFilter === 'all'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter(item => item.category === activeFilter);

    // Get CSS class for masonry item size
    const getSizeClass = (size) => {
        switch (size) {
            case 'tall':
                return 'masonry-item-tall';
            case 'wide':
                return 'masonry-item-wide';
            default:
                return '';
        }
    };

    return (
        <section id="gallery" className="py-12 bg-background-light dark:bg-background-dark">
            <div className="max-w-[1200px] mx-auto px-4 md:px-10">
                {/* Section Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-primary-dark dark:text-white text-[32px] md:text-[42px] font-bold leading-tight tracking-[-0.015em] pb-4">
                        Miterra Deneyimi
                    </h2>
                    <p className="text-primary-dark/70 dark:text-white/70 text-lg font-normal leading-normal max-w-2xl mx-auto">
                        El yapımı kahvelerimiz, taze lezzetlerimiz ve sıcacık mekanımızdan kareler.
                    </p>
                </div>

                {/* Filter Chips */}
                <div className="flex gap-3 pb-8 flex-wrap justify-center">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 transition-all ${activeFilter === filter.id
                                ? 'bg-primary text-white hover:bg-primary/90'
                                : 'bg-white dark:bg-[#3a2a22] text-primary-dark dark:text-white border border-[#f4f2f0] dark:border-transparent hover:border-primary'
                                }`}
                        >
                            <span className={`text-sm leading-normal ${activeFilter === filter.id ? 'font-semibold' : 'font-medium'}`}>
                                {filter.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Masonry Gallery Grid */}
                <div className="masonry-grid w-full">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className={`${getSizeClass(item.size)} group relative overflow-hidden rounded-xl bg-[#e5e5e5]`}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url("${item.src}")` }}
                                role="img"
                                aria-label={item.alt}
                            />

                            {/* Hover Overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex ${item.title ? 'items-end p-6' : 'items-center justify-center'
                                } ${item.size === 'wide' ? 'bg-gradient-to-t from-primary/60 to-transparent' : 'bg-primary/20'}`}>
                                {item.title ? (
                                    <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                                        <p className="font-bold text-lg">{item.title}</p>
                                        {item.subtitle && (
                                            <p className="text-sm opacity-90 italic">{item.subtitle}</p>
                                        )}
                                    </div>
                                ) : item.size === 'wide' ? null : (
                                    <span className="material-symbols-outlined text-white text-4xl scale-50 group-hover:scale-100 transition-transform">
                                        zoom_in
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Instagram CTA */}
                <div className="mt-16 text-center border-t border-[#f4f2f0] dark:border-[#3a2a22] pt-10">
                    <p className="text-primary-dark dark:text-white font-medium mb-4">
                        Sosyal medyadan bizi takip edin
                    </p>
                    <a
                        href="https://instagram.com/miterracoffee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-primary font-bold hover:gap-4 transition-all group"
                    >
                        {/* Instagram Icon */}
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        @miterracoffee
                    </a>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 mt-8">
                        <a
                            href="https://instagram.com/miterracoffee"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                            aria-label="Instagram"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <button
                            onClick={() => navigator.share?.({ url: window.location.href, title: 'Miterra Coffee' })}
                            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                            aria-label="Share"
                        >
                            <span className="material-symbols-outlined">share</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Masonry Grid Styles */}
            <style>{`
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-auto-rows: 200px;
          gap: 1rem;
        }
        .masonry-item-tall {
          grid-row: span 2;
        }
        .masonry-item-wide {
          grid-column: span 1;
        }
        @media (min-width: 1024px) {
          .masonry-item-wide {
            grid-column: span 2;
          }
        }
      `}</style>
        </section>
    );
}

export default Gallery;
