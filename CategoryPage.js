// src/components/CategoryPage.js
import React, { useParams } from 'react';

const CategoryPage = () => {
  const { name } = useParams(); // Access the dynamic URL parameter

  return (
    <div className="category-page">
      <h2>Category: {name}</h2>
      <p>Here you can see all the details about the {name} scheme.</p>
      {/* You can further display relevant data for each category */}
    </div>
  );
};

export default CategoryPage;
