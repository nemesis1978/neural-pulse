import React, { useMemo, useState, useEffect } from 'react';
import { X, Zap, TrendingUp, AlertTriangle, Brain } from 'lucide-react';
import { generateInsight } from '../services/aiService';

const AIInsightPanel = ({ isOpen, onClose, item }) => {
    const [insightData, setInsightData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen && item) {
            setLoading(true);
            setInsightData(null); // Reset previous data

            // Use mock data immediately if available, then fetch AI
            const mockData = {
                hypeScore: item.hypeScore || Math.floor(Math.random() * 40) + 60,
                tldr: item.tldr || [
                    "Key point one about this news.",
                    "Another important detail to consider.",
                    "Final takeaway for the industry."
                ],
                impact: item.impact || "This development could significantly shift the landscape of AI in the coming months."
            };

            // If item has explicit mock data, use it first but still try to fetch AI for "freshness"
            // For this demo, we'll try to fetch AI and fallback to mock if it fails or takes too long

            generateInsight(item).then(data => {
                if (data) {
                    setInsightData(data);
                } else {
                    setInsightData(mockData);
                }
                setLoading(false);
            }).catch(() => {
                setInsightData(mockData);
                setLoading(false);
            });
        }
    }, [isOpen, item]);

    if (!isOpen || !item) return null;

    const data = insightData || {
        hypeScore: 0,
        tldr: ["Analyzing...", "Analyzing...", "Analyzing..."],
        impact: "Consulting neural networks..."
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            right: isOpen ? 0 : '-100%',
            width: '100%',
            maxWidth: '400px',
            height: '100vh',
            background: 'rgba(10, 10, 12, 0.95)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid var(--glass-border)',
            zIndex: 1000,
            transition: 'right 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            padding: 'var(--spacing-xl)',
            overflowY: 'auto',
            boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
        }}>
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer'
                }}
            >
                <X size={24} />
            </button>

            <div style={{ marginTop: 'var(--spacing-xl)' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(0, 240, 255, 0.1)',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    marginBottom: 'var(--spacing-md)'
                }}>
                    <Brain size={14} /> AI ANALYSIS {loading && "(Thinking...)"}
                </div>

                <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-lg)', lineHeight: '1.3' }}>
                    {item.title}
                </h2>

                {/* Hype Meter */}
                <div className="glass-panel" style={{ padding: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Hype Meter</span>
                        <span style={{ color: 'var(--accent-purple)', fontWeight: '700' }}>{data.hypeScore}/100</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                        <div style={{
                            height: '100%',
                            width: `${data.hypeScore}%`,
                            background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
                            transition: 'width 1s ease-out'
                        }} />
                    </div>
                </div>

                {/* TL;DR */}
                <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>
                        <Zap size={18} color="var(--accent-yellow)" /> TL;DR
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {data.tldr.map((point, idx) => (
                            <li key={idx} style={{
                                display: 'flex',
                                gap: '10px',
                                fontSize: '0.95rem',
                                color: 'var(--text-secondary)',
                                lineHeight: '1.5'
                            }}>
                                <span style={{ color: 'var(--accent-cyan)' }}>•</span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Impact */}
                <div className="glass-panel" style={{
                    padding: 'var(--spacing-md)',
                    background: 'linear-gradient(180deg, rgba(255, 0, 85, 0.05) 0%, rgba(10, 10, 12, 0) 100%)',
                    border: '1px solid rgba(255, 0, 85, 0.2)'
                }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', marginBottom: 'var(--spacing-sm)', color: 'var(--accent-pink)' }}>
                        <TrendingUp size={18} /> Why it Matters
                    </h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                        {data.impact}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AIInsightPanel;
