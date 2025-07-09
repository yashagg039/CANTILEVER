import ArticleCard from "./ArticleCard";

export default function ArticleList({ articles }) {
  if (!articles.length) return <p>No articles found.</p>;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((a, i) => <ArticleCard key={i} article={a} />)}
    </div>
  );
}
