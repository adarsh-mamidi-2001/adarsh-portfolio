import React from 'react';
import { motion } from 'framer-motion';
import '../styles/hero.css';
import profileImage from '../assets/profile.jpg';
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
    }),
};

const Hero = () => {
    const handleScroll = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="hero">
            {/* Background effects */}
            <div className="hero-grid-bg" aria-hidden="true" />
            <div className="hero-glow-1" aria-hidden="true" />
            <div className="hero-glow-2" aria-hidden="true" />

            <div className="container">
                <div className="hero-content">
                    {/* LEFT */}
                    <motion.div className="hero-left" initial="hidden" animate="visible">
                        <motion.div variants={fadeUp} custom={0.1}>
                            <div className="hero-badge">
                                <span className="badge-dot"></span>
                                IIT Hyderabad — M.Tech 2026
                            </div>
                        </motion.div>

                        <motion.h1 className="hero-name" variants={fadeUp} custom={0.2}>
                            Mamidi
                            <span className="name-highlight">Adarsh Kumar</span>
                        </motion.h1>

                        <motion.div className="hero-role" variants={fadeUp} custom={0.3}>
                            <span>Simulation Engineer</span>
                            <span className="role-sep"></span>
                            <span>Power & Thermal Systems</span>
                            <span className="role-sep"></span>
                            <span>CAE Analysis</span>
                        </motion.div>

                        <motion.p className="hero-tagline" variants={fadeUp} custom={0.4}>
                            Building simulation-driven engineering solutions across power electronics, thermal systems, structural analysis,
                            and advanced CAE using COMSOL, ABAQUS, MATLAB, and engineering-first problem solving.
                        </motion.p>

                        <motion.div className="hero-stats" variants={fadeUp} custom={0.5}>
                            <div className="hero-stat">
                                <span className="hero-stat-number">AIR</span>
                                <span className="hero-stat-number" style={{ fontSize: '22px' }}>1008</span>
                                <span className="hero-stat-label">GATE 2025</span>
                            </div>
                            <div className="hero-stat">
                                <span className="hero-stat-number">4×</span>
                                <span className="hero-stat-label">GATE Qualified</span>
                            </div>
                            <div className="hero-stat">
                                <span className="hero-stat-number">2</span>
                                <span className="hero-stat-label">Research Papers</span>
                            </div>
                            <div className="hero-stat">
                                <span className="hero-stat-number">9.00</span>
                                <span className="hero-stat-label">M.Tech CGPA</span>
                            </div>
                        </motion.div>

                        <motion.div className="hero-actions" variants={fadeUp} custom={0.6}>
                            <button
                                className="btn-primary"
                                onClick={() => handleScroll('#projects')}
                            >
                                View Projects →
                            </button>
                            <a
                                href="/resume.pdf"
                                className="btn-outline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ↓ Download Resume
                            </a>
                            <button
                                className="btn-outline"
                                onClick={() => handleScroll('#contact')}
                            >
                                Contact
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT — visual */}
                    <motion.div
                        className="hero-right"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="hero-image-container">
                            <div className="hero-image-outer-ring" aria-hidden="true" />
                            <div className="hero-image-mid-ring" aria-hidden="true" />
                            <div className="hero-image-bg-glow" aria-hidden="true" />

                            <div className="hero-image-frame">
                                <img
                                    src={profileImage}
                                    alt="Mamidi Adarsh Kumar"
                                    className="hero-profile-image"
                                />
                            </div>

                            {/* Floating tech tags 
                            <div className="hero-floating-tag hero-floating-tag-1">COMSOL Multiphysics</div>
                            <div className="hero-floating-tag hero-floating-tag-2">ABAQUS FEA</div>
                            <div className="hero-floating-tag hero-floating-tag-3">Thermal Analysis</div>
                            <div className="hero-floating-tag hero-floating-tag-4">GATE AIR 1008</div>
                            */}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero-scroll-indicator" aria-hidden="true">
                <span className="hero-scroll-text">Scroll</span>
                <div className="hero-scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;