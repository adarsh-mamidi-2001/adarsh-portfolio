import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
    {
        icon: '🔥',
        number: '01',
        title: 'Wear & Heat Transfer Analysis of Carbon–Carbon Composite Multi Disc Brake',
        period: 'Aug 2025 – Present',
        description:
            'Conducting comprehensive thermo-mechanical and wear analysis of carbon-carbon composite disc brakes using COMSOL Multiphysics. Simulating behavior under varying loading conditions to evaluate temperature distribution, contact pressure, and wear depth.',
        highlights: [
            'Thermo-mechanical coupling under realistic loading',
            'Composite material modeling & Multiphysics coupling',
            'Temperature distribution and contact pressure analysis',
        ],
        tags: ['COMSOL Multiphysics', 'Thermal Analysis', 'FEA', 'Wear Simulation', 'Composite Modeling'],
    },
    {
        icon: '∂',
        number: '02',
        title: 'Fractional Strain Modeling using Fractional Order Calculus',
        period: 'Mar 2025 – Present',
        description:
            'Developing advanced computational models using fractional-order calculus to investigate non-local deformation behavior in materials. Implemented custom Fortran UMAT subroutines integrated with ABAQUS to simulate fractional strain effects.',
        highlights: [
            'Custom ABAQUS UMAT subroutine development in Fortran',
            'Fractional strain effects in 1D and 2D elements',
            'Damage evolution under fractional derivatives',
        ],
        tags: ['ABAQUS', 'Fortran', 'UMAT', 'Continuum Mechanics', 'Fractional Calculus'],
    },
    {
        icon: '⚡',
        number: '03',
        title: 'Thermal–Electrical Analysis of a Power Transistor Package',
        period: 'Academic Project',
        description:
            'Performed coupled thermal-electrical simulation of a power transistor package mounted on FR4 PCB to evaluate Joule heating and thermal safety margins under operating conditions.',
        highlights: [
            'Joule heating simulation & current conduction analysis',
            'Heat spreading analysis across PCB layers',
            'Safe operating temperature verification (~81°C)',
        ],
        tags: ['COMSOL Multiphysics', 'FEA', 'Thermal Analysis', 'Joule Heating'],
    },
    {
        icon: '⚗️',
        number: '04',
        title: 'Performance Investigation of PEM Fuel Cells',
        period: 'Dec 2022 – Apr 2023',
        description:
            'Designed and fabricated PEM fuel cell prototypes to experimentally evaluate the impact of different flow channel designs (serpentine and divergent parallel) on cell performance. Resulted in two peer-reviewed publications.',
        highlights: [
            'Fabricated prototypes with serpentine & divergent parallel channels',
            'Polarization curve experiments with varying parameters',
            'Published in Wiley & Springer indexed journals',
        ],
        tags: ['PEM Fuel Cells', 'Experimental Testing', 'AutoCAD', 'Flow Channel Design'],
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] },
    }),
};

const Projects = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="section" id="projects" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">Projects</div>
                    <h2 className="section-title">Featured <span>Research & Engineering</span> Work</h2>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((proj, i) => (
                        <motion.div
                            key={i}
                            className="project-card glass-card"
                            variants={cardVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            custom={i}
                            whileHover={{ y: -6 }}
                        >
                            <div className="project-card-image">
                                <span className="project-card-icon">{proj.icon}</span>
                            </div>
                            <div className="project-card-body">
                                <div className="project-card-number">{proj.number} — {proj.period}</div>
                                <h3 className="project-card-title">{proj.title}</h3>
                                <p className="project-card-desc">{proj.description}</p>
                                <ul className="project-card-highlights">
                                    {proj.highlights.map((h, j) => (
                                        <li key={j}>{h}</li>
                                    ))}
                                </ul>
                                <div className="project-card-tags">
                                    {proj.tags.map((t) => (
                                        <span key={t} className="tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;