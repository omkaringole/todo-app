import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setTasks(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      {tasks.map(task => (
        <div key={task._id} className="bg-white p-4 shadow mb-2">
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
          <p>Status: {task.status}</p>
          <p>Priority: {task.priority}</p>
        </div>
      ))}
    </div>
  );
}
