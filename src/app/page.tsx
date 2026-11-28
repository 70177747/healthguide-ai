
"use client";

import { useMemo, useState } from "react";

type Topic = {
  id: string;
  category: string;
  icon: string;
  title: string;
  summary: string;
  symptoms: string[];
  causes: string[];
  prevention: string[];
  care: string[];
  urgent: string[];
  source: string;
  sourceName: string;
};

const topics: Topic[] = [
  {
    id: "diabetes",
    category: "Chronic conditions",
    icon: "🩸",
    title: "Diabetes",
    summary:
      "Diabetes is a condition in which blood glucose levels become too high because the body does not make enough insulin or cannot use it effectively.",
    symptoms: [
      "Increased thirst and frequent urination",
      "Feeling unusually hungry",
      "Unexplained weight loss",
      "Tiredness or blurred vision",
      "Slow-healing cuts or wounds",
      "Some people have no noticeable symptoms",
    ],
    causes: [
      "Type 1 diabetes involves an immune system attack on insulin-producing cells.",
      "Type 2 diabetes involves insulin resistance and often reduced insulin production.",
      "Family history, age and other health factors can affect risk.",
    ],
    prevention: [
      "Choose balanced meals with vegetables, fibre and suitable portions.",
      "Be physically active regularly.",
      "Avoid tobacco.",
      "Attend recommended health screenings, especially if you have risk factors.",
    ],
    care: [
      "A healthcare professional may use blood glucose or HbA1c tests to assess diabetes.",
      "Treatment can include lifestyle changes, monitoring and prescribed medicines.",
      "Follow your individual care plan and attend regular reviews.",
      "Do not stop or change prescribed diabetes medicine without medical advice.",
    ],
    urgent: [
      "Confusion, unconsciousness or seizures",
      "Vomiting with severe weakness or difficulty breathing",
      "Severe symptoms of very low blood sugar",
    ],
    source: "https://www.who.int/health-topics/diabetes",
    sourceName: "World Health Organization",
  },
  {
    id: "blood-pressure",
    category: "Heart health",
    icon: "❤️",
    title: "High Blood Pressure",
    summary:
      "High blood pressure, also called hypertension, means that the pressure of blood against artery walls remains too high. It often has no symptoms.",
    symptoms: [
      "Often no symptoms at all",
      "A blood pressure measurement is needed to identify it",
      "Severe headache, chest pain or breathing difficulty may indicate an emergency and need urgent assessment",
    ],
    causes: [
      "Family history and increasing age",
      "High salt intake and unhealthy dietary patterns",
      "Physical inactivity and tobacco use",
      "Some kidney conditions and medicines",
    ],
    prevention: [
      "Reduce excess salt in your diet.",
      "Eat a balanced diet with vegetables and fruit.",
      "Stay physically active.",
      "Avoid tobacco and limit unhealthy lifestyle habits.",
      "Check blood pressure as recommended by a clinician.",
    ],
    care: [
      "Have blood pressure measured using a suitable device and correct technique.",
      "A clinician may recommend lifestyle changes and prescribed medicines.",
      "Take prescribed medicines consistently.",
      "Keep a record of readings if your clinician recommends it.",
    ],
    urgent: [
      "Chest pain or pressure",
      "Sudden weakness, facial drooping or difficulty speaking",
      "Severe breathing difficulty",
      "Sudden severe headache or vision changes",
    ],
    source: "https://www.who.int/news-room/fact-sheets/detail/hypertension",
    sourceName: "World Health Organization",
  },
  {
    id: "heart",
    category: "Heart health",
    icon: "💗",
    title: "Heart Disease",
    summary:
      "Heart disease includes several conditions affecting the heart and blood vessels. Early risk assessment and medical care can reduce complications.",
    symptoms: [
      "Chest discomfort, pressure or pain",
      "Breathlessness",
      "Unusual tiredness",
      "Palpitations",
      "Swelling in the legs or ankles in some conditions",
    ],
    causes: [
      "High blood pressure",
      "High cholesterol",
      "Diabetes",
      "Smoking and tobacco exposure",
      "Family history and other medical conditions",
    ],
    prevention: [
      "Avoid smoking and tobacco.",
      "Manage blood pressure, cholesterol and blood glucose.",
      "Choose heart-healthy foods.",
      "Stay active according to your ability.",
      "Attend recommended health checkups.",
    ],
    care: [
      "A clinician may recommend an ECG, blood tests or other investigations.",
      "Treatment depends on the specific heart condition.",
      "Follow prescribed medicines and specialist advice.",
      "Do not ignore recurring chest discomfort or breathlessness.",
    ],
    urgent: [
      "New or severe chest pain, pressure or tightness",
      "Pain spreading to the arm, jaw, back or shoulder",
      "Sudden breathlessness, sweating or fainting",
      "Possible heart attack symptoms require emergency medical help",
    ],
    source: "https://www.who.int/health-topics/cardiovascular-diseases",
    sourceName: "World Health Organization",
  },
  {
    id: "asthma",
    category: "Respiratory health",
    icon: "🫁",
    title: "Asthma",
    summary:
      "Asthma is a long-term condition in which airways become inflamed and narrowed, sometimes making breathing difficult.",
    symptoms: [
      "Wheezing",
      "Coughing, especially at night or early morning",
      "Shortness of breath",
      "Chest tightness",
      "Symptoms that may come and go",
    ],
    causes: [
      "Airway inflammation and sensitivity",
      "Allergens, dust or air pollution",
      "Respiratory infections",
      "Exercise or cold air in some people",
    ],
    prevention: [
      "Identify and reduce personal triggers.",
      "Avoid tobacco smoke and indoor smoke.",
      "Follow your asthma action plan.",
      "Use prescribed inhalers as instructed.",
    ],
    care: [
      "A clinician may assess symptoms and breathing tests.",
      "Asthma treatment often includes inhaled medicines.",
      "Learn the correct inhaler technique.",
      "Keep prescribed reliever medication available as directed.",
    ],
    urgent: [
      "Severe difficulty breathing",
      "Unable to speak normally because of breathlessness",
      "Blue or grey lips or face",
      "Symptoms worsening despite following your emergency asthma plan",
    ],
    source: "https://www.who.int/news-room/fact-sheets/detail/asthma",
    sourceName: "World Health Organization",
  },
  {
    id: "digestive",
    category: "Digestive health",
    icon: "🥗",
    title: "Digestive Problems",
    summary:
      "Digestive symptoms can have many causes, including infections, food intolerance, reflux and other gastrointestinal conditions.",
    symptoms: [
      "Stomach pain or cramps",
      "Bloating and gas",
      "Heartburn or acid reflux",
      "Diarrhoea or constipation",
      "Nausea or vomiting",
    ],
    causes: [
      "Food-related irritation or intolerance",
      "Gastrointestinal infections",
      "Reflux or other digestive disorders",
      "Some medicines and underlying conditions",
    ],
    prevention: [
      "Wash hands before preparing or eating food.",
      "Use safe drinking water and properly prepared food.",
      "Eat a varied diet with appropriate fibre.",
      "Stay hydrated.",
      "Notice foods that repeatedly trigger symptoms.",
    ],
    care: [
      "The right treatment depends on the cause.",
      "Drink safe fluids when experiencing diarrhoea.",
      "Seek medical advice for persistent or recurring symptoms.",
      "Avoid taking antibiotics without a clinician's prescription.",
    ],
    urgent: [
      "Severe or sudden abdominal pain",
      "Blood in vomit or stool",
      "Black, tar-like stool",
      "Repeated vomiting with signs of dehydration",
      "Fainting or severe weakness",
    ],
    source: "https://medlineplus.gov/digestivediseases.html",
    sourceName: "MedlinePlus",
  },
  {
    id: "flu",
    category: "Infections",
    icon: "🤧",
    title: "Flu and Respiratory Infections",
    summary:
      "Respiratory infections can be caused by different viruses or bacteria. Flu commonly causes sudden fever, cough and body aches.",
    symptoms: [
      "Fever or chills",
      "Cough and sore throat",
      "Runny or blocked nose",
      "Muscle aches and headache",
      "Tiredness",
    ],
    causes: [
      "Viruses spread through respiratory particles.",
      "Close contact with an infected person can increase exposure.",
      "Touching contaminated surfaces and then the face may also spread some infections.",
    ],
    prevention: [
      "Wash hands regularly.",
      "Cover coughs and sneezes.",
      "Improve ventilation where possible.",
      "Stay home when unwell if possible.",
      "Ask a healthcare professional about recommended vaccines.",
    ],
    care: [
      "Rest and drink adequate fluids.",
      "Ask a pharmacist or clinician before using medicines, especially for children or people with existing conditions.",
      "Antibiotics do not treat viral infections.",
      "People at higher risk should seek medical advice early.",
    ],
    urgent: [
      "Difficulty breathing",
      "Persistent chest pain or pressure",
      "Confusion or inability to wake normally",
      "Severe dehydration",
      "Symptoms that improve and then become significantly worse",
    ],
    source: "https://www.who.int/news-room/fact-sheets/detail/influenza-(seasonal)",
    sourceName: "World Health Organization",
  },
  {
    id: "mental",
    category: "Mental wellbeing",
    icon: "🧠",
    title: "Mental Health",
    summary:
      "Mental health is part of overall health. Stress, anxiety and depression can affect emotions, thinking, sleep and daily activities.",
    symptoms: [
      "Persistent sadness or low mood",
      "Excessive worry or fear",
      "Changes in sleep or appetite",
      "Difficulty concentrating",
      "Loss of interest in usual activities",
      "Feeling overwhelmed or withdrawn",
    ],
    causes: [
      "Life events and ongoing stress",
      "Biological and genetic factors",
      "Physical health conditions",
      "Social and environmental circumstances",
    ],
    prevention: [
      "Maintain supportive relationships.",
      "Try to keep a regular sleep routine.",
      "Make time for enjoyable activities.",
      "Use healthy coping strategies.",
      "Seek support early when distress affects daily life.",
    ],
    care: [
      "A qualified mental health professional can assess your needs.",
      "Treatment may include talking therapies, support and sometimes prescribed medicine.",
      "Avoid self-medicating.",
      "Asking for help is a positive step.",
    ],
    urgent: [
      "Immediate risk of self-harm or suicide",
      "Feeling unable to keep yourself or another person safe",
      "Severe confusion or loss of contact with reality",
    ],
    source: "https://www.who.int/health-topics/mental-health",
    sourceName: "World Health Organization",
  },
  {
    id: "nutrition",
    category: "Healthy lifestyle",
    icon: "🍎",
    title: "Healthy Nutrition",
    summary:
      "A healthy diet supports growth, energy and long-term health. Nutritional needs vary with age, activity, health conditions and other factors.",
    symptoms: [
      "Poor nutrition may contribute to tiredness.",
      "Unbalanced diets may affect weight and energy.",
      "Nutrient deficiencies can cause different symptoms.",
      "Symptoms need assessment rather than self-diagnosis.",
    ],
    causes: [
      "Limited variety in food choices",
      "Insufficient or excessive food intake",
      "Medical conditions affecting absorption",
      "Food insecurity or restricted diets",
    ],
    prevention: [
      "Eat a variety of vegetables and fruits.",
      "Choose whole grains and fibre-rich foods.",
      "Include suitable protein sources.",
      "Limit excess salt, free sugars and unhealthy fats.",
      "Drink safe water regularly.",
    ],
    care: [
      "Choose a diet suited to your health and nutritional needs.",
      "A registered dietitian can help with medical diets.",
      "People with diabetes, kidney disease or other conditions may need individual advice.",
      "Do not take high-dose supplements without professional guidance.",
    ],
    urgent: [
      "Severe dehydration or fainting",
      "Difficulty swallowing or keeping fluids down",
      "Rapid unexplained weight loss",
      "Signs of a serious allergic reaction after eating",
    ],
    source: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
    sourceName: "World Health Organization",
  },
  {
    id: "sleep",
    category: "Healthy lifestyle",
    icon: "🌙",
    title: "Sleep Health",
    summary:
      "Good sleep supports physical health, concentration and emotional wellbeing. Sleep needs vary by age and individual circumstances.",
    symptoms: [
      "Difficulty falling asleep",
      "Waking repeatedly during the night",
      "Waking too early",
      "Daytime sleepiness",
      "Difficulty concentrating",
    ],
    causes: [
      "Irregular sleep schedules",
      "Stress and anxiety",
      "Caffeine late in the day",
      "Some medicines or health conditions",
      "Sleep disorders such as sleep apnoea",
    ],
    prevention: [
      "Keep a consistent sleep and wake schedule.",
      "Make your bedroom comfortable and quiet.",
      "Reduce bright screens before bedtime.",
      "Avoid caffeine close to bedtime.",
      "Exercise regularly, but choose a suitable time.",
    ],
    care: [
      "Discuss persistent sleep problems with a clinician.",
      "A clinician may assess possible underlying causes.",
      "Do not use sleeping pills or sedatives without medical advice.",
      "Seek assessment for loud snoring with pauses in breathing or severe daytime sleepiness.",
    ],
    urgent: [
      "Sleep problems accompanied by immediate risk of self-harm",
      "Severe breathing difficulty during sleep or while awake",
      "Dangerous daytime sleepiness while driving or operating machinery",
    ],
    source: "https://medlineplus.gov/sleepdisorders.html",
    sourceName: "MedlinePlus",
  },
];

