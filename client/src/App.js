import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navigate from './Navigate'
import SignUp from './SignUp'
import UserProfile from './UserProfile'
import Reservations from './Reservations'
import Main from './Main'
import Login from './Login'
import Shops from './Shops'
import Products from './Products';
// import Map from './Map';

function App() {
  const [user, setUser] = useState({})
  const [shop, setShop] = useState({})
  const [product, setProduct] = useState({})
  const [refreshReso, setRefreshReso] = useState(true)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  const selectedShop = (shop) => {setShop(shop)}
  const selectedProduct = (product) => {setProduct(product)}

  // if (!user) return <Login />

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
          exact path="/"
          element={<Login
            setUser={setUser}
          />}
        />
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
            refreshReso={refreshReso}
            setRefreshReso={setRefreshReso}
          />}
        />
        <Route 
          exact path="/products/:id"
          element={<Products 
            user={user}
            product={product}
            refreshReso={refreshReso}
            setRefreshReso={setRefreshReso}
          />}
        />
        <Route 
          exact path="/shops/:id"
          element={<Shops 
            user={user}
            shop={shop}
            refreshReso={refreshReso}
            setRefreshReso={setRefreshReso}
          />}
        />
        <Route 
          exact path="/main"
          element={<Main 
            user={user}
            selectedShop={selectedShop}
            selectedProduct={selectedProduct}
          />}
        />
      </Routes>
  </div>
  );
}

export default App;
