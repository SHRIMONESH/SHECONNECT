// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage";
import AgriculturePage from "./components/AgriculturePage";
import EducationPage from "./components/EducationPage";
import HealthPage from "./components/HealthPage";
import BusinessPage from "./components/BusinessPage";
import BankingPage from "./components/BankingPage"; // Import the new page
import LanguageSelector from "./components/LanguageSelector";
import QueryInput from "./components/QueryInput";
import ResponseDisplay from "./components/ResponseDisplay";
import { fetchAnswer } from "./services/api";
import SchemeDetails from './components/SchemeDetails'; // Example if placed in `src/components`
import PersonalPage from "./components/PersonalPage";



function ChatWithPDF() {
  const [language, setLanguage] = useState("en");
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuerySubmit = async () => {
    if (!query) {
      alert("Please enter a query.");
      return;
    }

    try {
      const response = await fetchAnswer(query, language);
      setAnswer(response.answer || "No answer found.");
    } catch (error) {
      console.error("Error fetching answer:", error);
      setAnswer("An error occurred while fetching the answer.");
    }
  };

  return (
    <div className="app">
      <h1>Chat with PDF 📄</h1>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <QueryInput query={query} setQuery={setQuery} onSubmit={handleQuerySubmit} />
      <ResponseDisplay answer={answer} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Homepage */}
        <Route path="/" element={<Homepage />} />
        
        {/* Routes for specific categories */}
        <Route path="/agriculture" element={<AgriculturePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/category/Banking-Financial-Services" element={<BankingPage />} />
        <Route path="/banking-scheme/:id" element={<SchemeDetails/>} />
        <Route path="/Agriculture-scheme/:id" element={<SchemeDetails/>} />
        <Route path="/category/Business-Entrepreneurship" element={<BusinessPage />} />
        <Route path="/category/Personal" element={<PersonalPage />} />
        {/* Route for Chat with PDF */}
        <Route path="/chat-with-pdf" element={<ChatWithPDF />} />
      </Routes>
    </Router>
  );
}

export default App;
