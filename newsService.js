import axios from "axios";

export const fetchNews = async ({ query = "", category = "" }) => {
  const res = await axios.get("https://newsapi.org/v2/top-headlines", {
    params: {
      apiKey: process.env.REACT_APP_NEWS_API_KEY,
      q: query || undefined,
      category: category || undefined,
      country: "us",
      pageSize: 20,
    },
  });
  return res.data.articles;
};
