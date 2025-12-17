import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // State to hold the message from the server
  const [message, setMessage] = useState("Loading...");

  // Effect to fetch data when the component mounts
  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.text()) // Convert response to text
      .then((data) => setMessage(data)) // Save it to state
      .catch((err) => setMessage("Error connecting to server"));
  }, []); // Empty array [] means "run once on load"

  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>The Clan Manager</h1>
      <h2>Status Report:</h2>
      <p style={{ color: "green", fontSize: "24px", fontWeight: "bold" }}>
        {message}
      </p>
    </div>
  );
}

export default App;