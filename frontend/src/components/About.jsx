import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className="about-main" id="about">
      <div className="about-bg-image"></div>
      <div className="about-container">
        <div className="about-left">
          <h1>
            Immerse yourself in a culinary journey that combines traditional
            flavors with a modern twist. Our commitment to authenticity, quality
            ingredients, and exceptional service sets us apart as a haven for
            Japanese food enthusiasts.
          </h1>
          <img src="/dot.png" alt="" />
        </div>
        <div className="about-center">
          <div className="animation-container">
            <div className="about-text-span">
              <h2>Authentic</h2>
              <h2>Authentic</h2>
            </div>
            <div className="about-text-span">
              <h2>Beautiful</h2>
              <h2>Beautiful</h2>
            </div>
            <div className="about-text-span">
              <h2>Delicious</h2>
              <h2>Delicious</h2>
            </div>
            <div className="about-text-span">
              <h2 style={{ color: '#da4438' }}>❤</h2>
              <h2 style={{ color: 'white' }}>❤</h2>
            </div>
          </div>
        </div>
        <div className="about-right">
          <h1>
            our story begins with a passion for bringing the rich culinary
            heritage of Japan to your table. Founded 2000, we've spent years
            honing our skills, learning from master chefs, and perfecting
            recipes that showcase the artistry of Japanese gastronomy.
          </h1>
          <img src="/dot.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
