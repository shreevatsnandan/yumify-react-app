import React, { useState } from 'react';
import './Menud.css';
import dishesData from './dishes.json';

const Menu = () => {
  const [selectedType, setSelectedType] = useState('All');

  function handleTypeChange(type) {
    setSelectedType(type);
  }

  const filteredDishes = selectedType === 'All' ? dishesData : dishesData.filter(dish => dish.type === selectedType);

  return (
    <div>
      <div className='menu-head'><h2>Menu</h2></div>
      <div className="buttons">
        <button onClick={() => handleTypeChange('All')}>All</button>
        <button onClick={() => handleTypeChange('Starter')}>Starters</button>
        <button onClick={() => handleTypeChange('Main Course')}>Main Courses</button>
        <button onClick={() => handleTypeChange('Drink')}>Drinks</button>
        <button onClick={() => handleTypeChange('Dessert')}>Desserts</button>
      </div>
      <div className="dish-container">
        {filteredDishes.map((dish, index) => (
          <div key={index} className="dish-card">
            <img src={dish.picture} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>Price: Rs. {dish.price}</p>
            <div className='order-btn'>
                <button>Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
