import React from 'react';
import './Categoryitem.css'; 

import card1 from '../../images/swing_main.png';
import card8 from '../../images/table_main.png';
import kitchen from '../../images/table_chair_set.png';
import office from '../../images/seater_main.png';
import dining from '../../images/plastic_chair_main.png';
import bedroom from '../../images/lounge_main.png';

const items = [
    { title: 'Swings', description: 'A comfortable swing for outdoor relaxation and enjoyment.', image: card1 },
    { title: 'Table', description: 'A sturdy dining table for enjoying meals and gatherings.', image: card8 },
    { title: 'Table and Chair sets', description: 'A stylish table and chair set perfect for dining and family meals.', image: kitchen },
    { title: 'Outdoor seater', description: 'Durable outdoor seating for enjoying fresh air and relaxing outdoors.', image: office },
    { title: 'Plastic chair', description: 'Lightweight and easy-to-maintain plastic chairs suitable for various settings.', image: dining },
    { title: 'Lounges', description: 'Comfortable lounge seating for relaxing and unwinding indoors.', image: bedroom },
  ];
  

const OutdoorItems = () => {
  return (
    <div className="living-room-container">
      <h1>Outdoor Items</h1>
      <div className="grid-container">
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            <img src={item.image} alt={item.title} className="item-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutdoorItems;
