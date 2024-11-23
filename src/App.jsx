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

  const handleAddUser = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    const user = {name, email};
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    });
  }

  return (
    <>      
      <h1>Users Management System</h1>
      <h2>Numbers of Users: {users.length}</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' id='' />
        <br />
        <input type="email" name='email' id='' />
        <br /><br />
        <input type="submit" value="Add User" />       
      </form>
        <div>
          {
            users.map(user => <p key={user.id}>{user.id}:- {user.name}, {user.email}</p>)
          }
        </div>
    </>
  )
}

export default App
