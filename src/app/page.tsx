
"use client";

import { useState } from "react";

const tabs = [
  "Home",
  "AI Health Chat",
  "Symptom Checker",
  "Medicine Guide",
  "Nutrition",
  "Fitness",
  "Mental Health",
  "Sleep Guide",
  "First Aid",
  "Preventive Care",
  "Women's Health",
  "About",
];

const features = [
  {
    icon: "💬",
    title: "AI Health Chat",
    description: "Ask general health education questions.",
  },
  {
    icon: "🩺",
    title: "Symptom Checker",
    description: "Explore information about common symptoms.",
  },
  {
    icon: "💊",
    title: "Medicine Guide",
    description: "Learn about medicines and medication safety.",
  },
  {
    icon: "🥗",
    title: "Nutrition",
    description: "Discover balanced diets and healthy eating.",
  },
  {
    icon: "🏃",
    title: "Fitness",
    description: "Explore workouts and physical activities.",
  },
  {
    icon: "🧠",
    title: "Mental Health",
    description: "Learn about stress and emotional wellbeing.",
  },
  {
    icon: "😴",
    title: "Sleep Guide",
    description: "Build healthy sleeping habits.",
  },
  {
    icon: "🩹",
    title: "First Aid",
    description: "Learn basic first-aid awareness.",
  },
  {
    icon: "❤️",
    title: "Preventive Care",
    description: "Explore checkups and preventive health.",
  },
  {
    icon: "🌸",
    title: "Women's Health",
    description: "Explore women's health education.",
  },
];

