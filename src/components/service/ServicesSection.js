import React, { useState, useEffect } from "react";
import './ServicesSection.css'

import c1 from '../../images/p1.jpeg';
import c2 from '../../images/roomlayout1.jpeg';
import c3 from '../../images/cost.jpeg';
import c4 from '../../images/order1.jpeg';
import c5 from '../../images/collab1.jpeg';
import c6 from '../../images/ar1.jpeg';


function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [c1, c2, c3,c4,c5,c6];  
  const titles = ["3D Model Customization", "Room Layout Integration", "Real-Time Cost Estimation","Order Management","Collaboration","Augmented Reality (AR) Integration"];
  const descriptions = [
    'Our platform allows you to customize furniture to your exact needs and preferences. Using interactive 3D tools, you can modify dimensions, select materials, and choose colors in real time. Visualize every detail as you create furniture that complements your style and fits seamlessly into your space.',
    'Transform your design vision into reality with our room layout integration feature. Upload room dimensions, arrange furniture virtually, and preview how it fits within your space. This ensures every piece is tailored to your specific room dimensions and aesthetics.',
    'Stay in control of your budget with our real-time cost estimation tool. As you customize furniture, the system calculates costs instantly based on materials, finishes, and dimensions, providing a detailed breakdown to help you make informed decisions.',
    'Simplify your workflow with our streamlined order management system. Place orders directly with trusted manufacturers and track the production process from start to finish, ensuring timely updates and a hassle-free experience.',
    'Enhance teamwork and client communication with our built-in collaboration tools. Share designs with clients, gather feedback through commenting features, and make adjustments in real-time, ensuring a smooth and efficient design process.',
    'Bring your designs to life with our AR integration. Use your mobile device to project custom furniture into real-world spaces, giving you and your clients a realistic preview of how the pieces will look and feel in their intended setting.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="services" className="services-section">
      <div className="text-content">
        <h2>OUR SERVICES</h2>
        <div className="context">
        <div className="slider-title">{titles[currentIndex]}</div>
        <p>{descriptions[currentIndex]}</p>
        </div>
       
      </div>
      <div className="image-slider">
        <div className="slider-images">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Service ${index + 1}`}
              className={currentIndex === index ? "active" : ""}
            />
          ))}
        </div>
        <button className="prev-btn" onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>❮</button>
        <button className="next-btn" onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>❯</button>
      </div>
      
    </section>
  );
}

export default ServicesSection;
