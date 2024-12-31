import React from 'react';
import './Categoryitem.css'; 

import card1 from '../../images/trolley_main.png';
import card8 from '../../images/card8.png';
import kitchen from '../../images/barcarts_main.png';
import office from '../../images/office.png';
import dining from '../../images/dining.png';
import bedroom from '../../images/bedroom.png';

const items = [
    { title: 'Trolleys', description: 'A versatile and stylish trolley for transporting drinks, food, or other essentials around your home.', image: card1 },
    { title: 'Cupboard', description: 'A spacious cupboard for storing kitchenware, utensils, or other household items.', image: card8 },
    { title: 'Bar carts', description: 'A functional and chic bar cart for serving drinks and storing barware in your living or dining area.', image: kitchen },
    { title: 'China cabinet', description: 'An elegant china cabinet designed to display fine china, glassware, and dinnerware in your dining room.', image: office },
    { title: 'Filing cabinets', description: 'A practical filing cabinet for organizing documents, files, and office supplies in your workspace.', image: dining },
    { title: 'Conference table', description: 'A large conference table perfect for meetings, discussions, or collaborative work in professional environments.', image: bedroom },
  ];

const KRoomItems = () => {
  return (
    <div className="living-room-container">
      <h1>Kitchen Items</h1>
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

export default KRoomItems;
