import React, { useState } from 'react';
import { X, Rss, ExternalLink, Search } from 'lucide-react';
import { rssFeeds } from '../data/rssFeeds';

const SourcesModal = ({ isOpen, onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    if (!isOpen) return null;

    const categories = ['All', ...new Set(rssFeeds.map(feed => feed.category))];

    const filteredFeeds = rssFeeds.filter(feed => {
        const matchesSearch = feed.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || feed.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--spacing-md)'
        }}>
            <div className="glass-panel" style={{
                width: '100%',
                maxWidth: '800px',
                height: '80vh',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}>
                {/* Header */}
                <div style={{
                    padding: 'var(--spacing-lg)',
                    borderBottom: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                            background: 'rgba(0, 240, 255, 0.1)',
                            padding: '10px',
                            borderRadius: '12px',
                            color: 'var(--accent-cyan)'
                        }}>
                            <Rss size={24} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: 1 }}>Intel Sources</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
                                Curated feed of {rssFeeds.length} top AI resources
                            </p>
                        </div>
                    </div>
                    <button onClick={onClose} style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        padding: '8px',
                        borderRadius: '50%',
                        transition: 'background 0.2s'
                    }}>
                        <X size={24} />
                    </button>
                </div>

                {/* Controls */}
                <div style={{
                    padding: 'var(--spacing-md) var(--spacing-lg)',
                    borderBottom: '1px solid var(--glass-border)',
                    display: 'flex',
                    gap: 'var(--spacing-md)',
                    flexWrap: 'wrap'
                }}>
                    <div style={{
                        position: 'relative',
                        flex: 1,
                        minWidth: '200px'
                    }}>
                        <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                        <input
                            type="text"
                            placeholder="Search sources..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)',
                                padding: '10px 10px 10px 40px',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--text-primary)',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    background: activeCategory === cat ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.05)',
                                    color: activeCategory === cat ? '#000' : 'var(--text-secondary)',
                                    border: 'none',
                                    padding: '6px 14px',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: 'var(--spacing-lg)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: 'var(--spacing-md)'
                }}>
                    {filteredFeeds.map((feed, idx) => (
                        <a
                            key={idx}
                            href={feed.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-panel"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 'var(--spacing-md)',
                                borderRadius: 'var(--radius-md)',
                                textDecoration: 'none',
                                transition: 'transform 0.2s, border-color 0.2s',
                                border: '1px solid var(--glass-border)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                            }}
                        >
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '4px' }}>{feed.name}</h4>
                                <span style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--accent-purple)',
                                    background: 'rgba(124, 58, 237, 0.1)',
                                    padding: '2px 6px',
                                    borderRadius: '4px'
                                }}>
                                    {feed.category}
                                </span>
                            </div>
                            <ExternalLink size={16} color="var(--text-secondary)" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SourcesModal;
