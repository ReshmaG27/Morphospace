import React from 'react';
import './Categoryitem.css'; 
import card1 from '../../images/bookcases_main.png';
import card8 from '../../images/lounge_main.png';
import kitchen from '../../images/office_desk_main.png';
import office from '../../images/rollingchair_main.png';
import dining from '../../images/filling_cabinets_main.png';
import bedroom from '../../images/conferencetable_main.png';

const items = [
    { title: 'Bookcases', description: 'A stylish and functional bookcase perfect for organizing books, decor, and more.', image: card1 },
    { title: 'Lounge', description: 'A comfortable lounge seating area designed for relaxation and conversation.', image: card8 },
    { title: 'Office desk', description: 'A functional and spacious desk ideal for work, study, or home office use.', image: kitchen },
    { title: 'Rolling chair', description: 'An ergonomic rolling chair designed for comfort and mobility in the office or home workspace.', image: office },
    { title: 'Filing cabinets', description: 'A practical filing cabinet for organizing important documents and office supplies.', image: dining },
    { title: 'Conference table', description: 'A large conference table perfect for meetings, discussions, and collaborative work in professional environments.', image: bedroom },
  ];
  

const OfficeItems = () => {
  return (
    <div className="living-room-container">
      <h1>Office Items</h1>
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

export default OfficeItems;
