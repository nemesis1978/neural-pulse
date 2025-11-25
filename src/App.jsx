import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import NewsCard from './components/NewsCard';
import AIInsightPanel from './components/AIInsightPanel';
import DebateArena from './components/DebateArena';
import RumorTimeline from './components/RumorTimeline';
import { newsItems as mockNewsItems } from './data/newsData';
import { fetchRealNews } from './services/rssService';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('news'); // 'news', 'debate', 'timeline'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNews, setSelectedNews] = useState(null);
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load news on mount
  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const realNews = await fetchRealNews();
      if (realNews.length > 0) {
        setNewsItems(realNews);
      } else {
        // Fallback to mock data if fetch fails
        setNewsItems(mockNewsItems);
      }
      setLoading(false);
    };
    loadNews();
  }, []);

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory || item.tags.includes(activeCategory);
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get top story (first item)
  const topStory = newsItems.length > 0 ? newsItems[0] : null;

  return (
    <Layout
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      {loading ? (
        <div style={{ textAlign: 'center', padding: '100px', color: 'var(--text-secondary)' }}>
          <h2>Initializing Neural Uplink...</h2>
        </div>
      ) : (
        <>
          {activeCategory === 'All' && topStory && <Hero item={topStory} />}

          {/* View Switcher Tabs */}
          {activeCategory === 'All' && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--spacing-md)',
              marginBottom: 'var(--spacing-xl)',
              borderBottom: '1px solid var(--glass-border)',
              paddingBottom: 'var(--spacing-md)'
            }}>
              {[
                { id: 'news', label: 'News Feed' },
                { id: 'debate', label: 'Debate Arena' },
                { id: 'timeline', label: 'Rumor Timeline' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: activeTab === tab.id ? 'var(--accent-cyan)' : 'transparent',
                    color: activeTab === tab.id ? '#000' : 'var(--text-secondary)',
                    border: activeTab === tab.id ? 'none' : '1px solid var(--glass-border)',
                    padding: '8px 24px',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          {/* Content Views */}
          {activeTab === 'news' && (
            <>
              <div style={{ marginTop: 'var(--spacing-xl)' }}>
                <FilterBar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
              </div>

              <div className="news-grid" style={{ marginTop: 'var(--spacing-lg)' }}>
                {filteredNews.map(item => (
                  <div key={item.id} onClick={() => setSelectedNews(item)} style={{ cursor: 'pointer' }}>
                    <NewsCard item={item} />
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'debate' && (
            <div style={{ marginTop: 'var(--spacing-lg)' }}>
              <DebateArena />
            </div>
          )}

          {activeTab === 'timeline' && (
            <div style={{ marginTop: 'var(--spacing-lg)' }}>
              <RumorTimeline />
            </div>
          )}

          <AIInsightPanel
            isOpen={!!selectedNews}
            onClose={() => setSelectedNews(null)}
            item={selectedNews}
          />
        </>
      )}
    </Layout>
  );
}

export default App;

