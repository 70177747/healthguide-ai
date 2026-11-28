
"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");
  const [question, setQuestion] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [messages, setMessages] = useState<
    { role: string; text: string }[]
  >([]);

  const tabs = [
    "Home",
    "AI Health Chat",
    "Symptom Checker",
    "Medicine Guide",
    "About"
  ];

  function sendMessage() {
    if (!question.trim()) return;

    const userQuestion = question;

    setMessages((prev) => [
      ...prev,
      { role: "You", text: userQuestion },
      {
        role: "HealthGuide",
        text: "Thank you for your question. I can provide general health education, but this demo is not connected to an AI medical service yet. Please consult a qualified healthcare professional for personal medical advice."
      }
    ]);

    setQuestion("");
  }

  const styles = `
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f5f9ff;
      color: #172b4d;
    }
    button { cursor: pointer; }
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 7%;
      background: white;
      box-shadow: 0 2px 12px #0000000a;
      position: sticky;
      top: 0;
      z-index: 10;
      flex-wrap: wrap;
      gap: 15px;
    }
    .logo {
      font-size: 23px;
      font-weight: 800;
      color: #0879cf;
    }
    .navlinks {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .navlinks button {
      background: transparent;
      border: none;
      padding: 10px;
      color: #52647b;
      font-size: 14px;
      border-radius: 8px;
    }
    .navlinks button:hover, .navlinks button.selected {
      color: #0879cf;
      background: #eaf5ff;
    }
    .hero {
      text-align: center;
      padding: 90px 20px 75px;
      background: linear-gradient(135deg,#e9f6ff,#f8fbff,#e9f7ff);
    }
    .tag {
      display: inline-block;
      background: #d9efff;
      color: #0879cf;
      border-radius: 30px;
      padding: 10px 18px;
      font-size: 14px;
    }
    h1 {
      font-size: clamp(36px,6vw,58px);
      margin: 22px 0 15px;
      color: #12345a;
    }
    .hero p {
      color: #64748b;
      font-size: 18px;
      line-height: 1.7;
    }
    .primary {
      border: none;
      border-radius: 10px;
      padding: 14px 24px;
      background: #0879cf;
      color: white;
      font-size: 15px;
      font-weight: bold;
      margin: 12px 5px;
    }
    .primary:hover { background: #075fa4; }
    .section {
      padding: 55px 7%;
      max-width: 1200px;
      margin: auto;
    }
    .section h2 {
      font-size: 30px;
      text-align: center;
      color: #15395e;
    }
    .subtitle {
      text-align: center;
      color: #718096;
      margin-bottom: 35px;
      line-height: 1.6;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
      gap: 20px;
    }
    .card {
      background: white;
      padding: 28px;
      border-radius: 17px;
      border: 1px solid #e6eef7;
      box-shadow: 0 5px 20px #173c5a0a;
    }
    .card:hover {
      transform: translateY(-4px);
      transition: .2s;
      box-shadow: 0 10px 25px #173c5a12;
    }
    .emoji { font-size: 34px; }
    .card h3 { color: #176db0; }
    .card p {
      color: #718096;
      line-height: 1.6;
      font-size: 14px;
    }
    .panel {
      max-width: 750px;
      margin: 35px auto;
      background: white;
      border: 1px solid #e2eaf3;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 5px 25px #173c5a0a;
    }
    input, textarea {
      width: 100%;
      padding: 15px;
      margin: 12px 0;
      border: 1px solid #d9e4ef;
      border-radius: 9px;
      font: inherit;
      outline-color: #0879cf;
    }
    .message {
      padding: 13px;
      margin: 12px 0;
      background: #edf6ff;
      border-radius: 10px;
      line-height: 1.6;
    }
    .disclaimer {
      background: #fff8e8;
      color: #856018;
      padding: 18px;
      border-radius: 10px;
      font-size: 13px;
      line-height: 1.6;
      margin-top: 25px;
    }
    footer {
      text-align: center;
      background: #12345a;
      color: white;
      padding: 35px 15px;
      line-height: 1.8;
    }
    @media(max-width:600px) {
      .navbar { justify-content: center; }
      .navlinks { justify-content: center; }
      .hero { padding: 65px 18px; }
      .panel { padding: 20px; }
    }
  `;

  return (
    <>
      <style jsx global>{styles}</style>

      <nav className="navbar">
        <div className="logo">💙 HealthGuide AI</div>
        <div className="navlinks">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "selected" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {activeTab === "Home" && (
        <>
          <section className="hero">
            <span className="tag">✦ Your Personal Health Education Assistant</span>
            <h1>Understand Your Health.<br />Live Better.</h1>
            <p>
              Explore health information, learn about symptoms
              <br />
              and make more informed decisions.
            </p>
            <button
              className="primary"
              onClick={() => setActiveTab("AI Health Chat")}
            >
              Start Health Chat →
            </button>
            <button
              className="primary"
              style={{ background: "#12345a" }}
              onClick={() => setActiveTab("Symptom Checker")}
            >
              Check Symptoms
            </button>
          </section>

          <section className="section">
            <h2>Explore HealthGuide</h2>
            <p className="subtitle">
              Your health education tools in one place.
            </p>

            <div className="cards">
              {[
                ["💬","AI Health Chat","Ask general health education questions."],
                ["🩺","Symptom Checker","Explore possible explanations for symptoms."],
                ["💊","Medicine Guide","Learn general information about medicines."],
                ["❤️","Health Awareness","Discover healthy lifestyle information."]
              ].map(([icon,title,description]) => (
                <div className="card" key={title}>
                  <div className="emoji">{icon}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <button
                    className="primary"
                    onClick={() => setActiveTab(
                      title === "AI Health Chat" ? "AI Health Chat" :
                      title === "Symptom Checker" ? "Symptom Checker" :
                      title === "Medicine Guide" ? "Medicine Guide" : "About"
                    )}
                  >
                    Explore →
                  </button>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {activeTab === "AI Health Chat" && (
        <section className="section">
          <h2>💬 AI Health Assistant</h2>
          <p className="subtitle">
            Ask general health education questions.
          </p>

          <div className="panel">
            <div className="message">
              <b>HealthGuide:</b> Hello! Welcome to HealthGuide.
              What would you like to learn about today?
            </div>

            {messages.map((msg, i) => (
              <div className="message" key={i}>
                <b>{msg.role}:</b> {msg.text}
              </div>
            ))}

            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your health question..."
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <button className="primary" onClick={sendMessage}>
              Send Message →
            </button>
            <div className="disclaimer">
              This demonstration uses a fixed educational response.
              It is not a real AI medical chatbot.
            </div>
          </div>
        </section>
      )}

      {activeTab === "Symptom Checker" && (
        <section className="section">
          <h2>🩺 Symptom Information</h2>
          <p className="subtitle">
            Describe what you are experiencing.
          </p>
          <div className="panel">
            <h3>Describe your symptoms</h3>
            <textarea
              rows={5}
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="Example: headache, cough, fever..."
            />
            <button
              className="primary"
              onClick={() => alert(
                symptoms.trim()
                  ? "Your symptoms have been entered. This demo does not analyze or diagnose symptoms. Please discuss them with a healthcare professional."
                  : "Please describe your symptoms first."
              )}
            >
              Submit Symptoms
            </button>
            <div className="disclaimer">
              This tool does not diagnose diseases or determine
              their causes. For severe or rapidly worsening symptoms,
              seek urgent medical care.
            </div>
          </div>
        </section>
      )}

      {activeTab === "Medicine Guide" && (
        <section className="section">
          <h2>💊 Medicine Information</h2>
          <p className="subtitle">
            Learn about medicines and safe medication practices.
          </p>
          <div className="cards">
            {[
              ["Paracetamol","General information about a common pain and fever medicine."],
              ["Ibuprofen","General information about a non-steroidal anti-inflammatory medicine."],
              ["Antibiotics","Learn why antibiotics should only be used when prescribed."]
            ].map(([name,description]) => (
              <div className="card" key={name}>
                <div className="emoji">💊</div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="disclaimer">
            Medicine information is educational only.
            Always follow a qualified healthcare professional's
            advice and the official medicine leaflet.
          </div>
        </section>
      )}

      {activeTab === "About" && (
        <section className="section">
          <h2>About HealthGuide AI</h2>
          <div className="panel">
            <h3>Your Health Education Companion 💙</h3>
            <p>
              HealthGuide AI is designed to make general health
              information easier to understand and access.
            </p>
            <p>
              Our goal is to support health awareness and
              encourage informed conversations with healthcare
              professionals.
            </p>
          </div>
        </section>
      )}

      <footer>
        <h2>💙 HealthGuide AI</h2>
        Understand Your Health. Make Informed Decisions.
        <p>© 2026 HealthGuide AI. All rights reserved.</p>
        <small>
          Educational information only. Not a doctor,
          diagnostic tool, or emergency service.
        </small>
      </footer>
    </>
  );
}
