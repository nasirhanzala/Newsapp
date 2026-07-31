export default async function handler(req, res) {
  const { country, category, page, pageSize } = req.query;
  const apiKey = process.env.NEWS_API_KEY;

  const url = `https://gnews.io/api/v4/top-headlines?category=${category || "general"}&lang=en&country=${country || "us"}&max=${pageSize || 10}&page=${page || 1}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error("GNews error:", data);
      return res.status(response.status).json({ error: data.errors || "GNews request failed" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Fetch failed:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
