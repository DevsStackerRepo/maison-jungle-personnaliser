import React from 'react';
import '../styles/Categories.css';

function Categories({ activeCategory, setActiveCategory, categories }) {
  function handleSelect(e) {
    setActiveCategory(e.target.value);
  }
  return (
    <div className="lmj-categories">
      <select
        className="lmj-categories-select"
        onChange={handleSelect}
        value={activeCategory}
      >
        <option value="">---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory('')}>Renitialiser</button>
    </div>
  );
}

export default Categories;
