import React from 'react';
import profileImage from '../images/se-female.jpg'; // Replace with your image path

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Dahami Nethsarani, a passionate Computer Engineering student.</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
      <div className="home-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;