const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const MODEL = import.meta.env.VITE_AI_MODEL || 'google/gemini-2.0-flash-exp:free';

export const generateInsight = async (newsItem) => {
    if (!API_KEY) {
        console.warn("Missing OpenRouter API Key");
        return null;
    }

    const prompt = `
  Analyze the following AI news item and provide a JSON response with:
  1. "hypeScore": A number between 0-100 indicating the hype level.
  2. "tldr": An array of 3 short bullet points summarizing the key takeaways.
  3. "impact": A short sentence explaining why this matters for the future of AI.

  News Title: ${newsItem.title}
  News Summary: ${newsItem.summary}
  Category: ${newsItem.category}
  `;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "HTTP-Referer": "http://localhost:5173", // Required by OpenRouter
                "X-Title": "NJews AI App", // Required by OpenRouter
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": MODEL,
                "messages": [
                    { "role": "system", "content": "You are an expert AI analyst. Output ONLY valid JSON." },
                    { "role": "user", "content": prompt }
                ],
                "response_format": { "type": "json_object" }
            })
        });

        const data = await response.json();
        if (data.choices && data.choices.length > 0) {
            const content = data.choices[0].message.content;
            return JSON.parse(content);
        }
    } catch (error) {
        console.error("Error generating insight:", error);
        return null;
    }
    return null;
};
