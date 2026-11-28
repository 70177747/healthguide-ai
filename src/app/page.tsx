
"use client";

import { useState } from "react";

const features = [
  ["💬", "AI Health Chat", "Ask general health questions."],
  ["🩺", "Symptom Checker", "Explore common symptoms."],
  ["💊", "Medicine Guide", "Learn about medicines."],
  ["🥗", "Nutrition", "Healthy food and diet information."],
  ["🏃", "Fitness", "Exercise and fitness guidance."],
  ["🧠", "Mental Health", "Mental wellness and stress awareness."],
  ["😴", "Sleep Guide", "Learn healthy sleeping habits."],
  ["🩹", "First Aid", "Basic first-aid education."],
  ["❤️", "Preventive Care", "Health checkup awareness."],
  ["🌸", "Women's Health", "Women's health education."],
];

const pages: Record<string, {
  icon: string;
  heading: string;
  description: string;
  items: string[];
}> = {
  "Medicine Guide": {
    icon: "💊",
    heading: "Medicine Information",
    description: "Learn general information about medicines and medication safety.",
    items: ["Paracetamol", "Ibuprofen", "Antibiotics", "Medicine Safety"],
  },
  Nutrition: {
    icon: "🥗",
    heading: "Nutrition & Healthy Diet",
    description: "Discover the importance of balanced nutrition.",
    items: ["Healthy Diet", "Vitamins & Minerals", "Hydration", "Healthy Eating Habits"],
  },
  Fitness: {
    icon: "🏃",
    heading: "Fitness & Exercise",
    description: "Explore physical activity and healthy movement.",
    items: ["Walking", "Home Workouts", "Stretching", "Daily Exercise"],
  },
  "Mental Health": {
    icon: "🧠",
    heading: "Mental Health & Wellness",
    description: "Your emotional wellbeing matters.",
    items: ["Stress Management", "Mindfulness", "Emotional Wellness", "Self Care"],
  },
  "Sleep Guide": {
    icon: "😴",
    heading: "Sleep & Recovery",
    description: "Learn about the importance of healthy sleep.",
    items: ["Sleep Hygiene", "Bedtime Routine", "Sleep Awareness", "Rest & Recovery"],
  },
  "First Aid": {
    icon: "🩹",
    heading: "First Aid & Safety",
    description: "Learn basic first-aid awareness.",
    items: ["Minor Cuts", "Burn Awareness", "CPR Awareness", "Emergency Preparedness"],
  },
  "Preventive Care": {
    icon: "❤️",
    heading: "Preventive Healthcare",
    description: "Explore preventive healthcare and wellness.",
    items: ["Regular Checkups", "Vaccination", "Health Screening", "Healthy Habits"],
  },
  "Women's Health": {
    icon: "🌸",
    heading: "Women's Health",
    description: "Explore educational information about women's health.",
    items: ["Menstrual Health", "Reproductive Health", "Hormonal Health", "Women's Wellness"],
  },
};

