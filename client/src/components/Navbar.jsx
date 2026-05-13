import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/navbar.css';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.nav
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
                <a href="#hero" className="navbar-logo" onClick={(e) => handleLinkClick(e, '#hero')}>
                    <span className="logo-dot"></span>
                    MAK
                </a>

                <ul className="navbar-links">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/resume.pdf"
                            className="navbar-cta"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume ↗
                        </a>
                    </li>
                </ul>

                <button
                    className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </motion.nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="navbar-mobile"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                    >
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                                {link.label}
                            </a>
                        ))}
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)' }}>
                            Download Resume ↗
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;