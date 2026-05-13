import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">MAK — Mamidi Adarsh Kumar</div>
                    <div className="footer-text">
                        © {year} · IIT Hyderabad · Computational Mechanics Engineer
                    </div>
                    <div className="footer-links">
                        <a href="mailto:me24mtech11011@iith.ac.in">Email</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;