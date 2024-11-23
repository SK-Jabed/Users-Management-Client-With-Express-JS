import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <>
        
      <h1>Users Management System</h1>
      <h2>Numbers of Users: {users.length}</h2>
      
    </>
  )
}

export default App
