import React, { useState } from 'react';
import './App.css';

function GuestPage() {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>You can only browse flight details.</p>
    </div>
  );
}

function UserPage() {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can now book tickets.</p>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let content;
  if (isLoggedIn) {
    content = <UserPage />;
  } else {
    content = <GuestPage />;
  }

  return (
    <div className="App">
      <h1>Flight Booking App</h1>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      {content}
    </div>
  );
}

export default App;

