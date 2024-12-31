import React from 'react';
import './Categoryitem.css'; 
import card1 from '../../images/bed_main.png';
import card8 from '../../images/wardrobe_main.png';
import kitchen from '../../images/dressing_main.png';
import office from '../../images/bedside_main.png';
import dining from '../../images/chestdrawer_main.png';
import bedroom from '../../images/nightstand_main.png';

const items = [
    { title: 'Beds', description: 'A comfortable bed designed for restful sleep and relaxation.', image: card1 },
    { title: 'Chest drawers', description: 'A sturdy chest of drawers for storing clothes, linens, or other personal items.', image: dining },
    { title: 'Dressing Table', description: 'A stylish dressing table with mirrors and storage for beauty essentials.', image: kitchen },
    { title: 'Bedside tables', description: 'Compact bedside tables for keeping essentials like lamps, clocks, and books within reach.', image: office },
    { title: 'Wardrobes', description: 'A spacious wardrobe for organizing clothes, shoes, and accessories.', image: card8 },
    { title: 'Night stands', description: 'Nightstands offering storage and a surface for lamps, clocks, and other bedside necessities.', image: bedroom },
  ];
  

const BedRoomItems = () => {
  return (
    <div className="living-room-container">
      <h1>Bedroom Items</h1>
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

export default BedRoomItems;
