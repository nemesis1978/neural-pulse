import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Calendar, ArrowUp } from 'lucide-react';

const storylines = {
    "OpenAI": [
        { date: "Nov 2024", event: "First whispers of 'Project Strawberry' (Q*) leak.", type: "Rumor" },
        { date: "Jan 2025", event: "Sam Altman hints at 'agentic' capabilities in interviews.", type: "Confirmed" },
        { date: "Mar 2025", event: "GPT-4.5 released, underwhelming some users.", type: "Release" },
        { date: "Aug 2025", event: "Internal memos leak regarding 'Orion' model safety tests.", type: "Leak" },
        { date: "Nov 2025", event: "Current: Jony Ive hardware collaboration confirmed.", type: "Major" }
    ],
    "Apple": [
        { date: "Jun 2024", event: "Apple Intelligence announced at WWDC.", type: "Confirmed" },
        { date: "Sep 2024", event: "iPhone 16 launches with limited AI features.", type: "Release" },
        { date: "Feb 2025", event: "Siri 2.0 delayed due to hallucination issues.", type: "Rumor" },
        { date: "Oct 2025", event: "Apple 'Ajax' LLM outperforms GPT-4 on local devices.", type: "Leak" },
        { date: "Nov 2025", event: "Vision Pro 2 rumors heat up.", type: "Rumor" }
    ],
    "Regulation": [
        { date: "Dec 2023", event: "EU AI Act first draft agreed upon.", type: "Confirmed" },
        { date: "Jul 2024", event: "US Executive Order on AI Safety.", type: "Major" },
        { date: "May 2025", event: "Global AI Safety Summit in Tokyo.", type: "Event" },
        { date: "Sep 2025", event: "First major lawsuit against AI copyright infringement settled.", type: "Major" },
        { date: "Nov 2025", event: "Compute Cap Bill passes US Senate.", type: "Current" }
    ]
};

const RumorTimeline = () => {
    const [activeStory, setActiveStory] = React.useState("OpenAI");
    const timelineData = storylines[activeStory];

    return (
        <section style={{ marginBottom: 'var(--spacing-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <GitCommit size={24} color="var(--accent-green)" />
                    <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>Story <span className="text-gradient-accent">Evolution</span></h2>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                    {Object.keys(storylines).map(story => (
                        <button
                            key={story}
                            onClick={() => setActiveStory(story)}
                            style={{
                                background: activeStory === story ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.1)',
                                color: activeStory === story ? '#000' : 'var(--text-secondary)',
                                border: 'none',
                                padding: '4px 12px',
                                borderRadius: 'var(--radius-full)',
                                cursor: 'pointer',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                transition: 'all 0.2s'
                            }}
                        >
                            {story}
                        </button>
                    ))}
                </div>
            </div>

            <div className="glass-panel" style={{
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-lg)',
                position: 'relative',
                minHeight: '400px'
            }}>
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: '50px',
                    top: '40px',
                    bottom: '40px',
                    width: '2px',
                    background: 'var(--glass-border)',
                    zIndex: 0
                }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {timelineData.map((item, idx) => (
                        <motion.div
                            key={`${activeStory}-${idx}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            style={{ display: 'flex', gap: '20px', position: 'relative', zIndex: 1 }}
                        >
                            {/* Dot */}
                            <div style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: idx === timelineData.length - 1 ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                                boxShadow: idx === timelineData.length - 1 ? '0 0 10px var(--accent-cyan)' : 'none',
                                marginTop: '6px',
                                marginLeft: '15px', // Align with line
                                flexShrink: 0
                            }} />

                            <div style={{ flex: 1 }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    marginBottom: '4px'
                                }}>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--accent-purple)',
                                        fontWeight: '700',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px'
                                    }}>
                                        <Calendar size={12} /> {item.date}
                                    </span>
                                    <span style={{
                                        fontSize: '0.7rem',
                                        padding: '2px 8px',
                                        borderRadius: 'var(--radius-full)',
                                        border: '1px solid var(--glass-border)',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {item.type}
                                    </span>
                                </div>
                                <p style={{ fontSize: '1rem', color: idx === timelineData.length - 1 ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                                    {item.event}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{
                    textAlign: 'center',
                    marginTop: 'var(--spacing-lg)',
                    paddingTop: 'var(--spacing-md)',
                    borderTop: '1px solid var(--glass-border)'
                }}>
                    <button style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%' }}>
                        View Full History <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RumorTimeline;
