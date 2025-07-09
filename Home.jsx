import { useEffect, useState } from "react";
import { fetchNews } from "../services/newsService";
import Filters from "../components/Filters";
import ArticleList from "../components/ArticleList";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchNews({ query, category })
      .then(setArticles)
      .finally(() => setLoading(false));
  }, [query, category]);

  return (
    <div>
      <Filters onQueryChange={setQuery} onCategoryChange={setCategory} />
      {loading ? <p>Loading...</p> : <ArticleList articles={articles} />}
    </div>
  );
}
