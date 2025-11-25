export const rssFeeds = [
    // --- Tech Giants & Labs ---
    { name: "OpenAI", url: "https://openai.com/blog/rss.xml", category: "Giants" },
    { name: "Anthropic", url: "https://www.anthropic.com/news/rss.xml", category: "Giants" },
    { name: "Google AI", url: "https://blog.google/technology/ai/rss/", category: "Giants" },
    { name: "Microsoft AI", url: "https://blogs.microsoft.com/ai/feed/", category: "Giants" },
    { name: "Meta AI", url: "https://ai.meta.com/blog/rss/", category: "Giants" },
    { name: "NVIDIA Deep Learning", url: "https://blogs.nvidia.com/blog/category/deep-learning/feed/", category: "Giants" },
    { name: "DeepMind", url: "https://deepmind.com/blog/rss.xml", category: "Giants" },
    { name: "Stability AI", url: "https://stability.ai/news/rss", category: "Giants" },
    { name: "Hugging Face", url: "https://huggingface.co/blog/feed.xml", category: "Giants" },

    // --- Major Tech News ---
    { name: "TechCrunch AI", url: "https://techcrunch.com/category/artificial-intelligence/feed/", category: "News" },
    { name: "The Verge AI", url: "https://www.theverge.com/ai-artificial-intelligence/rss/index.xml", category: "News" },
    { name: "Wired AI", url: "https://www.wired.com/feed/tag/ai/latest/rss", category: "News" },
    { name: "VentureBeat AI", url: "https://venturebeat.com/ai/feed/", category: "News" },
    { name: "Ars Technica", url: "https://feeds.arstechnica.com/arstechnica/technology-lab", category: "News" },
    { name: "Engadget AI", url: "https://www.engadget.com/rss-ai.xml", category: "News" },
    { name: "ZDNet AI", url: "https://www.zdnet.com/topic/artificial-intelligence/rss.xml", category: "News" },
    { name: "MIT Tech Review", url: "https://www.technologyreview.com/topic/artificial-intelligence/feed/", category: "News" },
    { name: "Reuters Tech", url: "https://feeds.reuters.com/reuters/technologyNews", category: "News" },
    { name: "WSJ Tech", url: "https://feeds.a.dj.com/rss/RSSWSJD.xml", category: "News" },
    { name: "Financial Times", url: "https://www.ft.com/technology?format=rss", category: "News" },
    { name: "CNBC Tech", url: "https://www.cnbc.com/id/19854910/device/rss/rss.html", category: "News" },

    // --- Research & Academia ---
    { name: "Stanford HAI", url: "https://hai.stanford.edu/news/rss.xml", category: "Research" },
    { name: "Berkeley BAIR", url: "https://bair.berkeley.edu/blog/feed.xml", category: "Research" },
    { name: "CMU AI", url: "https://www.cs.cmu.edu/news/rss", category: "Research" },
    { name: "Cambridge AI", url: "https://www.cam.ac.uk/research/news/rss", category: "Research" },
    { name: "Arxiv CS.AI", url: "https://rss.arxiv.org/rss/cs.AI", category: "Research" },
    { name: "Papers With Code", url: "https://paperswithcode.com/latest/rss", category: "Research" },
    { name: "Distill", url: "https://distill.pub/rss.xml", category: "Research" },
    { name: "NLP Harvard", url: "https://nlp.seas.harvard.edu/feed.xml", category: "Research" },

    // --- Frameworks & Tools ---
    { name: "PyTorch", url: "https://pytorch.org/blog/feed.xml", category: "Tools" },
    { name: "TensorFlow", url: "https://blog.tensorflow.org/feeds/posts/default", category: "Tools" },
    { name: "Kaggle", url: "https://medium.com/feed/kaggle-blog", category: "Tools" },
    { name: "OpenCV", url: "https://opencv.org/feed/", category: "Tools" },
    { name: "SpaCy", url: "https://explosion.ai/blog/feed", category: "Tools" },

    // --- Industry & Analysis ---
    { name: "Unite.AI", url: "https://www.unite.ai/feed/", category: "Industry" },
    { name: "KDnuggets", url: "https://www.kdnuggets.com/feed", category: "Industry" },
    { name: "AI Business", url: "https://aibusiness.com/rss.xml", category: "Industry" },
    { name: "AI Weekly", url: "https://aiweekly.co/rss/", category: "Industry" },
    { name: "The Information", url: "https://www.theinformation.com/articles/rss", category: "Industry" },
    { name: "CB Insights", url: "https://www.cbinsights.com/research/rss", category: "Industry" },
    { name: "Crunchbase", url: "https://news.crunchbase.com/feed/", category: "Industry" },
    { name: "Towards Data Science", url: "https://towardsdatascience.com/feed", category: "Industry" },
    { name: "Synced", url: "https://syncedreview.com/feed/", category: "Industry" },
    { name: "AI Trends", url: "https://www.aitrends.com/feed/", category: "Industry" },
    { name: "Next Big Future", url: "https://www.nextbigfuture.com/feed", category: "Industry" },
    { name: "Singularity Hub", url: "https://singularityhub.com/feed/", category: "Industry" },

    // --- Global AI ---
    { name: "China AI (SCMP)", url: "https://www.scmp.com/rss/91/feed", category: "Global" },
    { name: "Japan AI (Japan Times)", url: "https://www.japantimes.co.jp/feed/topstories/", category: "Global" },
    { name: "Korea AI (Korea Times)", url: "https://www.koreatimes.co.kr/www/rss/tech.xml", category: "Global" },
    { name: "India AI (LiveMint)", url: "https://www.livemint.com/rss/technology", category: "Global" },
    { name: "Singapore AI (Straits Times)", url: "https://www.straitstimes.com/tags/artificial-intelligence/rss.xml", category: "Global" },
    { name: "UK Tech", url: "https://techcrunch.com/category/artificial-intelligence/feed/", category: "Global" },

    // --- Robotics ---
    { name: "IEEE Robotics", url: "https://spectrum.ieee.org/robotics/rss", category: "Robotics" },
    { name: "Boston Dynamics", url: "https://www.bostondynamics.com/blog/rss.xml", category: "Robotics" },

    // --- Ethics & Governance ---
    { name: "Partnership on AI", url: "https://www.partnershiponai.org/feed/", category: "Ethics" },
    { name: "AI Ethics Lab", url: "https://aiethicslab.com/feed/", category: "Ethics" },
    { name: "Governance.ai", url: "https://www.governance.ai/feed", category: "Ethics" },

    // --- Community & Startups ---
    { name: "Y Combinator", url: "https://news.ycombinator.com/rss", category: "Community" },
    { name: "Product Hunt AI", url: "https://www.producthunt.com/topics/artificial-intelligence/rss", category: "Community" },
    { name: "AngelList", url: "https://angel.co/feed/artificial-intelligence", category: "Community" },

    // --- Podcasts ---
    { name: "Lex Fridman", url: "https://lexfridman.com/feed/podcast/", category: "Podcast" },
    { name: "TWIML", url: "https://twimlai.com/feed/podcast/", category: "Podcast" },
    { name: "AI Today", url: "https://www.cognilytica.com/feed/", category: "Podcast" }
];
