import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
    {
        company: 'Medha Servo Drives Pvt. Ltd.',
        role: 'Engineer - R&D',
        period: 'July 2023 - June 2024',
        location: 'Hyderabad',
        points: [
            'Designed and developed components for traction converters used in Indian Railways locomotives.',
            'Understood electrical layouts and created detailed 3D CAD models and engineering drawings using Solid Edge and SolidWorks.',
            'Collaborated with cross-functional teams for mechanical assembly, electrical layout, prototyping, and testing.',
        ],
        tags: ['Solid Edge', 'SolidWorks', 'Mechanical Design', 'Drafting', 'Assembly Design', 'R&D'],
    },
    {
        company: 'IIT Hyderabad',
        role: 'Teaching Assistant — Mechanics of Materials',
        period: '2024 – 2025',
        location: 'Hyderabad',
        points: [
            'Conducted tutorial sessions for undergraduate students enrolled in Mechanics of Materials at IIT Hyderabad.',
            'Responsible for invigilation, evaluation of answer scripts, and maintaining academic integrity.',
            'Demonstrated experimental setups and facilitated hands-on learning during lab sessions.',
        ],
        tags: ['Mechanics of Materials', 'Tutorial Instruction', 'Evaluation', 'Experiments'],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

const Experience = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="section" id="experience" ref={ref} style={{ background: 'linear-gradient(180deg, var(--bg-primary), var(--bg-secondary))' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">Experience</div>
                    <h2 className="section-title">Industry & <span>Academic</span> Journey</h2>
                </motion.div>

                <motion.div
                    className="timeline"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {experiences.map((exp, i) => (
                        <motion.div key={i} className="timeline-item" variants={itemVariants}>
                            <div className="timeline-dot" aria-hidden="true" />
                            <div className="timeline-card glass-card">
                                <div className="timeline-header">
                                    <span className="timeline-company">{exp.company}</span>
                                    <span className="timeline-period">{exp.period}</span>
                                </div>
                                <div className="timeline-role">{exp.role} · {exp.location}</div>
                                <ul className="timeline-list">
                                    {exp.points.map((p, j) => (
                                        <li key={j}>{p}</li>
                                    ))}
                                </ul>
                                <div className="timeline-tags">
                                    {exp.tags.map((t) => (
                                        <span key={t} className="tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;