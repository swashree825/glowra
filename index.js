import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ sleep: "", diet: "", disease: "" });
  const [tips, setTips] = useState("");

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let advice = "";
    if (answers.sleep < 5) advice += "Try to rest more. ";
    else advice += "Your sleep is good. ";
    if (answers.diet === "poor") advice += "Include more fruits & veggies. ";
    else advice += "Your diet looks healthy. ";
    if (answers.disease !== "none") advice += "Consult a doctor regularly. ";
    else advice += "No major health issues. Keep it up!";
    setTips(advice);
    setStep(step + 1);
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", background: "#e6f5f0", minHeight: "100vh", padding: "2rem" }}>
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "3rem", color: "#0f5f50" }}>Glowra.ai</h1>
        <p style={{ fontSize: "1.5rem", color: "#0f5f50" }}>Prevent. Heal. Thrive.</p>
      </header>

      <section style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ color: "#0f5f50" }}>Our Features</h2>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
          <li>💪 Personalized Fitness Plans</li>
          <li>🧘 Mental Wellness & Mindfulness</li>
          <li>🩺 Preventive Health Tips</li>
        </ul>
      </section>

      <section style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left" }}>
        {step === 0 && (
          <div>
            <h3>Wellness Check</h3>
            <p>Answer 3 quick questions to get your tips.</p>
            <button onClick={handleNext} style={buttonStyle}>Start Your Wellness Check</button>
          </div>
        )}

        {step === 1 && (
          <div>
            <label>1. How many hours do you sleep?</label><br />
            <input type="number" name="sleep" value={answers.sleep} onChange={handleChange} style={inputStyle} /><br />
            <button onClick={handlePrev} style={buttonStyle}>Back</button>
            <button onClick={handleNext} style={buttonStyle}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <label>2. How healthy is your diet? (good/poor)</label><br />
            <input type="text" name="diet" value={answers.diet} onChange={handleChange} style={inputStyle} /><br />
            <button onClick={handlePrev} style={buttonStyle}>Back</button>
            <button onClick={handleNext} style={buttonStyle}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <label>3. Any diseases you have? (none if no)</label><br />
            <input type="text" name="disease" value={answers.disease} onChange={handleChange} style={inputStyle} /><br />
            <button onClick={handlePrev} style={buttonStyle}>Back</button>
            <button onClick={handleSubmit} style={buttonStyle}>Submit</button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3>Your Wellness Tips:</h3>
            <p>{tips}</p>
            <button onClick={() => setStep(0)} style={buttonStyle}>Restart</button>
          </div>
        )}
      </section>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  margin: "0.5rem 0",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "0.7rem 1.5rem",
  margin: "0.5rem",
  borderRadius: "5px",
  border: "none",
  background: "#0f5f50",
  color: "white",
  cursor: "pointer"
};
