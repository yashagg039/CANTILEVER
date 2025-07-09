import { useState } from "react";

export default function Filters({ onQueryChange, onCategoryChange }) {
  const [q, setQ] = useState("");
  const categories = ["business","entertainment","general","health","science","sports","technology"];

  return (
    <div className="flex flex-wrap justify-between mb-4">
      <form
        onSubmit={e => { e.preventDefault(); onQueryChange(q); }}
        className="flex space-x-2 mb-2"
      >
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded flex-grow"
          value={q}
          onChange={e => setQ(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 rounded">Search</button>
      </form>
      <div className="flex space-x-2 overflow-x-auto">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
          >{cat}</button>
        ))}
        <button onClick={() => onCategoryChange("")} className="px-3 py-1 rounded bg-red-200">All</button>
      </div>
    </div>
  );
}
