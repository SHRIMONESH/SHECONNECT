# SHECONNECT - Financial Guidance Chatbot

## Project Overview
SHECONNECT is an AI-driven chatbot designed to provide personalized financial guidance. It uses cutting-edge NLP and multilingual capabilities to help users, particularly women, overcome barriers to financial literacy and decision-making. The chatbot supports text and voice queries in multiple languages, extracting precise answers from preloaded financial documents.

---

## Features
- **Multilingual Query Support:** Real-time translations for seamless interactions in various languages.
- **Voice Input:** Enables voice-based queries, supporting users with disabilities or limited typing ability.
- **Preloaded Financial Data:** Answers are extracted from preloaded PDFs for precision and relevance.
- **Semantic Search:** Fine-tuned AI models ensure accurate and quick responses.
- **User-Friendly Interface:** Interactive, accessible, and aesthetically pleasing design.

---

## Setup Instructions (Step-by-Step)
### Prerequisites
- Python 3.8 or higher
- Node.js (for React frontend, optional if using Streamlit)

### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/YourRepo/SHECONNECT.git
   cd SHECONNECT
   ```
2. **Set Up a Virtual Environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # For Linux/MacOS
   venv\Scripts\activate     # For Windows
   ```
3. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Run the Backend Server:**
   ```bash
   python app.py
   ```
5. **Launch the Frontend:**
   - Streamlit Interface: Run `streamlit run app.py`.
   - React Interface: Follow instructions in the `/frontend` directory.
6. **Access the Application:**
   Open your browser and navigate to:
   - `http://localhost:8501` (Streamlit)
   - `http://localhost:3000` (React)
7. **React file organisation:**
   Project Directory:
my-app/
├── node_modules/
├── public/
│   └── index.html
└── src/
    └── components/
        ├── AgriculturePage.css
        ├── AgriculturePage.js
        ├── ApiService.js
        ├── BankingPage.css
        ├── BankingPage.js
        ├── BusinessPage.css
        ├── BusinessPage.js
        ├── CategoryPage.js
        ├── ChatComponent.js
        ├── EducationPage.css
        ├── EducationPage.js
        ├── HealthPage.js
        ├── hero-image.jpg
        ├── homepage.css
        ├── homepage.js
        ├── LanguageSelector.js
        ├── PersonalPage.css
        ├── PersonalPage.js
        ├── QueryInput.js
        ├── RedirectToStreamlit.js
        ├── ResponseDisplay.js
        └── SchemaDetails.js

---

## Dependencies
- **Backend:**
  - Flask
  - SpeechRecognition
  - GoogleTranslator API
- **Frontend:**
  - Streamlit
  - React
  - Styled Components
- **AI Models:**
  - Sentence Transformer (`all-MiniLM-L6-v2`)
  - DistilBERT (`distilbert-base-cased-distilled-squad`)

---

## Usage Examples
- **Text Query:**
  - Example: *"What is the best way to save for retirement?"*![Screenshot 2024-12-29 200945](https://github.com/user-attachments/assets/9a7e54b0-9a06-45b8-a16b-2ecd0ecabf4e)

- **Voice Query:**
  - Example: Press the microphone icon and ask: *"How can I start a mutual fund investment?"*

---

## Screenshots or GIFs
- **Homepage:**  
  ![Screenshot 2024-12-29 201201](https://github.com/user-attachments/assets/ec0009e9-ee36-4928-b1c2-c6877e25b1a9)

- **Chatbot:**  
  ![Screenshot 2024-12-29 200945](https://github.com/user-attachments/assets/3fae334a-76ac-4be9-a359-d1618b2b6cdb)
- **Scheme page:**
  ![Screenshot 2024-12-29 201134](https://github.com/user-attachments/assets/0be2acd3-e9fb-489c-a20c-8a7e6564b7d5)
- **overview of schemepage:**  
![Screenshot 2024-12-29 201112](https://github.com/user-attachments/assets/c4673331-f8f7-43a6-8320-3e01fd0c292f)


---

## Team Members
1. **[SHRI MONESH V]** -  AI Specialist 
2. **[RAGHUL]** - Frontend Developer  
3. **[RAHUl]** - developer  
  




## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Future Enhancements
- Add text-to-speech responses for enhanced user experience.
- Deploy the chatbot on a cloud platform for broader accessibility.
- Incorporate advanced GPT-based NLP models for improved contextual understanding.

---
