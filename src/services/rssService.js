const RSS2JSON_ENDPOINT = 'https://api.rss2json.com/v1/api.json?rss_url=';
const API_KEY = 'your_api_key_here'; // Optional for rss2json, free tier works without for limited requests

// Helper to strip HTML tags from RSS descriptions
const stripHtml = (html) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
};

// Helper to extract first image from HTML content
const extractImageFromDescription = (html) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    const img = tmp.querySelector('img');
    return img ? img.src : null;
};

// Fallback images if RSS doesn't provide a thumbnail
const getImageForCategory = (category) => {
    const map = {
        'Hardware': '/images/cat_hardware.png',
        'Models': '/images/cat_models.png',
        'Robotics': '/images/cat_robotics.png',
        'Community': '/images/cat_community.png',
        'Science': '/images/cat_science.png',
        'Regulations': '/images/cat_regulations.png',
        'Rumors': '/images/cat_rumors.png',
        'Industry': '/images/cat_community.png',
        'Tech': '/images/cat_hardware.png',
        'Analysis': '/images/cat_models.png'
    };
    return map[category] || '/images/cat_models.png';
};

// Selected high-quality feeds for the main view
const MAIN_FEEDS = [
    { url: 'https://techcrunch.com/category/artificial-intelligence/feed/', category: 'Industry' },
    { url: 'https://www.theverge.com/ai-artificial-intelligence/rss/index.xml', category: 'Tech' },
    { url: 'https://openai.com/blog/rss.xml', category: 'Models' },
    { url: 'https://wired.com/feed/tag/ai/latest/rss', category: 'Analysis' },
    { url: 'https://www.mit.edu/rss/news.xml', category: 'Science' } // MIT News as proxy for research
];

export const fetchRealNews = async () => {
    try {
        const promises = MAIN_FEEDS.map(async (feed) => {
            try {
                const response = await fetch(`${RSS2JSON_ENDPOINT}${encodeURIComponent(feed.url)}`);
                const data = await response.json();

                if (data.status === 'ok') {
                    return data.items.map(item => ({
                        id: item.guid || item.link,
                        title: item.title,
                        summary: item.description ? stripHtml(item.description).substring(0, 150) + '...' : 'No summary available.',
                        source: data.feed.title,
                        url: item.link,
                        category: feed.category,
                        reliability: "Confirmed", // Real news is confirmed
                        timestamp: item.pubDate.split(' ')[0],
                        views: Math.floor(Math.random() * 50) + 'K', // Simulated views
                        readTime: '5 min',
                        tags: [feed.category, 'AI', 'News'],
                        hypeScore: Math.floor(Math.random() * 30) + 70, // Simulated hype
                        image: item.thumbnail || (item.description ? extractImageFromDescription(item.description) : null) || getImageForCategory(feed.category)
                    }));
                }
                return [];
            } catch (e) {
                console.error(`Error fetching feed ${feed.url}:`, e);
                return [];
            }
        });

        const results = await Promise.all(promises);
        // Flatten and sort by date
        const allNews = results.flat().sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        return allNews;
    } catch (error) {
        console.error("Global fetch error:", error);
        return [];
    }
};
