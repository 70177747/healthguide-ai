
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
    "About",
  ];

  function sendMessage() {
    if (!question.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "You", text: question },
      {
        role: "HealthGuide AI",
        text: "Thank you for your question! This is currently a demonstration and is not connected to a real AI medical service. Please consult a qualified healthcare professional for personal medical advice.",
      },
    ]);

    setQuestion("");
  }

  const styles = `
    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      color: #ffffff;
      min-height: 100vh;

      background:
        linear-gradient(
          rgba(0, 25, 36, 0.70),
          rgba(0, 35, 49, 0.78)
        ),
        url("/healthcare-bg.jpg");

      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }

    button {
      cursor: pointer;
      font-family: inherit;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 7%;
      background: rgba(0, 25, 38, 0.78);
      backdrop-filter: blur(15px);
      border-bottom: 1px solid rgba(255,255,255,0.15);
      position: sticky;
      top: 0;
      z-index: 100;
      gap: 15px;
      flex-wrap: wrap;
    }

    .logo {
      font-size: 24px;
      font-weight: 800;
      color: #67e8f9;
      letter-spacing: -1px;
    }

    .navlinks {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
    }

    .navlinks button {
      background: transparent;
      border: none;
      color: #e0f2fe;
      padding: 10px 12px;
      border-radius: 8px;
      font-size: 14px;
      transition: 0.2s;
    }

    .navlinks button:hover,
    .navlinks button.selected {
      background: rgba(34,211,238,0.17);
      color: #67e8f9;
    }

    .hero {
      text-align: center;
      padding: 110px 20px 100px;
      background: transparent;
    }

    .tag {
      display: inline-block;
      padding: 11px 20px;
      border-radius: 30px;
      background: rgba(34,211,238,0.15);
      border: 1px solid rgba(103,232,249,0.4);
      color: #a5f3fc;
      font-size: 14px;
    }

    h1 {
      font-size: clamp(38px, 6vw, 65px);
      line-height: 1.15;
      margin: 25px 0 18px;
      color: #ffffff;
      text-shadow: 0 3px 20px rgba(0,0,0,0.3);
    }

    .hero p {
      color: #d5edf5;
      font-size: 18px;
      line-height: 1.8;
    }

    .primary {
      border: 1px solid rgba(103,232,249,0.5);
      border-radius: 10px;
      padding: 14px 23px;
      background: #0891b2;
      color: white;
      font-size: 15px;
      font-weight: bold;
      margin: 12px 5px;
      transition: 0.2s;
    }

    .primary:hover {
      background: #0e7490;
      transform: translateY(-2px);
    }

    .section {
      padding: 65px 7%;
      max-width: 1250px;
      margin: auto;
    }

    .section h2 {
      text-align: center;
      font-size: 32px;
      color: #a5f3fc;
    }

    .subtitle {
      text-align: center;
      color: #d1e7ed;
      margin-bottom: 38px;
      line-height: 1.7;
    }

    .cards {
      display: grid;
      grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));
      gap: 22px;
    }

    .card {
      background: rgba(3, 35, 49, 0.76);
      backdrop-filter: blur(14px);
      border: 1px solid rgba(103,232,249,0.23);
      padding: 28px;
      border-radius: 18px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.2);
      transition: 0.25s;
    }

    .card:hover {
      transform: translateY(-5px);
      border-color: #67e8f9;
    }

    .emoji {
      font-size: 36px;
    }

    .card h3 {
      color: #67e8f9;
      font-size: 20px;
    }

    .card p {
      color: #d0e2e9;
      line-height: 1.7;
      font-size: 14px;
    }

    .panel {
      max-width: 760px;
      margin: 35px auto;
      padding: 30px;
      background: rgba(3, 35, 49, 0.83);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(103,232,249,0.25);
      border-radius: 18px;
      box-shadow: 0 10px 35px rgba(0,0,0,0.2);
    }

    .panel h3 {
      color: #a5f3fc;
    }

    input, textarea {
      width: 100%;
      padding: 15px;
      margin: 12px 0;
      border: 1px solid rgba(103,232,249,0.4);
      border-radius: 10px;
      background: rgba(255,255,255,0.96);
      color: #12344a;
      font-size: 15px;
      outline-color: #22d3ee;
    }

    .message {
      padding: 15px;
      margin: 13px 0;
      background: rgba(34,211,238,0.12);
      border: 1px solid rgba(103,232,249,0.17);
      border-radius: 10px;
      line-height: 1.7;
      color: #effcff;
    }

    .disclaimer {
      background: rgba(255,193,7,0.12);
      border: 1px solid rgba(255,193,7,0.25);
      color: #ffe8a3;
      padding: 17px;
      border-radius: 10px;
      font-size: 13px;
      line-height: 1.7;
      margin-top: 25px;
    }

    footer {
      text-align: center;
      background: rgba(0,18,29,0.88);
      border-top: 1px solid rgba(103,232,249,0.2);
      color: #d1e7ed;
      padding: 40px 20px;
      line-height: 1.9;
    }

    footer h2 {
      color: #67e8f9;
    }

    @media(max-width:650px) {
      .navbar {
        justify-content: center;
      }

      .navlinks {
        justify-content: center;
      }

      .navlinks button {
        font-size: 12px;
        padding: 8px;
      }

      .hero {
        padding: 75px 18px;
      }

      .panel {
        padding: 20px;
      }
    }

    @media(prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }
    }
  `;

  return (
    <>
      <style jsx global>{styles}</style>

      <nav className="navbar">
        <div className="logo">
          💙 HealthGuide AI
        </div>

        <div className="navlinks">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={
                activeTab === tab ? "selected" : ""
              }
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
            <span className="tag">
              ✦ Your Personal Health Education Assistant
            </span>

            <h1>
              Understand Your Health.
              <br />
              Live Better.
            </h1>

            <p>
              Explore health information, learn about symptoms
              <br />
              and make more informed decisions.
            </p>

            <button
              className="primary"
              onClick={() =>
                setActiveTab("AI Health Chat")
              }
            >
              Start Health Chat →
            </button>

            <button
              className="primary"
              onClick={() =>
                setActiveTab("Symptom Checker")
              }
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
                [
                  "💬",
                  "AI Health Chat",
                  "Ask general health education questions."
                ],
                [
                  "🩺",
                  "Symptom Checker",
                  "Explore possible explanations for symptoms."
                ],
                [
                  "💊",
                  "Medicine Guide",
                  "Learn general information about medicines."
                ],
                [
                  "❤️",
                  "Health Awareness",
                  "Discover healthy lifestyle information."
                ]
              ].map(([icon, title, description]) => (
                <div className="card" key={title}>
                  <div className="emoji">{icon}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>

                  <button
                    className="primary"
                    onClick={() =>
                      setActiveTab(
                        title === "AI Health Chat"
                          ? "AI Health Chat"
                          : title === "Symptom Checker"
                          ? "Symptom Checker"
                          : title === "Medicine Guide"
                          ? "Medicine Guide"
                          : "About"
                      )
                    }
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

            {messages.map((msg, index) => (
              <div className="message" key={index}>
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

            <button
              className="primary"
              onClick={sendMessage}
            >
              Send Message →
            </button>

            <div className="disclaimer">
              This is a demonstration and is not connected
              to a real AI medical service.
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
              onChange={(e) =>
                setSymptoms(e.target.value)
              }
              placeholder="Example: headache, cough, fever..."
            />

            <button
              className="primary"
              onClick={() =>
                alert(
                  symptoms.trim()
                    ? "This demonstration does not analyze or diagnose symptoms. Please discuss your symptoms with a healthcare professional."
                    : "Please describe your symptoms first."
                )
              }
            >
              Submit Symptoms
            </button>

            <div className="disclaimer">
              This tool does not diagnose diseases.
              For severe or rapidly worsening symptoms,
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
              [
                "Paracetamol",
                "General information about a common pain and fever medicine."
              ],
              [
                "Ibuprofen",
                "General information about a non-steroidal anti-inflammatory medicine."
              ],
              [
                "Antibiotics",
                "Learn why antibiotics should only be used when prescribed."
              ]
            ].map(([name, description]) => (
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
              HealthGuide AI is designed to make general
              health information easier to understand and access.
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

        <p>
          © 2026 HealthGuide AI. All rights reserved.
        </p>

        <small>
          Educational information only. Not a doctor,
          diagnostic tool, or emergency service.
        </small>
      </footer>
    </>
  );
}
