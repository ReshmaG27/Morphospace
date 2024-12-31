import React from "react";
import './about.css';

const AboutUs = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="heading">
        <div className="animated-logo">
          <img src="logo.png" alt="Logo" className="logo" />
        </div>
        <h1 className="title fade-in">Morphospace</h1>
        <p className="tagline slide-in">
          Empowering creativity and transforming design ideas into reality
        </p>
      </div>

      {/* Content Section */}
      <div className="container">
        <div className="section fade-in">
          <h2 className="section-title">What We Do</h2>
          <p>
            Our innovative platform bridges the gap between imagination and reality by offering a state-of-the-art{" "}
            <strong>Custom Furniture Configurator</strong> tailored for interior designers.
          </p>
          <ul className="list">
            <li className="list-item list-item-animate">
              <strong>Interactive 3D Models:</strong> Customize dimensions, materials, and colors with precision.
            </li>
            <li className="list-item list-item-animate">
              <strong>Room Layout Integration:</strong> Upload room dimensions and visualize furniture in context, ensuring a perfect fit for every design.
            </li>
            <li className="list-item list-item-animate">
              <strong>Real-Time Cost Estimation:</strong> Make informed decisions with transparent pricing that updates with every customization.
            </li>
            <li className="list-item list-item-animate">
                <strong>Order Management:</strong> Seamlessly place and track furniture orders directly through our platform.
            </li>
            <li className="list-item list-item-animate">
                <strong>Collaboration Features:</strong> Share designs with clients for feedback and refine projects collaboratively.            </li>
            <li className="list-item list-item-animate">
                <strong>Augmented Reality (AR):</strong> Visualize furniture in real-life spaces through your mobile device for an immersive experience.
            </li>
          </ul>
        </div>

        <div className="section fade-in">
          <h2 className="section-title">Our Vision</h2>
          <p>
            We believe that designing beautiful and functional spaces should be an effortless and enjoyable process.
          </p>
        </div>

        <div className="section fade-in">
          <h2>Our Vision</h2>
            <p>
                  We believe that designing beautiful and functional spaces should be an effortless and enjoyable process. By merging technology and creativity, we aim to redefine the furniture customization experience for designers and their clients worldwide.
            </p>
          <ul className="list">
            <li className="list-item list-item-animate">
                 <strong>User-Centric Design:</strong> Our platform is intuitive, efficient, and designed with interior designers in mind.
            </li>
            <li className="list-item list-item-animate">
                <strong>Innovative Tools:</strong> From 3D modeling to AR integration, we leverage advanced technologies to enhance your workflow.            </li>
            <li className="list-item list-item-animate">
                <strong>End-to-End Solutions:</strong> From customization to order placement, we provide a complete solution for your furniture needs.
            </li>
            <li className="list-item list-item-animate">
                <strong>Collaboration Features:</strong> Share designs with clients for feedback and refine projects collaboratively.
            </li>
            <li className="list-item list-item-animate">
                <strong>Collaboration-Friendly:</strong> Our tools foster seamless communication between designers and clients.     
            </li>
          </ul>
        </div>
      </div>

    
    </div>
  );
};

export default AboutUs;
