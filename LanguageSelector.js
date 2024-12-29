// src/components/LanguageSelector.js
import React from "react";

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <div>
      <label htmlFor="language">Select Language:</label>
      <select
        id="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="hi">Hindi</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
