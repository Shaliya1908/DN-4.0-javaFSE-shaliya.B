import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleIncrement = () => {
    setCount(count + 1);
    sayHello();
  };

  const sayHello = () => {
    setMessage("Hello! Counter increased.");
  };

  const handleDecrement = () => {
    setCount(count - 1);
    setMessage("Counter decreased.");
  };

  const sayWelcome = (msg) => {
    setMessage(msg);
  };

  const handleSyntheticEvent = (e) => {
    setMessage("I was clicked");
  };

  const handleCurrencyChange = (e) => {
    setRupees(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const euroValue = (parseFloat(rupees) / 90).toFixed(2); // Example rate
    setEuro(euroValue);
  };

  return (
    <div className="App">
      <h1>React Event Examples</h1>
      <p>Counter: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome to React Events!")}>Say Welcome</button>

      <br /><br />

      <button onClick={handleSyntheticEvent}>OnPress</button>

      <br /><br />
      
      <form onSubmit={handleSubmit}>
        <input type="number" value={rupees} onChange={handleCurrencyChange} placeholder="Enter INR" />
        <button type="submit">Convert</button>
      </form>
      <p>Equivalent in Euro: €{euro}</p>

      <p><strong style={{ color: 'green' }}>CURRENCY CONVERTED</strong> {message}</p>

    </div>
  );
}

export default App;
