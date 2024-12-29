SHECONNECT - Financial Guidance Chatbot
Project Overview
SHECONNECT is an AI-driven chatbot designed to provide personalized financial guidance. It uses cutting-edge NLP and multilingual capabilities to help users, particularly women, overcome barriers to financial literacy and decision-making. The chatbot supports text and voice queries in multiple languages, extracting precise answers from preloaded financial documents.

Features
Multilingual Query Support: Real-time translations for seamless interactions in various languages.
Voice Input: Enables voice-based queries, supporting users with disabilities or limited typing ability.
Preloaded Financial Data: Answers are extracted from preloaded PDFs for precision and relevance.
Semantic Search: Fine-tuned AI models ensure accurate and quick responses.
User-Friendly Interface: Interactive, accessible, and aesthetically pleasing design.
Setup Instructions (Step-by-Step)
Clone the Repository:
bash
Copy code
git clone https://github.com/YourRepo/SHECONNECT.git
cd SHECONNECT
Set Up a Virtual Environment:
bash
Copy code
python -m venv venv
source venv/bin/activate  # For Linux/MacOS
venv\Scripts\activate     # For Windows
Install Dependencies:
bash
Copy code
pip install -r requirements.txt
Run the Backend Server:
bash
Copy code
python app.py
Launch the Frontend:
Streamlit Interface: Run streamlit run app.py.
React Interface: Follow instructions in the /frontend directory.
Access the Application: Open your browser and navigate to http://localhost:8501 for Streamlit or http://localhost:3000 for React.
Dependencies List
Backend:
Flask
SpeechRecognition
GoogleTranslator API
Frontend:
Streamlit
React
Styled Components
AI Models:
Sentence Transformer (all-MiniLM-L6-v2)
DistilBERT (distilbert-base-cased-distilled-squad)
Usage Examples
Text Query:
"What is the best way to save for retirement?"
Voice Query:
Press the microphone icon and ask: "How can I start a mutual fund investment?"
Screenshots or GIFs
Homepage:
Query in Action:
Team Member Details
[Your Name] - Lead Developer
[Member Name] - Frontend Developer
[Member Name] - AI Specialist
[Member Name] - UI/UX Designer
License
This project is licensed under the MIT License. See the LICENSE file for more details.
