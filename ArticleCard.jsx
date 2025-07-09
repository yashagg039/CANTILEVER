export default function ArticleCard({ article }) {
  const { urlToImage, title, description, url, source, publishedAt } = article;
  return (
    <div className="border rounded overflow-hidden flex flex-col">
      {urlToImage && <img src={urlToImage} alt="" className="h-48 w-full object-cover" />}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-4 flex-grow">{description}</p>
        <div className="text-xs text-gray-600 mb-2">
          {source.name} • {new Date(publishedAt).toLocaleString()}
        </div>
        <a href={url} target="_blank" rel="noreferrer" className="mt-auto text-blue-600 underline">Read more</a>
      </div>
    </div>
  );
}
