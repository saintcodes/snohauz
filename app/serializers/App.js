import { useState, useEffect } from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navigate from './Navigate'
import SignUp from './SignUp'
import UserProfile from './UserProfile'
import Reservations from './Reservations'
import Main from './Main'
import Login from './Login'

function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log("outside fetch:", user)

  return (
    <div>
    {user && user.username ?
      <Navigate 
        user={user} 
        setUser={setUser}
      /> : <></>
    }
      <Routes>
        <Route 
          exact path="/sign-up"
          element={<SignUp 
            setUser={setUser}
          />}
        />
        <Route 
          exact path="/profile"
          element={<UserProfile 
            user={user}
            setUser={setUser}
          />}
        />
        <Route 
          exact path="/reservations"
          element={<Reservations 
            user={user}
          />}
        />
        <Route 
          exact path="/main"
          element={<Main 
            user={user}
          />}
        />
        <Route exact path="/"
        element={<Login  
          setUser={setUser}
          />}
        />
      </Routes>
  </div>
  );
}

export default App;
