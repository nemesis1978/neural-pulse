import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import Logo from './Logo';
import SourcesModal from './SourcesModal';
import '../index.css';

const Layout = ({ children, activeCategory, setActiveCategory }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSourcesOpen, setIsSourcesOpen] = useState(false);

    const navItems = ['All', 'Rumors', 'Hardware', 'Models', 'Community'];

    const handleNavClick = (category) => {
        if (setActiveCategory) {
            setActiveCategory(category);
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="app-container">
            <header className="glass-panel" style={{
                position: 'sticky',
                top: 0,
                zIndex: 100,
                borderRadius: '0 0 var(--radius-md) var(--radius-md)',
                marginBottom: 'var(--spacing-lg)'
            }}>
                <div className="container" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    {/* Logo */}
                    <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }} onClick={() => handleNavClick('All')}>
                        <Logo size={32} />
                        <span style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
                            Neural<span className="text-gradient-accent">Pulse</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="desktop-nav" style={{ display: 'none', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
                        {navItems.map(item => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item)}
                                style={{
                                    color: activeCategory === item ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                                    fontWeight: activeCategory === item ? '700' : '500',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    transition: 'color 0.2s'
                                }}
                            >
                                {item === 'All' ? 'Home' : item}
                            </button>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                        <button style={{ padding: '8px', borderRadius: '50%', color: 'var(--text-primary)' }}>
                            <Search size={20} />
                        </button>
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{ color: 'var(--text-primary)' }}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="glass-panel" style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        padding: 'var(--spacing-md)',
                        borderTop: '1px solid var(--glass-border)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--spacing-md)'
                    }}>
                        {navItems.map(item => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item)}
                                style={{
                                    fontSize: '1.2rem',
                                    fontWeight: activeCategory === item ? '700' : '500',
                                    color: activeCategory === item ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                                    background: 'none',
                                    border: 'none',
                                    textAlign: 'left',
                                    cursor: 'pointer'
                                }}
                            >
                                {item === 'All' ? 'Home' : item}
                            </button>
                        ))}
                    </div>
                )}
            </header>

            <main className="container" style={{ paddingBottom: 'var(--spacing-xl)' }}>
                {children}
            </main>

            <footer style={{
                borderTop: '1px solid var(--glass-border)',
                padding: 'var(--spacing-xl) 0',
                marginTop: 'auto',
                textAlign: 'center',
                color: 'var(--text-secondary)'
            }}>
                <div className="container">
                    <p>&copy; 2025 NeuralPulse AI. The Future is Now.</p>
                </div>
            </footer>

            <SourcesModal isOpen={isSourcesOpen} onClose={() => setIsSourcesOpen(false)} />

            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
        </div>
    );
};

export default Layout;
