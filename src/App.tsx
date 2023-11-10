import { useState } from 'react';
import './App.css';


const App = () => {
  const [weight, setWeight] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
	
  const WaterCal = (weight) => {
	return weight * 2.2 * 30 / 2;
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleWeightChange = (e) => {
    const newWeight = parseFloat(e.target.value);
    setWeight(newWeight);
  };

  const themeStyle = {
    backgroundColor: isDarkTheme ? '#333' : '#fff',
    color: isDarkTheme ? '#fff' : '#333',
    padding: '200px',
    textAlign: 'center',
  };

  return (
    <div style={themeStyle}>
      <h1>{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</h1>
	  <h2>ควรดื่มน้ำวันละ</h2>
      <h2>{WaterCal(weight).toFixed(2)} มล.</h2>
      <input
        type='number'
        value={weight}
        onChange={handleWeightChange}
        placeholder='Type here'
		style={{ marginBottom: '10px' }}
      />
	  <br/>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;


