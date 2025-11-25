import React from 'react';

const categories = ['All', 'Rumors', 'Hardware', 'Models', 'Community'];

const FilterBar = ({ activeCategory, setActiveCategory }) => {
    return (
        <div style={{
            display: 'flex',
            gap: 'var(--spacing-sm)',
            overflowX: 'auto',
            paddingBottom: 'var(--spacing-sm)',
            marginBottom: 'var(--spacing-lg)',
            scrollbarWidth: 'none' /* Firefox */
        }}>
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                        padding: '8px 16px',
                        borderRadius: 'var(--radius-full)',
                        background: activeCategory === cat ? 'var(--accent-purple)' : 'var(--glass-bg)',
                        color: activeCategory === cat ? '#fff' : 'var(--text-secondary)',
                        border: activeCategory === cat ? '1px solid var(--accent-purple)' : '1px solid var(--glass-border)',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.3s ease'
                    }}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
