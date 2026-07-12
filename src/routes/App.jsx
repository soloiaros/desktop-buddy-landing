import './App.css'
import Header from '../Components/Header'
import { Outlet } from 'react-router'
import { useState, useEffect } from 'react'

function App() {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    fetch('./store-data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch store items from database.');
        }
        return response;
      })
      .then(response => response.json())
      .then(response => {
        const itemObject = {};
        response.forEach((item) => {
          itemObject[item.name] = 0;
        });
        setCartItems(itemObject);
      });
  }, [])

  return (
    <>
    <Header cartItems={cartItems} />
    <Outlet context={{cartItems, setCartItems}} />
    <footer>
    </footer>

    </>
  )
}

export default App
