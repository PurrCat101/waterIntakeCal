import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const calculateWaterIntake = (weight) => {
    return (weight * 2.2 * 30) / 2; // Conversion and calculation
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`app-container ${isDarkTheme ? "dark-theme" : "light-theme"}`}
    >
      <div className="calculator-box">
        <h1>Water Intake Calculator</h1>
        <div className="input-container">
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            placeholder="Enter weight (kg)"
            min={0}
          />
        </div>
        {weight > 0 && (
          <p>
            You should drink approximately{" "}
            {calculateWaterIntake(weight).toFixed(0)} ml of water per day.
          </p>
        )}
        <button onClick={toggleTheme}>
          {isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;