const sections = [
  "All Topics",
  "Chronic conditions",
  "Heart health",
  "Respiratory health",
  "Digestive health",
  "Infections",
  "Mental wellbeing",
  "Healthy lifestyle",
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Topics");
  const [selected, setSelected] = useState<Topic | null>(null);
  const [active, setActive] = useState("Home");

  const filtered = useMemo(() => {
    return topics.filter((topic) => {
      const matchesCategory =
        category === "All Topics" || topic.category === category;
      const text =
        `${topic.title} ${topic.summary} ${topic.category}`.toLowerCase();
      return matchesCategory && text.includes(search.toLowerCase());
    });
  }, [search, category]);

  function showLibrary() {
    setSelected(null);
    setActive("Library");
    document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <header className="navbar">
        <button className="brand" onClick={() => { setActive("Home"); setSelected(null); }}>
          <span className="brand-icon">✚</span>
          HealthGuide <b>AI</b>
        </button>
        <nav>
          <button onClick={() => { setActive("Home"); setSelected(null); }}>Home</button>
          <button onClick={showLibrary}>Medical Library</button>
          <button onClick={() => setActive("Medicine Safety")}>Medicine Safety</button>
          <button onClick={() => setActive("First Aid")}>First Aid</button>
          <button onClick={() => setActive("About")}>About</button>
        </nav>
      </header>

      {active === "Home" && !selected && (
        <>
          <section className="hero">
            <div className="hero-content">
              <span className="eyebrow">YOUR TRUSTED HEALTH EDUCATION RESOURCE</span>
              <h1>Understand Health.<br /><span>Make Informed Choices.</span></h1>
              <p>
                Explore reliable, easy-to-understand medical information,
                health education and prevention guidance.
              </p>
              <button className="primary" onClick={showLibrary}>
                Explore Medical Library <span>→</span>
              </button>
              <div className="hero-note">Evidence-informed • Educational • Easy to understand</div>
            </div>
          </section>

          <section className="trust-row">
            <div><b>01</b><span>Understand conditions</span></div>
            <div><b>02</b><span>Recognise warning signs</span></div>
            <div><b>03</b><span>Learn prevention</span></div>
            <div><b>04</b><span>Know when to seek care</span></div>
          </section>
        </>
      )}

      {active === "Home" && !selected && (
        <section className="section" id="library">
          <div className="section-head">
            <span className="eyebrow">MEDICAL KNOWLEDGE CENTER</span>
            <h2>Explore the Medical Library</h2>
            <p>Browse common health topics and practical medical guidance.</p>
          </div>

          <div className="search-wrap">
            <span>⌕</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search diabetes, asthma, heart health..."
            />
          </div>

          <div className="filters">
            {sections.map((item) => (
              <button
                key={item}
                className={category === item ? "filter active-filter" : "filter"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="topic-grid">
            {filtered.map((topic) => (
              <button className="topic-card" key={topic.id} onClick={() => setSelected(topic)}>
                <span className="topic-icon">{topic.icon}</span>
                <span className="topic-category">{topic.category}</span>
                <h3>{topic.title}</h3>
                <p>{topic.summary}</p>
                <span className="read-more">Read medical guide →</span>
              </button>
            ))}
          </div>
          {filtered.length === 0 && <p className="empty">No matching topics found. Try another search.</p>}
        </section>
      )}

      {selected && (
        <section className="detail-page">
          <button className="back" onClick={() => setSelected(null)}>← Back to Medical Library</button>
          <div className="detail-title">
            <span className="topic-icon large">{selected.icon}</span>
            <div>
              <span className="eyebrow">{selected.category.toUpperCase()}</span>
              <h1>{selected.title}</h1>
              <p>{selected.summary}</p>
            </div>
          </div>

          <div className="medical-alert">
            <b>Important medical notice</b>
            <p>This guide is for general education. Symptoms can have different causes. It cannot diagnose your condition or replace a medical professional.</p>
          </div>

          <div className="detail-grid">
            <article className="detail-card">
              <h2>01. Common symptoms</h2>
              <ul>{selected.symptoms.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
            <article className="detail-card">
              <h2>02. Possible causes and risk factors</h2>
              <ul>{selected.causes.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
            <article className="detail-card">
              <h2>03. Prevention and healthy habits</h2>
              <ul>{selected.prevention.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
            <article className="detail-card">
              <h2>04. Care and treatment information</h2>
              <ul>{selected.care.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
          </div>

          <div className="urgent-card">
            <h2>⚠ When to seek urgent medical help</h2>
            <p>Do not wait for an online answer if any of these warning signs occur:</p>
            <ul>{selected.urgent.map((x) => <li key={x}>{x}</li>)}</ul>
            <b>If symptoms are severe or life-threatening, contact local emergency services or go to the nearest emergency department.</b>
          </div>

          <div className="source-card">
            <h3>Trusted medical reference</h3>
            <p>Read more from {selected.sourceName}.</p>
            <a href={selected.source} target="_blank" rel="noreferrer">Open official medical source ↗</a>
          </div>
        </section>
      )}

      {active === "Medicine Safety" && !selected && (
        <section className="info-page">
          <span className="eyebrow">PATIENT SAFETY</span>
          <h1>Medicine Safety Guide</h1>
          <p>Medicines can help treat illness, but incorrect use can cause harm.</p>
          <div className="info-grid">
            <article><h3>Before taking medicine</h3><ul><li>Check the medicine name and expiry date.</li><li>Read the patient information leaflet.</li><li>Tell your clinician about allergies and other medicines.</li><li>Ask a pharmacist if instructions are unclear.</li></ul></article>
            <article><h3>Safe use</h3><ul><li>Follow the exact prescription and label instructions.</li><li>Do not share prescription medicines.</li><li>Do not double a missed dose unless instructed by a professional.</li><li>Do not stop long-term medicines without advice.</li></ul></article>
            <article><h3>Side effects and interactions</h3><ul><li>Ask about possible side effects.</li><li>Tell your clinician about vitamins and supplements.</li><li>Seek medical advice for unexpected reactions.</li><li>Severe allergic reactions require emergency help.</li></ul></article>
            <article><h3>Storage</h3><ul><li>Follow storage instructions on the packaging.</li><li>Keep medicines away from children.</li><li>Do not use expired medicines.</li><li>Dispose of medicines safely according to local guidance.</li></ul></article>
          </div>
          <div className="medical-alert"><b>Never self-prescribe antibiotics or prescription medicines.</b><p>Medicine choice and dose depend on the person, condition, age, allergies and other factors.</p></div>
          <div className="source-card"><h3>Medicine information</h3><a href="https://medlineplus.gov/druginformation.html" target="_blank" rel="noreferrer">MedlinePlus Drugs and Supplements ↗</a></div>
        </section>
      )}

      {active === "First Aid" && !selected && (
        <section className="info-page">
          <span className="eyebrow">EMERGENCY AWARENESS</span>
          <h1>Basic First Aid Guide</h1>
          <p>First aid is immediate assistance while waiting for appropriate medical care. It does not replace professional treatment.</p>
          <div className="medical-alert red"><b>Life-threatening emergency?</b><p>Call local emergency services immediately. In Pakistan, Rescue 1122 is available in many areas; availability may vary by location.</p></div>
          <div className="info-grid">
            <article><h3>Severe bleeding</h3><ul><li>Call for emergency help.</li><li>Apply firm, direct pressure with clean cloth or dressing.</li><li>Do not remove an object embedded in a wound.</li><li>Keep the person warm and monitor them.</li></ul></article>
            <article><h3>Burns</h3><ul><li>Move away from the heat source if safe.</li><li>Cool the burn under cool running water for 20 minutes.</li><li>Do not apply ice, butter or toothpaste.</li><li>Seek medical care for serious, large or deep burns.</li></ul></article>
            <article><h3>Suspected heart attack</h3><ul><li>Call emergency services immediately.</li><li>Help the person rest in a comfortable position.</li><li>Do not let them drive themselves.</li><li>Follow emergency dispatcher instructions.</li></ul></article>
            <article><h3>Unresponsive person</h3><ul><li>Check whether the area is safe.</li><li>Call emergency services.</li><li>Check breathing.</li><li>If not breathing normally, begin CPR if trained and follow dispatcher instructions.</li></ul></article>
          </div>
          <div className="source-card"><h3>First aid learning</h3><a href="https://www.nhs.uk/conditions/first-aid/" target="_blank" rel="noreferrer">NHS First Aid Guidance ↗</a></div>
        </section>
      )}

      {active === "About" && !selected && (
        <section className="info-page">
          <span className="eyebrow">ABOUT THE PLATFORM</span>
          <h1>Health information made easier to understand.</h1>
          <p>HealthGuide AI is an educational platform that helps people explore common medical topics, prevention, healthy habits and patient safety.</p>
          <div className="medical-alert"><b>Our medical responsibility</b><p>We do not diagnose diseases, prescribe medicines, interpret emergencies or replace a qualified healthcare professional. Content should be reviewed regularly by qualified medical professionals before being used as clinical guidance.</p></div>
        </section>
      )}

      <footer>
        <div className="footer-brand">✚ HealthGuide AI</div>
        <p>Clear information. Safer decisions. Healthier living.</p>
        <div className="footer-links">
          <a href="https://www.who.int/health-topics" target="_blank" rel="noreferrer">WHO Health Topics</a>
          <a href="https://medlineplus.gov/healthtopics.html" target="_blank" rel="noreferrer">MedlinePlus</a>
          <a href="https://www.nhs.uk/conditions/" target="_blank" rel="noreferrer">NHS Conditions</a>
        </div>
        <p className="disclaimer">Medical disclaimer: This website provides general educational information only. It is not a medical service and does not replace professional diagnosis, treatment or emergency care.</p>
        <small>© 2026 HealthGuide AI. All rights reserved.</small>
      </footer>

      <style jsx global>{`
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{margin:0;font-family:Arial,Helvetica,sans-serif;color:#183b36;background:#f4faf7}
        button,input{font:inherit}
        button{cursor:pointer}
        .navbar{min-height:78px;padding:15px 6%;display:flex;align-items:center;justify-content:space-between;gap:20px;background:#fff;box-shadow:0 3px 20px #103d3510;position:sticky;top:0;z-index:10}
        .brand{border:0;background:none;font-size:22px;font-weight:800;color:#116b5b}
        .brand b{color:#20a88b}
        .brand-icon{display:inline-grid;place-items:center;width:34px;height:34px;margin-right:8px;border-radius:10px;background:#e2f6ee;color:#0b987b}
        nav{display:flex;gap:8px;flex-wrap:wrap}
        nav button{border:0;background:none;color:#46645d;padding:10px 12px;border-radius:9px;font-size:13px}
        nav button:hover{background:#e8f6f0;color:#07846d}
        .hero{min-height:490px;padding:80px 9%;display:flex;align-items:center;background:linear-gradient(90deg,#e8fbf4ee 0%,#e8fbf4c8 48%,#e8fbf400 100%),url("/cover.jpg") center/cover}
        .hero-content{max-width:650px}
        .eyebrow{font-size:11px;letter-spacing:2px;font-weight:800;color:#078b70}
        .hero h1{font-size:clamp(39px,6vw,66px);line-height:1.08;margin:20px 0;color:#143e36}
        .hero h1 span{color:#0b9b7d}
        .hero p{max-width:560px;color:#496a61;font-size:17px;line-height:1.8}
        .primary{border:0;border-radius:9px;background:#087f69;color:#fff;padding:15px 22px;margin-top:18px;font-weight:700}
        .primary:hover{background:#075f50}
        .hero-note{font-size:12px;color:#55776d;margin-top:18px}
        .trust-row{display:grid;grid-template-columns:repeat(4,1fr);padding:24px 7%;gap:15px;background:#fff}
        .trust-row div{display:flex;align-items:center;gap:12px;color:#527169;font-size:13px}
        .trust-row b{font-size:20px;color:#0c9a7c}
        .section,.info-page{padding:75px 7%;max-width:1400px;margin:auto}
        .section-head{text-align:center;margin-bottom:30px}
        .section-head h2,.info-page h1{font-size:clamp(30px,4vw,43px);margin:12px 0;color:#173f36}
        .section-head p,.info-page>p{color:#688078;line-height:1.7}
        .search-wrap{max-width:720px;margin:30px auto 20px;display:flex;align-items:center;gap:12px;background:#fff;border:1px solid #dcece5;border-radius:12px;padding:0 18px}
        .search-wrap span{font-size:26px;color:#0b987a}
        .search-wrap input{width:100%;border:0;outline:0;padding:17px 0;background:transparent;color:#183b36}
        .filters{display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin:25px 0 35px}
        .filter{border:1px solid #dcece5;background:#fff;color:#527169;border-radius:30px;padding:10px 15px;font-size:12px}
        .active-filter,.filter:hover{background:#0b8c72;border-color:#0b8c72;color:#fff}
        .topic-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(245px,1fr));gap:18px}
        .topic-card{background:#fff;border:1px solid #e0eee8;border-radius:15px;padding:23px;text-align:left;color:#183b36;min-height:260px;transition:.2s}
        .topic-card:hover{transform:translateY(-4px);box-shadow:0 12px 30px #174d3c12;border-color:#9edac6}
        .topic-icon{display:inline-grid;place-items:center;width:48px;height:48px;border-radius:13px;background:#e9f8f1;font-size:25px;margin-bottom:15px}
        .topic-category{display:block;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#0a997b;font-weight:800}
        .topic-card h3{font-size:20px;margin:9px 0}
        .topic-card p{font-size:13px;line-height:1.7;color:#6a8179}
        .read-more{display:block;color:#07866d;font-size:12px;font-weight:800;margin-top:15px}
        .empty{text-align:center;color:#688078;padding:30px}
        .detail-page{max-width:1100px;margin:auto;padding:45px 6% 80px}
        .back{border:0;background:none;color:#07866d;font-weight:700;padding:12px 0}
        .detail-title{display:flex;align-items:center;gap:20px;margin:25px 0}
        .large{width:70px;height:70px;font-size:36px}
        .detail-title h1{font-size:clamp(32px,5vw,48px);margin:8px 0}
        .detail-title p{color:#607970;line-height:1.7}
        .medical-alert{background:#fff6df;border:1px solid #f1dfad;border-left:5px solid #d69b25;padding:20px 23px;border-radius:10px;margin:25px 0;color:#644e1f}
        .medical-alert p{line-height:1.7;margin-bottom:0}
        .red{background:#fff0ed;border-color:#f2c5bd;border-left-color:#d64c3e;color:#782c25}
        .detail-grid,.info-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin:25px 0}
        .detail-card,.info-grid article{background:#fff;border:1px solid #e1eee8;border-radius:13px;padding:23px}
        .detail-card h2{font-size:18px;color:#087e68}
        .detail-card ul,.info-grid ul,.urgent-card ul{padding-left:20px}
        .detail-card li,.info-grid li,.urgent-card li{padding:6px 0;line-height:1.6;color:#536e65;font-size:14px}
        .urgent-card{background:#fff0ed;border:1px solid #f1c8c1;border-radius:14px;padding:25px;margin:25px 0;color:#792e25}
        .urgent-card h2{margin-top:0}
        .urgent-card p,.urgent-card b{line-height:1.7}
        .urgent-card li{color:#783d35}
        .source-card{background:#eaf7f1;border-radius:13px;padding:22px;margin:25px 0}
        .source-card h3{margin-top:0}
        .source-card a{color:#087e68;font-weight:800;text-decoration:none}
        .info-page{min-height:65vh}
        .info-grid h3{color:#087e68}
        .info-grid li{line-height:1.6;color:#536e65}
        footer{background:#103e36;color:#fff;text-align:center;padding:45px 7%}
        .footer-brand{font-size:24px;font-weight:800}
        footer p{color:#c3dfd5;line-height:1.7}
        .footer-links{display:flex;justify-content:center;flex-wrap:wrap;gap:22px;margin:25px}
        .footer-links a{color:#a9ead5;text-decoration:none;font-size:13px}
        .disclaimer{max-width:760px;margin:25px auto;font-size:12px}
        footer small{color:#a9c9be}
        @media(max-width:760px){
          .navbar{position:static;justify-content:center}
          nav{justify-content:center}
          .hero{padding:65px 7%;background-position:60% center}
          .hero h1{font-size:43px}
          .trust-row{grid-template-columns:repeat(2,1fr)}
          .detail-grid,.info-grid{grid-template-columns:1fr}
          .detail-title{align-items:flex-start}
        }
      `}</style>
    </main>
  );
}
