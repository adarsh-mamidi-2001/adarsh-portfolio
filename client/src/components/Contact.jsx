import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => setSubmitted(true), 400);
    };

    return (
        <section className="section" id="contact" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">Contact</div>
                    <h2 className="section-title">Let's <span>Connect</span></h2>
                </motion.div>

                <div className="contact-content">
                    {/* Left */}
                    <motion.div
                        className="contact-left"
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.65, delay: 0.1 }}
                    >
                        <h3 className="contact-info-title">
                            Open to Research Collaborations &<br />
                            <span>Engineering Opportunities</span>
                        </h3>
                        <p className="contact-info-text">
                            Whether you're looking for a computational mechanics engineer, a research collaborator,
                            or want to discuss simulation-driven engineering — I'd love to hear from you.
                        </p>

                        <div className="contact-links">
                            <a href="mailto:me24mtech11011@iith.ac.in" className="contact-link">
                                <span className="contact-link-icon">✉️</span>
                                <div className="contact-link-info">
                                    <div className="contact-link-label">Email</div>
                                    <div className="contact-link-value">me24mtech11011@iith.ac.in</div>
                                </div>
                                <span className="contact-link-arrow">→</span>
                            </a>
                            <a href="tel:+918247500991" className="contact-link">
                                <span className="contact-link-icon">📱</span>
                                <div className="contact-link-info">
                                    <div className="contact-link-label">Phone</div>
                                    <div className="contact-link-value">+91 82475 00991</div>
                                </div>
                                <span className="contact-link-arrow">→</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span className="contact-link-icon">🔗</span>
                                <div className="contact-link-info">
                                    <div className="contact-link-label">LinkedIn</div>
                                    <div className="contact-link-value">linkedin.com/in/adarsh-kumar</div>
                                </div>
                                <span className="contact-link-arrow">→</span>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span className="contact-link-icon">🐙</span>
                                <div className="contact-link-info">
                                    <div className="contact-link-label">GitHub</div>
                                    <div className="contact-link-value">github.com/adarsh-kumar</div>
                                </div>
                                <span className="contact-link-arrow">→</span>
                            </a>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '8px' }}>
                                ↓ Download Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.65, delay: 0.2 }}
                    >
                        {submitted ? (
                            <div className="form-success">
                                ✓ Message sent! I'll get back to you within 24 hours.
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-input"
                                            placeholder="Your name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-input"
                                            placeholder="your@email.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-input"
                                        placeholder="Research collaboration / Job opportunity / etc."
                                        value={form.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Message</label>
                                    <textarea
                                        name="message"
                                        className="form-textarea"
                                        placeholder="Tell me about your project, opportunity, or question..."
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="form-submit">
                                    Send Message →
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;