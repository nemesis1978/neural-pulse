import React from 'react';
import { ExternalLink, Clock, Eye, ShieldCheck, ShieldAlert, ShieldQuestion } from 'lucide-react';
import { motion } from 'framer-motion';

const ReliabilityBadge = ({ level }) => {
    let color = 'var(--text-secondary)';
    let icon = <ShieldQuestion size={14} />;
    let bg = 'rgba(255, 255, 255, 0.1)';

    if (level === 'Confirmed' || level === 'Official Statement' || level === 'High Confidence') {
        color = 'var(--accent-green)';
        icon = <ShieldCheck size={14} />;
        bg = 'rgba(0, 255, 157, 0.1)';
    } else if (level === 'Rumor' || level === 'Unverified') {
        color = 'var(--accent-yellow)';
        icon = <ShieldAlert size={14} />;
        bg = 'rgba(255, 215, 0, 0.1)';
    }

    return (
        <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 8px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: bg,
            color: color,
            fontSize: '0.75rem',
            fontWeight: '600',
            border: `1px solid ${color}40`
        }}>
            {icon} {level}
        </span>
    );
};

const NewsCard = ({ item }) => {
    return (
        <motion.a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel"
            whileHover={{ y: -5, boxShadow: '0 12px 40px 0 rgba(0, 243, 255, 0.15)' }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 'var(--spacing-md)',
                borderRadius: 'var(--radius-md)',
                transition: 'border-color 0.3s',
                border: '1px solid var(--glass-border)',
                height: '100%',
                textDecoration: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-cyan)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--glass-border)'}
        >
            {/* Image Preview */}
            <div style={{
                height: '160px',
                width: '100%',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                marginBottom: 'var(--spacing-md)',
                position: 'relative'
            }}>
                <img
                    src={item.image}
                    alt={item.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    zIndex: 1
                }}>
                    <ReliabilityBadge level={item.reliability} />
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-sm)' }}>
                <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent-purple)',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    {item.category}
                </span>
            </div>

            <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: 'var(--spacing-sm)',
                lineHeight: '1.4',
                color: 'var(--text-primary)'
            }}>
                {item.title}
            </h3>

            <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--spacing-md)',
                flexGrow: 1,
                lineHeight: '1.6'
            }}>
                {item.summary}
            </p>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid var(--glass-border)',
                paddingTop: 'var(--spacing-sm)',
                marginTop: 'auto',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)'
            }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={14} /> {item.readTime}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Eye size={14} /> {item.views}
                    </span>
                </div>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-cyan)' }}>
                    Read Source <ExternalLink size={14} />
                </span>
            </div>
        </motion.a>
    );
};

export default NewsCard;