const tabs = [
  "Home",
  "AI Health Chat",
  "Symptom Checker",
  ...Object.keys(pages),
  "About",
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");
  const [question, setQuestion] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [messages, setMessages] = useState<
    { role: string; text: string }[]
  >([]);

  function sendMessage() {
    if (!question.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "You", text: question },
      {
        role: "HealthGuide AI",
        text: "Thank you for your question! This is a demo and is not connected to a live AI medical service. Please consult a qualified healthcare professional for personal medical advice.",
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
      font-family: Arial, sans-serif;
      color: white;
      min-height: 100vh;
      background:
        linear-gradient(
          rgba(0, 25, 36, 0.70),
          rgba(0, 35, 49, 0.82)
        ),
        url("/healthcare-bg.jpg");
      background-size: cover;
      background-position: center;
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
      flex-wrap: wrap;
      gap: 15px;
      padding: 18px 5%;
      background: rgba(0, 25, 38, 0.90);
      backdrop-filter: blur(15px);
      border-bottom: 1px solid rgba(103,232,249,0.25);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .logo {
      font-size: 25px;
      font-weight: 800;
      color: #67e8f9;
      white-space: nowrap;
    }

    .navlinks {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      justify-content: center;
    }

    .navlinks button {
      border: none;
      background: transparent;
      color: #e0f2fe;
      padding: 9px 10px;
      border-radius: 8px;
      font-size: 12px;
    }

    .navlinks button:hover,
    .navlinks button.selected {
      color: #67e8f9;
      background: rgba(34,211,238,0.18);
    }

    /* COVER PICTURE */
    .hero {
      min-height: 560px;
      padding: 110px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      background:
        linear-gradient(
          rgba(0, 25, 36, 0.48),
          rgba(0, 25, 36, 0.68)
        ),
        url("/cover.jpg");

      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      border-radius: 0 0 25px 25px;
    }

    .tag {
      display: inline-block;
      padding: 11px 20px;
      border-radius: 30px;
      background: rgba(34,211,238,0.20);
      border: 1px solid rgba(103,232,249,0.5);
      color: #a5f3fc;
      font-size: 14px;
    }

    h1 {
      font-size: clamp(38px, 6vw, 65px);
      line-height: 1.2;
      margin: 25px 0;
      color: white;
      text-shadow: 0 3px 20px rgba(0,0,0,.5);
    }

    .hero p {
      color: #e0f7ff;
      font-size: 18px;
      line-height: 1.8;
    }

    .primary {
      border: 1px solid rgba(103,232,249,0.4);
      border-radius: 10px;
      padding: 13px 22px;
      background: #0891b2;
      color: white;
      font-size: 14px;
      font-weight: bold;
      margin: 10px 5px;
      transition: .2s;
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
      margin-bottom: 35px;
      line-height: 1.7;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 22px;
    }

    .card {
      background: rgba(3,35,49,0.86);
      backdrop-filter: blur(14px);
      border: 1px solid rgba(103,232,249,0.25);
      padding: 27px;
      border-radius: 18px;
      box-shadow: 0 8px 30px rgba(0,0,0,.2);
      transition: .25s;
    }

    .card:hover {
      transform: translateY(-5px);
      border-color: #67e8f9;
    }

    .emoji {
      font-size: 38px;
    }

    .card h3 {
      color: #67e8f9;
    }

    .card p {
      color: #d0e2e9;
      line-height: 1.7;
      font-size: 14px;
    }

    .panel {
      max-width: 850px;
      margin: 30px auto;
      padding: 30px;
      background: rgba(3,35,49,0.90);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(103,232,249,.25);
      border-radius: 18px;
      box-shadow: 0 10px 35px rgba(0,0,0,.2);
    }

    .panel h3 {
      color: #a5f3fc;
    }

    input, textarea {
      width: 100%;
      padding: 15px;
      margin: 12px 0;
      border: 1px solid #9bd9e8;
      border-radius: 9px;
      background: white;
      color: #12344a;
      font-size: 15px;
    }

    .message {
      padding: 14px;
      margin: 12px 0;
      background: rgba(34,211,238,.12);
      border: 1px solid rgba(103,232,249,.2);
      border-radius: 10px;
      line-height: 1.7;
    }

    .topic-icon {
      text-align: center;
      font-size: 55px;
    }

    .disclaimer {
      background: rgba(255,193,7,.12);
      border: 1px solid rgba(255,193,7,.3);
      color: #ffe8a3;
      padding: 16px;
      border-radius: 10px;
      font-size: 13px;
      line-height: 1.7;
      margin-top: 22px;
    }

    footer {
      text-align: center;
      background: rgba(0,18,29,.94);
      border-top: 1px solid rgba(103,232,249,.2);
      color: #d1e7ed;
      padding: 40px 20px;
      line-height: 1.9;
    }

    footer h2 {
      color: #67e8f9;
    }

    @media(max-width:850px) {
      .navbar {
        flex-direction: column;
      }

      .navlinks {
        max-height: 120px;
        overflow-y: auto;
      }
    }

    @media(max-width:600px) {
      .hero {
        min-height: 480px;
        padding: 75px 18px;
      }

      .panel {
        padding: 20px;
      }

      .section {
        padding: 40px 5%;
      }
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
              and make informed decisions.
            </p>

            <button
              className="primary"
              onClick={() => setActiveTab("AI Health Chat")}
            >
              Start Health Chat →
            </button>

            <button
              className="primary"
              onClick={() => setActiveTab("Symptom Checker")}
            >
              Check Symptoms →
            </button>
          </section>

          <section className="section">
            <h2>Explore HealthGuide</h2>

            <p className="subtitle">
              Everything you need to learn about health and wellness.
            </p>

            <div className="cards">
              {features.map(([icon, title, description]) => (
                <div className="card" key={title}>
                  <div className="emoji">{icon}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>

                  <button
                    className="primary"
                    onClick={() => setActiveTab(title)}
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
              <b>HealthGuide AI:</b> Hello! Welcome to HealthGuide.
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

            <button className="primary" onClick={sendMessage}>
              Send Message →
            </button>

            <div className="disclaimer">
              This is a demonstration, not a live AI medical service.
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
              onClick={() =>
                alert(
                  symptoms.trim()
                    ? "This demonstration does not diagnose or analyze symptoms. Please consult a healthcare professional."
                    : "Please describe your symptoms first."
                )
              }
            >
              Submit Symptoms
            </button>

            <div className="disclaimer">
              This tool does not diagnose diseases.
              Seek urgent medical care for severe symptoms.
            </div>
          </div>
        </section>
      )}

      {pages[activeTab] && (
        <section className="section">
          <div className="panel">
            <div className="topic-icon">
              {pages[activeTab].icon}
            </div>

            <h2>{pages[activeTab].heading}</h2>

            <p className="subtitle">
              {pages[activeTab].description}
            </p>

            <div className="cards">
              {pages[activeTab].items.map((item) => (
                <div className="card" key={item}>
                  <h3>{item}</h3>
                  <p>
                    Learn general educational information
                    about {item.toLowerCase()}.
                  </p>
                </div>
              ))}
            </div>

            <div className="disclaimer">
              Educational information only. Always consult
              a qualified healthcare professional for personal advice.
            </div>
          </div>
        </section>
      )}

      {activeTab === "About" && (
        <section className="section">
          <div className="panel">
            <div className="topic-icon">💙</div>
            <h2>About HealthGuide AI</h2>

            <p className="subtitle">
              Understand Your Health. Make Informed Decisions.
            </p>

            <p>
              HealthGuide AI is an educational health platform
              designed to make general health information easier
              to understand and access.
            </p>
          </div>
        </section>
      )}

      <footer>
        <h2>💙 HealthGuide AI</h2>
        <p>Understand Your Health. Make Informed Decisions.</p>
        <p>© 2026 HealthGuide AI. All rights reserved.</p>
        <small>
          Educational information only. Not a doctor,
          diagnostic tool, or emergency service.
        </small>
      </footer>
    </>
  );
}
