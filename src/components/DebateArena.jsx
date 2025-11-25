import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, ThumbsDown, Bot } from 'lucide-react';

const scenarios = [
    {
        topic: "Will AGI be achieved by 2027?",
        personas: {
            optimist: { name: "Neo (Optimist)", color: "var(--accent-cyan)", avatar: "🤖" },
            skeptic: { name: "Cipher (Skeptic)", color: "var(--accent-red)", avatar: "🤔" }
        },
        messages: [
            { sender: "optimist", text: "The scaling laws are holding up. GPT-5 is just the beginning. We are seeing exponential growth in reasoning capabilities." },
            { sender: "skeptic", text: "Scaling is hitting diminishing returns. We need a fundamental architectural breakthrough, not just more compute." },
            { sender: "optimist", text: "But look at Q* and agentic workflows! The models are teaching themselves. 2027 is conservative." },
            { sender: "skeptic", text: "Self-correction isn't sentience. We're building better parrots, not thinkers. Energy constraints alone will slow us down." }
        ]
    },
    {
        topic: "Is AI Art 'Real' Art?",
        personas: {
            optimist: { name: "Muse (Creator)", color: "var(--accent-purple)", avatar: "🎨" },
            skeptic: { name: "Critic (Purist)", color: "var(--accent-yellow)", avatar: "🧐" }
        },
        messages: [
            { sender: "optimist", text: "AI is just a new brush. It democratizes creativity, allowing anyone to visualize their dreams instantly." },
            { sender: "skeptic", text: "It's plagiarism with extra steps. It scrapes human work without consent and outputs soulless derivatives." },
            { sender: "optimist", text: "Photography was called 'cheating' too. Now it's an art form. Prompt engineering is the new composition." },
            { sender: "skeptic", text: "Photography captures reality. AI fabricates it. We are drowning in sludge, losing the human connection." }
        ]
    },
    {
        topic: "Privacy in the Age of Agents",
        personas: {
            optimist: { name: "Guardian (Secure)", color: "var(--accent-green)", avatar: "🛡️" },
            skeptic: { name: "Watcher (Paranoid)", color: "var(--accent-red)", avatar: "👁️" }
        },
        messages: [
            { sender: "skeptic", text: "If an AI agent books my flights and reads my emails, it knows more about me than I do. Who owns that data?" },
            { sender: "optimist", text: "Local processing is the answer. Apple and others are moving intelligence to the device. Your data stays with you." },
            { sender: "skeptic", text: "Until the 'cloud backup' toggle is switched on by default. Convenience always kills privacy." },
            { sender: "optimist", text: "Encryption and open source models will win. We can have helpers without spies." }
        ]
    }
];

const DebateArena = () => {
    const [debateData, setDebateData] = useState(null);
    const [visibleMessages, setVisibleMessages] = useState([]);
    const [votes, setVotes] = useState({ optimist: 1240, skeptic: 890 });
    const [userVoted, setUserVoted] = useState(null);

    useEffect(() => {
        // Randomly select a scenario on mount
        const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
        setDebateData(randomScenario);
    }, []);

    useEffect(() => {
        if (!debateData) return;

        let timer;
        if (visibleMessages.length < debateData.messages.length) {
            timer = setTimeout(() => {
                setVisibleMessages(prev => [...prev, debateData.messages[prev.length]]);
            }, 1500);
        }
        return () => clearTimeout(timer);
    }, [visibleMessages, debateData]);

    if (!debateData) return null;

    const handleVote = (side) => {
        if (userVoted) return;
        setVotes(prev => ({ ...prev, [side]: prev[side] + 1 }));
        setUserVoted(side);
    };

    return (
        <section style={{ marginBottom: 'var(--spacing-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--spacing-md)' }}>
                <MessageSquare size={24} color="var(--accent-yellow)" />
                <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>Debate <span className="text-gradient-accent">Arena</span></h2>
            </div>

            <div className="glass-panel" style={{
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255, 215, 0, 0.2)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <span style={{
                        background: 'rgba(255, 215, 0, 0.1)',
                        color: 'var(--accent-yellow)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        Live Debate
                    </span>
                    <h3 style={{ fontSize: '1.5rem', marginTop: '10px' }}>{debateData.topic}</h3>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    marginBottom: 'var(--spacing-lg)',
                    minHeight: '300px'
                }}>
                    {visibleMessages.map((msg, idx) => {
                        const isOptimist = msg.sender === 'optimist';
                        const persona = debateData.personas[msg.sender];

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10, x: isOptimist ? -20 : 20 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                style={{
                                    alignSelf: isOptimist ? 'flex-start' : 'flex-end',
                                    maxWidth: '80%',
                                    display: 'flex',
                                    gap: '10px',
                                    flexDirection: isOptimist ? 'row' : 'row-reverse'
                                }}
                            >
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: persona.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.2rem'
                                }}>
                                    {persona.avatar}
                                </div>
                                <div style={{
                                    background: isOptimist ? 'rgba(0, 243, 255, 0.1)' : 'rgba(255, 0, 85, 0.1)',
                                    border: `1px solid ${isOptimist ? 'rgba(0, 243, 255, 0.2)' : 'rgba(255, 0, 85, 0.2)'}`,
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    borderTopLeftRadius: isOptimist ? '0' : '12px',
                                    borderTopRightRadius: isOptimist ? '12px' : '0',
                                    color: 'var(--text-primary)',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.5'
                                }}>
                                    <div style={{ fontSize: '0.75rem', color: persona.color, marginBottom: '4px', fontWeight: '700' }}>
                                        {persona.name}
                                    </div>
                                    {msg.text}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Voting */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: 'var(--spacing-md)'
                }}>
                    <button
                        onClick={() => handleVote('optimist')}
                        disabled={userVoted}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 20px',
                            borderRadius: 'var(--radius-full)',
                            background: userVoted === 'optimist' ? 'var(--accent-cyan)' : 'rgba(0, 243, 255, 0.1)',
                            color: userVoted === 'optimist' ? '#000' : 'var(--accent-cyan)',
                            border: '1px solid var(--accent-cyan)',
                            opacity: userVoted && userVoted !== 'optimist' ? 0.5 : 1,
                            transition: 'all 0.2s'
                        }}
                    >
                        <ThumbsUp size={18} /> Team Optimist ({votes.optimist})
                    </button>

                    <button
                        onClick={() => handleVote('skeptic')}
                        disabled={userVoted}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 20px',
                            borderRadius: 'var(--radius-full)',
                            background: userVoted === 'skeptic' ? 'var(--accent-red)' : 'rgba(255, 0, 85, 0.1)',
                            color: userVoted === 'skeptic' ? '#fff' : 'var(--accent-red)',
                            border: '1px solid var(--accent-red)',
                            opacity: userVoted && userVoted !== 'skeptic' ? 0.5 : 1,
                            transition: 'all 0.2s'
                        }}
                    >
                        <ThumbsDown size={18} /> Team Skeptic ({votes.skeptic})
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DebateArena;
