// src/components/QueryInput.js
import React from "react";

const QueryInput = ({ query, setQuery, onSubmit }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default QueryInput;
