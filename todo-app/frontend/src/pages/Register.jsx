import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
    window.location.href = '/login';
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl mb-4">Register</h2>
      <input className="border p-2 w-full mb-2" placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input className="border p-2 w-full mb-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="border p-2 w-full mb-2" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button className="bg-green-500 text-white px-4 py-2" onClick={handleRegister}>Register</button>
    </div>
  );
}
