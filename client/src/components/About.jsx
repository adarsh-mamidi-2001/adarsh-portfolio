import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import '../styles/sections.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const About = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    const courses = [
        'Finite Element Method',
        'Vibration & Dynamics',
        'Composite Structures',
        'Experimental Solid Mechanics',
        'Advanced Mechanics of Solids',
    ];

    return (
        <section className="section" id="about" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                >
                    <div className="section-label">About</div>
                    <h2 className="section-title">Research Engineer &<br /><span>Simulation Specialist</span></h2>
                </motion.div>

                <div className="about-content">
                    {/* Left */}
                    <motion.div
                        className="about-left"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <div className="about-image-block">
                            <span className="about-initials-large">MAK</span>
                        </div>

                        <div className="about-meta">
                            <div className="about-meta-item">
                                <span className="meta-icon">🎓</span>
                                <span><strong>IIT Hyderabad</strong> — M.Tech 2026</span>
                            </div>
                            <div className="about-meta-item">
                                <span className="meta-icon">🏛️</span>
                                <span><strong>MVGR College</strong> — B.Tech 2023</span>
                            </div>
                            <div className="about-meta-item">
                                <span className="meta-icon">📍</span>
                                <span>Hyderabad, Telangana, India</span>
                            </div>
                            <div className="about-meta-item">
                                <span className="meta-icon">✉️</span>
                                <span>me24mtech11011@iith.ac.in</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        className="about-right"
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.25 }}
                    >
                        <p className="about-intro">
                            I'm a final-year <strong>M.Tech student at IIT Hyderabad</strong> in Mechanics and Design Engineering,
                            with a deep focus on <strong>computational mechanics</strong> and <strong>finite element analysis</strong>.
                            My research lies at the intersection of multiphysics simulation, material modeling, and thermal engineering —
                            areas where I leverage tools like <strong>COMSOL Multiphysics</strong> and <strong>ABAQUS</strong> to
                            solve complex, real-world engineering problems.
                        </p>

                        <p className="about-intro">
                            Prior to my M.Tech, I gained hands-on industry experience at <strong>Medha Servo Drives</strong>
                            as an R&D Engineer, where I designed traction converter components for Indian Railways locomotives.
                            This industrial grounding, combined with rigorous academic training, enables me to bridge the gap
                            between <strong>simulation-driven research</strong> and real engineering deployment.
                        </p>

                        <p className="about-intro">
                            My current research involves thermo-mechanical wear simulation of carbon-carbon composite brakes
                            and <strong>fractional strain modeling</strong> using ABAQUS UMAT subroutines — pushing boundaries
                            of conventional continuum mechanics. I have published two peer-reviewed papers on
                            <strong> PEM fuel cell</strong> performance in Wiley and Springer journals.
                        </p>

                        <div className="about-highlight-grid">
                            <div className="about-highlight-card glass-card">
                                <div className="about-highlight-number">8.52</div>
                                <div className="about-highlight-label">M.Tech CGPA — IIT Hyderabad</div>
                            </div>
                            <div className="about-highlight-card glass-card">
                                <div className="about-highlight-number">8.56</div>
                                <div className="about-highlight-label">B.Tech CGPA — MVGR</div>
                            </div>
                            <div className="about-highlight-card glass-card">
                                <div className="about-highlight-number">70/100</div>
                                <div className="about-highlight-label">GATE 2025 Score</div>
                            </div>
                            <div className="about-highlight-card glass-card">
                                <div className="about-highlight-number">2</div>
                                <div className="about-highlight-label">Indexed Research Papers</div>
                            </div>
                        </div>

                        <div className="about-courses glass-card">
                            <div className="about-courses-title">Relevant Coursework</div>
                            <div className="about-courses-list">
                                {courses.map((c) => (
                                    <span key={c} className="tag">{c}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;