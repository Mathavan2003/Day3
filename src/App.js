/*eslint-disable*/
import React, { useState}from 'react';
import './App.css';
import {Header,Nav,Beverages,Pastries,Cart,Sandwiches} from './foods';
function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(item) {
    setCartItems([...cartItems, item]);
  }

  const beverages = [
    { id: 1, name: 'Latte', description: 'Espresso and steamed milk', price: 3.50 },
    { id: 2, name: 'Cappuccino', description: 'Espresso, steamed milk, and foam', price: 4.00 },
    { id: 3, name: 'Hot Chocolate', description: 'Chocolate and steamed milk', price: 3.00 }
  ];

  const pastries = [
    { id: 4, name: 'Croissant', description: 'Buttery and flaky', price: 2.00 },
    { id: 5, name: 'Muffin', description: 'Blueberry or chocolate chip', price: 2.50 },
    { id: 6, name: 'Scone', description: 'Apricot or cranberry', price: 2.75 }
  ];

  const sandwiches = [
    { id: 7, name: 'BLT', description: 'Bacon, lettuce, and tomato', price: 5.50 },
    { id: 8, name: 'Turkey Club', description: 'Turkey, bacon, lettuce, and tomato', price: 6.25 },
    { id: 9, name: 'Veggie Wrap', description: 'Lettuce, tomato, cucumber, and hummus', price: 5.00 }
  ];

  return (
    <div className="App">
      <Header title="My Coffee Shop" />
      <Nav />
      <Beverages items={beverages} onAddToCart={handleAddToCart} />
      <Pastries items={pastries} onAddToCart={handleAddToCart} />
      <Sandwiches items={sandwiches} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;