import React from 'react'
import './landingPage.css'
const LandingPage = () => {
  return (
    <>
      <div id="home" className="hero-container">
        <img className="sushi-img" src="/shushi.png" alt="" />
        <div className="hero-heading">
          <h1>
            YOUR
            <span>
              <img src="/dot.png" />
            </span>
            ASIAN
            <span>
              <img src="/dot.png" />
            </span>
          </h1>
          <h1>CULINARY DREAM</h1>
          <p>
            Welcome to Our temporary - a place where every plate of ramen <br />
            becomes a real work of art that you can <br />
            enjoy on your lips
          </p>
          <a href="#reservation" className="make-reservation">
            <button>Make Reservation</button>
          </a>
        </div>
      </div>
      <div className="marquee">
        <div className="track">
          <div className="content">
            <span> MADE WITH LOVE 🔥 </span>
            <span> MADE WITH LOVE 🔥 </span>
            <span> MADE WITH LOVE 🔥 </span>
            <span> MADE WITH LOVE 🔥 </span>
            <span> MADE WITH LOVE 🔥 </span>
            <span> MADE WITH LOVE 🔥 </span>
            <span> MADE WITH LOVE 🔥 </span>
            <span> MADE WITH LOVE 🔥 </span>
            <span> MADE WITH LOVE 🔥 </span>
            <span> MADE WITH LOVE 🔥 </span>
            <span> MADE WITH LOVE 🔥 </span>
            <span> MADE WITH LOVE 🔥 </span>
            <span> MADE WITH LOVE 🔥 </span>
            <span> MADE WITH LOVE 🔥 </span>
            <span> MADE WITH LOVE 🔥 </span>
            <span> MADE WITH LOVE 🔥 </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