const topics: Record<string, {
  icon: string;
  heading: string;
  intro: string;
  items: { title: string; description: string }[];
}> = {
  Nutrition: {
    icon: "🥗",
    heading: "Nutrition & Healthy Eating",
    intro: "Discover the importance of balanced nutrition.",
    items: [
      { title: "Healthy Diet", description: "Learn about fruits, vegetables, whole grains and balanced meals." },
      { title: "Vitamins & Minerals", description: "Understand essential nutrients and their roles in the body." },
      { title: "Hydration", description: "Learn why drinking enough water matters." },
      { title: "Healthy Eating Habits", description: "Explore mindful eating and balanced food choices." },
    ],
  },
  Fitness: {
    icon: "🏃",
    heading: "Fitness & Exercise",
    intro: "Explore physical activity and healthy movement.",
    items: [
      { title: "Walking", description: "Learn about the benefits of regular walking." },
      { title: "Home Workouts", description: "Explore beginner-friendly movement and exercise ideas." },
      { title: "Stretching", description: "Discover flexibility and gentle stretching exercises." },
      { title: "Fitness Habits", description: "Learn how to build a consistent activity routine." },
    ],
  },
  "Mental Health": {
    icon: "🧠",
    heading: "Mental Health & Wellness",
    intro: "Your emotional wellbeing matters.",
    items: [
      { title: "Stress Management", description: "Explore healthy ways to manage everyday stress." },
      { title: "Mindfulness", description: "Learn about breathing and mindfulness practices." },
      { title: "Emotional Wellness", description: "Understand emotions and healthy coping strategies." },
      { title: "Self Care", description: "Discover everyday habits that support wellbeing." },
    ],
  },
  "Sleep Guide": {
    icon: "😴",
    heading: "Sleep & Recovery",
    intro: "Learn about the importance of quality sleep.",
    items: [
      { title: "Sleep Hygiene", description: "Explore healthy habits for better sleep." },
      { title: "Bedtime Routine", description: "Learn how to create a relaxing nighttime routine." },
      { title: "Sleep Awareness", description: "Understand common sleep difficulties." },
      { title: "Rest & Recovery", description: "Discover why your body needs rest." },
    ],
  },
  "First Aid": {
    icon: "🩹",
    heading: "First Aid & Safety",
    intro: "Learn basic first-aid awareness and emergency preparedness.",
    items: [
      { title: "Minor Cuts", description: "Learn basic wound-cleaning and bleeding awareness." },
      { title: "Burn Awareness", description: "Understand immediate first-aid steps for burns." },
      { title: "CPR Awareness", description: "Learn why CPR training and emergency response matter." },
      { title: "Emergency Preparedness", description: "Understand how to prepare for medical emergencies." },
    ],
  },
  "Preventive Care": {
    icon: "❤️",
    heading: "Preventive Healthcare",
    intro: "Learn how preventive healthcare supports wellbeing.",
    items: [
      { title: "Regular Checkups", description: "Understand the importance of routine health visits." },
      { title: "Vaccination", description: "Explore vaccine awareness and prevention." },
      { title: "Health Screening", description: "Learn about routine screening discussions with doctors." },
      { title: "Healthy Habits", description: "Discover everyday habits that support long-term health." },
    ],
  },
  "Women's Health": {
    icon: "🌸",
    heading: "Women's Health & Wellness",
    intro: "Explore educational information about women's health.",
    items: [
      { title: "Menstrual Health", description: "Learn about menstrual cycles and period health." },
      { title: "Reproductive Health", description: "Explore general reproductive health education." },
      { title: "Hormonal Health", description: "Understand the role of hormones in the body." },
      { title: "Women's Wellness", description: "Discover general health and self-care information." },
    ],
  },
  "Medicine Guide": {
    icon: "💊",
    heading: "Medicine Information Guide",
    intro: "Learn general information about common medicines.",
    items: [
      { title: "Paracetamol", description: "General information about a common pain and fever medicine." },
      { title: "Ibuprofen", description: "Learn about this anti-inflammatory medicine and its precautions." },
      { title: "Antibiotics", description: "Understand why antibiotics should only be used when prescribed." },
      { title: "Medicine Safety", description: "Learn about medicine labels, interactions and safe storage." },
    ],
  },
};

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
        text: "Thanks for your question! This website demo is not connected to a live AI medical service yet. I can provide general health education when a real AI service is connected. Please consult a qualified healthcare professional for personal medical advice.",
      },
    ]);

    setQuestion("");
  }

  const styles = `
    * { box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      color: white;
      min-height: 100vh;
      background:
        linear-gradient(
          rgba(0, 25, 36, 0.72),
          rgba(0, 35, 49, 0.82)
        ),
        url("/healthcare-bg.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }

    button { cursor: pointer; font-family: inherit; }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 5%;
      background: rgba(0, 25, 38, 0.88);
      backdrop-filter: blur(15px);
      border-bottom: 1px solid rgba(103,232,249,0.2);
      position: sticky;
      top: 0;
      z-index: 100;
      gap: 15px;
    }

    .logo {
      font-size: 24px;
      font-weight: 800;
      color: #67e8f9;
      white-space: nowrap;
    }

    .navlinks {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
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
      background: rgba(34,211,238,0.16);
    }

    .hero {
      text-align: center;
      padding: 105px 20px 90px;
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
      font-size: clamp(36px,6vw,64px);
      line-height: 1.2;
      margin: 25px 0;
      color: white;
    }

    .hero p {
      color: #d5edf5;
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
      padding: 60px 7%;
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
      grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
      gap: 20px;
    }

    .card {
      background: rgba(3,35,49,0.83);
      backdrop-filter: blur(14px);
      border: 1px solid rgba(103,232,249,0.23);
      padding: 25px;
      border-radius: 17px;
      box-shadow: 0 8px 30px rgba(0,0,0,.2);
      transition: .25s;
    }

    .card:hover {
      transform: translateY(-5px);
      border-color: #67e8f9;
    }

    .emoji { font-size: 36px; }

    .card h3 { color: #67e8f9; }

    .card p {
      color: #d0e2e9;
      line-height: 1.7;
      font-size: 14px;
    }

    .panel {
      max-width: 760px;
      margin: 30px auto;
      padding: 30px;
      background: rgba(3,35,49,0.88);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(103,232,249,.25);
      border-radius: 18px;
      box-shadow: 0 10px 35px rgba(0,0,0,.2);
    }

    .panel h3 { color: #a5f3fc; }

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
      border: 1px solid rgba(103,232,249,.18);
      border-radius: 10px;
      line-height: 1.7;
      color: #effcff;
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

    .topic-icon {
      text-align: center;
      font-size: 55px;
      margin-bottom: 15px;
    }

    footer {
      text-align: center;
      background: rgba(0,18,29,.92);
      border-top: 1px solid rgba(103,232,249,.2);
      color: #d1e7ed;
      padding: 40px 20px;
      line-height: 1.9;
    }

    footer h2 { color: #67e8f9; }

    @media(max-width:850px) {
      .navbar { flex-direction: column; }
      .navlinks { max-height: 115px; overflow-y: auto; }
    }

    @media(max-width:600px) {
      .hero { padding: 70px 18px; }
      .panel { padding: 20px; }
      .section { padding: 40px 5%; }
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
              {features.map((feature) => (
                <div className="card" key={feature.title}>
                  <div className="emoji">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <button
                    className="primary"
                    onClick={() => setActiveTab(feature.title)}
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
                    ? "This demo does not analyze or diagnose symptoms. Please discuss them with a healthcare professional."
                    : "Please describe your symptoms first."
                )
              }
            >
              Submit Symptoms
            </button>

            <div className="disclaimer">
              This tool does not diagnose diseases.
              For severe or rapidly worsening symptoms, seek urgent medical care.
            </div>
          </div>
        </section>
      )}

      {topics[activeTab] && (
        <section className="section">
          <div className="panel">
            <div className="topic-icon">
              {topics[activeTab].icon}
            </div>

            <h2>{topics[activeTab].heading}</h2>

            <p className="subtitle">
              {topics[activeTab].intro}
            </p>

            <div className="cards">
              {topics[activeTab].items.map((item) => (
                <div className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <div className="disclaimer">
              This content is for general educational purposes only.
              It does not replace professional medical advice.
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
            <p>
              Our goal is to encourage health awareness,
              healthy habits and informed conversations
              with healthcare professionals.
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
