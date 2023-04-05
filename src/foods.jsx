import React, { useState } from 'react';

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#cart">Cart</a></li>
      </ul>
    </nav>
  );
}

function Beverages(props) {
  const [beverages, setBeverages] = useState(props.items);

  return (
    <section id="beverages">
      <h2>Beverages</h2>
      <div className="menu-items">
        {beverages.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );

  function handleAddToCart(item) {
    props.onAddToCart(item);
    setBeverages(beverages.filter(i => i.id !== item.id));
  }
}

function Pastries(props) {
  const [pastries, setPastries] = useState(props.items);

  return (
    <section id="pastries">
      <h2>Pastries</h2>
      <div className="menu-items">
        {pastries.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );

  function handleAddToCart(item) {
    props.onAddToCart(item);
    setPastries(pastries.filter(i => i.id !== item.id));
  }
}

function Sandwiches(props) {
  const [sandwiches, setSandwiches] = useState(props.items);

  return (
    <section id="sandwiches">
      <h2>Sandwiches</h2>
      <div className="menu-items">
        {sandwiches.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );

  function handleAddToCart(item) {
    props.onAddToCart(item);
    setSandwiches(sandwiches.filter(i => i.id !== item.id));
  }
}

function Cart(props) {
  return (
    <section id="cart">
      <h2>Cart</h2>
      <ul>
        {props.cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </section>
  );
}

export {Header,Nav,Beverages,Pastries,Cart,Sandwiches};