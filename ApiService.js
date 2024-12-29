// src/components/ApiService.js
export const getAnswer = async (query, language) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, language }),
      });
      const result = await response.json();
      return result.answer;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  