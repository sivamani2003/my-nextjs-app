"use client"
import { useState } from 'react';
export default function Home() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const fetchHello = async () => {
    const res = await fetch('/api/hello');
    const data = await res.json();
    setMessage(data.message);
  };
  const sendName = async () => {
    const res = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="container">
      <h1>Next.js Frontend with Backend</h1>
      <button onClick={fetchHello}>Say Hello (GET)</button>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button onClick={sendName}>Greet (POST)</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}
