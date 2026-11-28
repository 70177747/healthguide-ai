
"use client";

import { useState } from "react";

const features = [
  ["💬", "AI Health Chat", "Ask general health questions."],
  ["🩺", "Symptom Checker", "Understand common symptoms."],
  ["💊", "Medicine Guide", "Learn about medicines."],
  ["🥗", "Nutrition", "Healthy food and diet tips."],
  ["🏃", "Fitness", "Exercise and fitness guidance."],
  ["🧠", "Mental Health", "Mental wellness and stress support."],
  ["😴", "Sleep Guide", "Improve your sleep routine."],
  ["🚑", "First Aid", "Basic first-aid information."],
  ["🛡️", "Preventive Care", "Tips for staying healthy."],
];

const pages: Record<string, { title: string; description: string; tips: string[] }> = {
  "Medicine Guide": {
    title: "Medicine Guide",
    description: "Learn general information about medicines and their safe use.",
    tips: [
      "Always follow your doctor's prescription.",
      "Read the medicine label carefully.",
      "Never take someone else's prescription medicine.",
      "Ask a pharmacist about possible side effects.",
    ],
  },
  Nutrition: {
    title: "Nutrition Guide",
    description: "Build healthy eating habits for a healthier lifestyle.",
    tips: [
      "Eat fruits and vegetables daily.",
      "Drink enough water.",
      "Include protein in your meals.",
      "Limit excessive sugar and processed foods.",
    ],
  },
  Fitness: {
    title: "Fitness Guide",
    description: "Stay active and make movement part of your daily routine.",
    tips: [
      "Try walking for 20–30 minutes.",
      "Stretch before and after exercise.",
      "Start slowly and increase activity gradually.",
      "Give your body enough time to rest.",
    ],
  },
  "Mental Health": {
    title: "Mental Health",
    description: "Take care of your emotional and mental well-being.",
    tips: [
      "Take breaks when you feel overwhelmed.",
      "Talk to someone you trust.",
      "Practice relaxation and breathing exercises.",
      "Seek professional support when needed.",
    ],
  },
  "Sleep Guide": {
    title: "Sleep Guide",
    description: "Create a healthy sleep routine.",
    tips: [
      "Try to sleep and wake up at regular times.",
      "Avoid screens before bedtime.",
      "Keep your bedroom quiet and comfortable.",
      "Avoid caffeine late in the day.",
    ],
  },
  "First Aid": {
    title: "First Aid Guide",
    description: "Learn basic first-aid steps for common emergencies.",
    tips: [
      "For serious emergencies, contact emergency services.",
      "For bleeding, apply firm pressure with clean material.",
      "Do not move someone with a suspected serious injury unless necessary for safety.",
      "Learn CPR and first aid from a certified trainer.",
    ],
  },
  "Preventive Care": {
    title: "Preventive Care",
    description: "Small healthy habits can help protect your health.",
    tips: [
      "Schedule regular health checkups.",
      "Keep vaccinations up to date.",
      "Maintain good hygiene.",
      "Stay physically active and eat balanced meals.",
    ],
  },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");
  const [question, setQuestion] = useState("");
  const [chatAnswer, setChatAnswer] = useState("");
  const [symptom, setSymptom] = useState("");
  const [symptomAnswer, setSymptomAnswer] = useState("");

  const tabs = [
    "Home",
    "AI Health Chat",
    "Symptom Checker",
    ...Object.keys(pages),
    "About",
  ];

  function askHealthQuestion() {
    if (!question.trim()) return;
    setChatAnswer(
      "Thank you for your question. This is a demo response. For accurate medical advice, please consult a qualified healthcare professional."
    );
  }

  function checkSymptom() {
    if (!symptom.trim()) return;
    setSymptomAnswer(
      "This tool cannot diagnose medical conditions. Your symptom may have different causes. Please consult a healthcare professional, especially if it is severe, persistent, or getting worse."
    );
  }

  return (
    <main>
      <header className="navbar">
        <div className="logo" onClick={() => setActiveTab("Home")}>
          💚 HealthGuide AI
        </div>

        <nav>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "nav-link active" : "nav-link"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>

      {activeTab === "Home" && (
        <>
          <section className="hero">
            <div className="hero-content">
              <span className="tag">YOUR PERSONAL HEALTH COMPANION</span>
              <h1>
                Your Health,
                <br />
                <span>Our Priority.</span>
              </h1>
              <p>
                Explore health information, discover healthy habits, and get
                guidance for a better lifestyle with HealthGuide AI.
              </p>
              <button
                className="primary-btn"
                onClick={() => setActiveTab("AI Health Chat")}
              >
                Explore Health Tools →
              </button>
            </div>
          </section>

          <section className="features-section">
            <div className="section-heading">
              <span className="tag">EXPLORE OUR SERVICES</span>
              <h2>Your Health Toolkit</h2>
              <p>Everything you need to take a step towards healthier living.</p>
            </div>

            <div className="features-grid">
              {features.map(([icon, title, description]) => (
                <button
                  className="feature-card"
                  key={title}
                  onClick={() => setActiveTab(title)}
                >
                  <span className="feature-icon">{icon}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="card-link">Explore →</span>
                </button>
              ))}
            </div>
          </section>
        </>
      )}

      {activeTab === "AI Health Chat" && (
        <section className="content-section">
          <span className="tag">AI HEALTH ASSISTANT</span>
          <h1>Ask Your Health Question</h1>
          <p>Enter a general health question below.</p>

          <div className="tool-box">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your health question here..."
            />
            <button className="primary-btn" onClick={askHealthQuestion}>
              Ask Question
            </button>
            {chatAnswer && <div className="answer-box">{chatAnswer}</div>}
          </div>
        </section>
      )}

      {activeTab === "Symptom Checker" && (
        <section className="content-section">
          <span className="tag">SYMPTOM INFORMATION</span>
          <h1>Symptom Checker</h1>
          <p>Describe what you are experiencing.</p>

          <div className="tool-box">
            <textarea
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
              placeholder="Describe your symptoms..."
            />
            <button className="primary-btn" onClick={checkSymptom}>
              Check Symptoms
            </button>
            {symptomAnswer && (
              <div className="answer-box">{symptomAnswer}</div>
            )}
          </div>
        </section>
      )}

      {pages[activeTab] && (
        <section className="content-section">
          <span className="tag">HEALTH INFORMATION</span>
          <h1>{pages[activeTab].title}</h1>
          <p>{pages[activeTab].description}</p>

          <div className="tips-grid">
            {pages[activeTab].tips.map((tip, index) => (
              <div className="tip-card" key={index}>
                <span>✓</span>
                {tip}
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === "About" && (
        <section className="content-section">
          <span className="tag">ABOUT US</span>
          <h1>About HealthGuide AI</h1>
          <p>
            HealthGuide AI is a health information platform designed to make
            general health education easier to explore and understand.
          </p>
          <p>
            Our goal is to encourage healthy habits and help people find
            useful general health information.
          </p>
        </section>
      )}

      <footer>
        <h2>💚 HealthGuide AI</h2>
        <p>Making health information easier for everyone.</p>
        <p className="disclaimer">
          Disclaimer: This website provides general educational information
          only. It does not provide medical diagnosis or replace professional
          medical advice.
        </p>
        <p>© 2026 HealthGuide AI. All rights reserved.</p>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          color: #173b36;
          background:
            linear-gradient(rgba(239, 250, 246, 0.92), rgba(239, 250, 246, 0.96)),
            url("/healthcare-bg.jpg") center / cover fixed;
        }

        button {
          font-family: inherit;
        }

        .navbar {
          min-height: 76px;
          padding: 16px 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 3px 18px rgba(0, 0, 0, 0.05);
        }

        .logo {
          font-size: 23px;
          font-weight: 800;
          color: #087e68;
          cursor: pointer;
        }

        nav {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .nav-link {
          border: 0;
          background: transparent;
          padding: 9px 12px;
          border-radius: 20px;
          color: #315b53;
          cursor: pointer;
          font-size: 13px;
        }

        .nav-link:hover,
        .nav-link.active {
          background: #d9f3e9;
          color: #087e68;
        }

        .hero {
          min-height: 490px;
          padding: 90px 8%;
          display: flex;
          align-items: center;
          background:
            linear-gradient(90deg, rgba(4, 48, 39, 0.86), rgba(4, 48, 39, 0.2)),
            url("/cover.jpg") center / cover;
          color: white;
        }

        .hero-content {
          max-width: 650px;
        }

        .tag {
          color: #18a58a;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .hero .tag {
          color: #a7f1d9;
        }

        .hero h1 {
          font-size: clamp(42px, 7vw, 72px);
          line-height: 1.08;
          margin: 20px 0;
        }

        .hero h1 span {
          color: #8ce6c7;
        }

        .hero p {
          max-width: 530px;
          font-size: 17px;
          line-height: 1.8;
          color: #e2f4ed;
        }

        .primary-btn {
          border: 0;
          border-radius: 30px;
          padding: 14px 24px;
          background: #0b9b7d;
          color: white;
          font-weight: 700;
          cursor: pointer;
          margin-top: 15px;
        }

        .primary-btn:hover {
          background: #087e68;
        }

        .features-section {
          padding: 75px 7%;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-heading h2 {
          font-size: 36px;
          margin: 12px 0;
        }

        .section-heading p,
        .content-section > p {
          color: #607c75;
          line-height: 1.7;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 22px;
        }

        .feature-card {
          text-align: left;
          padding: 27px;
          border: 1px solid #e0eee8;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.94);
          cursor: pointer;
          transition: 0.2s;
          color: #173b36;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(15, 110, 85, 0.12);
        }

        .feature-icon {
          font-size: 34px;
        }

        .feature-card h3 {
          font-size: 19px;
          margin-bottom: 8px;
        }

        .feature-card p {
          color: #668078;
          line-height: 1.6;
        }

        .card-link {
          color: #07896f;
          font-weight: 700;
        }

        .content-section {
          max-width: 1000px;
          min-height: 500px;
          margin: auto;
          padding: 85px 7%;
          text-align: center;
        }

        .content-section h1 {
          font-size: clamp(32px, 5vw, 48px);
          margin: 15px 0;
        }

        .tool-box {
          max-width: 650px;
          margin: 35px auto;
          padding: 28px;
          background: white;
          border-radius: 18px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
        }

        textarea {
          width: 100%;
          min-height: 130px;
          padding: 15px;
          border: 1px solid #cde3d9;
          border-radius: 12px;
          resize: vertical;
          font: inherit;
        }

        .answer-box {
          margin-top: 20px;
          padding: 18px;
          border-radius: 12px;
          background: #e8f8f1;
          line-height: 1.7;
          text-align: left;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
          margin-top: 35px;
        }

        .tip-card {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 22px;
          background: white;
          border-radius: 14px;
          text-align: left;
          line-height: 1.6;
        }

        .tip-card span {
          color: #0b9b7d;
          font-weight: 900;
        }

        footer {
          padding: 40px 7%;
          background: #103d35;
          color: white;
          text-align: center;
        }

        footer p {
          color: #c8e5dc;
          line-height: 1.6;
        }

        .disclaimer {
          max-width: 700px;
          margin: 20px auto;
          font-size: 13px;
        }

        @media (max-width: 700px) {
          .navbar {
            justify-content: center;
          }

          nav {
            justify-content: center;
          }

          .hero {
            padding: 70px 7%;
          }

          .hero h1 {
            font-size: 45px;
          }
        }
      `}</style>
    </main>
  );
}
