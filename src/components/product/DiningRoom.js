import React from 'react';
import './Categoryitem.css'; 

import card1 from '../../images/dinningset_main.png';
import card8 from '../../images/dinningchair_main.png';
import kitchen from '../../images/barcarts_main.png';
import office from '../../images/chinacabinet_main.png';
import dining from '../../images/sideboards_main.png';
import bedroom from '../../images/buffet_main.png';

const items = [
  { title: 'Dining set', description: 'A stylish and comfortable dining set perfect for family meals or gatherings.', image: card1 },
  { title: 'Dining chair', description: 'A set of comfortable dining chairs designed for long hours of dining and conversation.', image: card8 },
  { title: 'Bar carts', description: 'A functional and chic bar cart for serving drinks and storing barware in your living or dining area.', image: kitchen },
  { title: 'China cabinet', description: 'An elegant china cabinet for displaying fine china, glassware, and dinnerware in your dining room.', image: office },
  { title: 'Sideboards', description: 'A spacious sideboard for storing dining essentials like silverware and dishes, while adding decorative elements.', image: dining },
  { title: 'Buffet table', description: 'A stylish buffet table ideal for serving food, storing dinnerware, and organizing your dining area.', image: bedroom },
];


const DiningRoomItems = () => {
  return (
    <div className="living-room-container">
      <h1>Dining Room Items</h1>
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

export default DiningRoomItems;
