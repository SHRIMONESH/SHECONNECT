// src/ChatComponent.js
import React, { useState } from 'react';
import { fetchAnswer } from '../services/api'; // Adjust function name if different

const ChatComponent = () => {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('en');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleQuerySubmit = async () => {
    if (!query.trim()) {
      setError('Please enter a valid query.');
      return;
    }

    setLoading(true);
    setError('');
    setAnswer('');

    try {
      const result = await fetchAnswer(query, language);
      setAnswer(result.answer || 'No answer found.');
    } catch (err) {
      setError('Failed to fetch the answer. Please try again.');
      console.error('Error fetching answer:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Chat with Preloaded PDF</h1>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="query">Ask a question:</label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            marginLeft: '10px',
            padding: '5px',
            width: '300px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="language">Select language:</label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{
            marginLeft: '10px',
            padding: '5px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
          <option value="zh">Chinese</option>
        </select>
      </div>
      <button
        onClick={handleQuerySubmit}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#ddd' : '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Loading...' : 'Get Answer'}
      </button>
      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      {answer && (
        <div style={{ marginTop: '20px' }}>
          <strong>Answer:</strong> {answer}
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
