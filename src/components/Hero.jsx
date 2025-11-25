import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = ({ item }) => {
    if (!item) return null;

    return (
        <section style={{ marginBottom: 'var(--spacing-xl)', position: 'relative' }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                zIndex: -1
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(2px) brightness(0.4)',
                    transform: 'scale(1.1)'
                }} />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to right, rgba(10, 10, 12, 0.9) 0%, rgba(10, 10, 12, 0.6) 100%)'
                }} />
            </div>

            <div className="glass-panel" style={{
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(0, 243, 255, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                background: 'transparent' // Allow background image to show through slightly
            }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        key={item.id} // Re-animate on new item
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span style={{
                            color: 'var(--accent-cyan)',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: 'var(--spacing-sm)'
                        }}>
                            <Zap size={16} fill="currentColor" /> Trending Now
                        </span>

                        <h1 style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: '800',
                            lineHeight: '1.1',
                            marginBottom: 'var(--spacing-md)',
                            background: 'linear-gradient(to right, #fff, #a0a0b0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            maxWidth: '800px'
                        }}>
                            {item.title}
                        </h1>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '600px',
                            marginBottom: 'var(--spacing-lg)',
                            lineHeight: '1.6'
                        }}>
                            {item.summary}
                        </p>

                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                background: 'var(--accent-cyan)',
                                color: '#000',
                                padding: '12px 32px',
                                borderRadius: 'var(--radius-full)',
                                fontWeight: '700',
                                fontSize: '1rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                transition: 'transform 0.2s',
                                textDecoration: 'none',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            Read Full Story <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
