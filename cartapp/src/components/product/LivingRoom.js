import React from 'react';
import { Link } from 'react-router-dom';
import './Categoryitem.css'; 
// import { useEffect } from "react";


import card1 from '../../images/sofa_main.png';
import card8 from '../../images/chair_main.png';
import kitchen from '../../images/coffee_table_main.png';
import office from '../../images/lamp_main.png';
import dining from '../../images/bookshelf_main.png';
import bedroom from '../../images/tvunits_main.png';

const items = [
  { title: 'Sofa', description: 'A comfortable sofa perfect for relaxation and lounging.', image: card1, link: '/sofa' },
  { title: 'Chairs', description: 'A set of chairs offering support and comfort for any room.', image: card8, link: '/chair' },
  { title: 'Coffee Table', description: 'A stylish coffee table made of wood, ideal for drinks and decor.', image: kitchen, link: '/coffeetable' },
  { title: 'Lamp', description: 'A modern lamp that provides warm, ambient lighting for any space.', image: office, link: '/lamp' },
  { title: 'Bookshelf', description: 'A tall bookshelf designed for organizing books and displaying decor.', image: dining, link: '/bookshelf' },
  { title: 'TV Units', description: 'A sturdy wooden TV unit for your television and media equipment.', image: bedroom, link: '/tvunits' },
];


const LivingRoomItems = () => {

  // useEffect(() => {
  //   window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  // }, []);
  
  return (
    <div className="living-room-container">
      <h1>Living Room Items</h1>
      <div className="grid-container">
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            <Link to={item.link}>
              <img src={item.image} alt={item.title} className="item-image" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivingRoomItems;
