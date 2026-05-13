import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ==========================================
   PUBLICATIONS
   ========================================== */

const publications = [
    {
        number: '01',
        title: 'Performance analysis of proton exchange membrane fuel cells with various serpentine flow channel designs',
        publisher: 'Wiley',
        date: 'Apr 21, 2025',
        doi: 'https://doi.org/10.1002/ep.14627',
    },
    {
        number: '02',
        title: 'Experimental evaluation of divergent parallel flow field effect on proton exchange membrane fuel cell performance',
        publisher: 'Springer',
        date: 'Jan 29, 2025',
        doi: 'https://doi.org/10.1007/s11581-025-06108-4',
    },
];

export const Publications = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="section" ref={ref} id="publications" style={{ background: 'linear-gradient(180deg, var(--bg-secondary), var(--bg-primary))' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">Publications</div>
                    <h2 className="section-title">Peer-Reviewed <span>Research Papers</span></h2>
                </motion.div>

                <div className="publications-list">
                    {publications.map((pub, i) => (
                        <motion.div
                            key={i}
                            className="publication-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            <div className="publication-number">{pub.number}</div>
                            <div className="publication-body">
                                <h3 className="publication-title">{pub.title}</h3>
                                <div className="publication-meta">
                                    <span className="publication-publisher">{pub.publisher}</span>
                                    <span className="publication-date">{pub.date}</span>
                                    <a
                                        href={pub.doi}
                                        className="publication-doi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        DOI ↗
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ==========================================
   SKILLS
   ========================================== */

const skillCategories = [
    {
        icon: '🔬',
        title: 'Simulation & Analysis',
        skills: [
            { name: 'COMSOL Multiphysics', level: 5 },
            { name: 'ABAQUS CAE', level: 5 },
            { name: 'ANSYS Workbench', level: 4 },
            { name: 'FEA', level: 5 },
            { name: 'Thermal Analysis', level: 5 },
        ],
    },
    {
        icon: '🖥️',
        title: 'CAD & Design',
        skills: [
            { name: 'SolidWorks', level: 5 },
            { name: 'Solid Edge', level: 4 },
            { name: 'CATIA', level: 4 },
            { name: 'AutoCAD', level: 4 },
        ],
    },
    {
        icon: '💻',
        title: 'Programming',
        skills: [
            { name: 'Python', level: 4 },
            { name: 'MATLAB', level: 4 },
            { name: 'Fortran (UMAT)', level: 4 },
            { name: 'C Language', level: 3 },
        ],
    },
    {
        icon: '⚙️',
        title: 'Engineering Domains',
        skills: [
            { name: 'Continuum Mechanics', level: 5 },
            { name: 'Composite Materials', level: 4 },
            { name: 'Thermodynamics', level: 5 },
            { name: 'Vibration & Dynamics', level: 4 },
        ],
    },
];

export const Skills = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="section" ref={ref} id="skills">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">Skills</div>
                    <h2 className="section-title">Technical <span>Expertise</span></h2>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            className="skill-category-card glass-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <span className="skill-category-icon">{cat.icon}</span>
                            <div className="skill-category-title">{cat.title}</div>
                            <div className="skill-items">
                                {cat.skills.map((skill) => (
                                    <div key={skill.name} className="skill-item">
                                        <span className="skill-name">{skill.name}</span>
                                        <div className="skill-dots">
                                            {Array.from({ length: 5 }, (_, j) => (
                                                <div
                                                    key={j}
                                                    className={`skill-dot ${j < skill.level ? 'active' : ''}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ==========================================
   ACHIEVEMENTS
   ========================================== */

const achievements = [
    {
        icon: '🏆',
        value: 'AIR 1008',
        label: 'GATE 2025',
        sub: 'Score: 70/100',
    },
    {
        icon: '🎯',
        value: '4×',
        label: 'GATE Qualified',
        sub: '2022 · 2023 · 2024 · 2025',
    },
    {
        icon: '🏛️',
        value: 'IIT-H',
        label: 'M.Tech Enrolled',
        sub: 'CGPA: 8.52',
    },
    {
        icon: '📄',
        value: '2',
        label: 'Research Papers',
        sub: 'Wiley & Springer indexed',
    },
    {
        icon: '🥈',
        value: 'Elite+',
        label: 'NPTEL Silver Medal',
        sub: 'Laws of Thermodynamics',
    },
    {
        icon: '🔧',
        value: '1 Yr',
        label: 'Industry R&D',
        sub: 'Medha Servo Drives',
    },
];

export const Achievements = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="section" ref={ref} id="achievements" style={{ background: 'linear-gradient(180deg, var(--bg-primary), var(--bg-secondary))' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">Achievements</div>
                    <h2 className="section-title">Milestones & <span>Recognition</span></h2>
                </motion.div>

                <div className="achievements-grid">
                    {achievements.map((a, i) => (
                        <motion.div
                            key={i}
                            className="achievement-card glass-card"
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.55, delay: i * 0.08 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                        >
                            <span className="achievement-icon">{a.icon}</span>
                            <div className="achievement-value">{a.value}</div>
                            <div className="achievement-label">{a.label}</div>
                            <div className="achievement-sub">{a.sub}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};