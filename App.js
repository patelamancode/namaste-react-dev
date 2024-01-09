import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Episode 4
// ==========================
// creating food ordering app
// Header
//  @ Logo
//  @ link section
// Body
//  @ search
//  @ restro-container
//   && restro-card
//    --- restro-img
//    --- resto-name
//    --- cuisine
//    --- rating
//    --- delivery time
// Footer
//  @ coyright
//  @ contact-info
//  @ address
// ==========================
// building components

// Styles
const Restro_container_styles = {
  backgroundColor: "yellow",
};

const Header = () => {
  return (
    <div className="header">
      <img
        className="app-logo"
        alt="app-logo-image"
        src="https://cdn.dribbble.com/users/8522921/screenshots/18035105/media/3a9d2448aef379118be3d19801cf2cb2.jpg?resize=400x0"
      />
      <div className="nav-link">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// child  components
const RestroCard = ({ restroName, cuisine, rating, time, restroImage }) => {
  return (
    <div className="card">
      <img className="restro-image" alt="restro-image" src={restroImage} />
      <h3>{restroName}</h3>
      <h4>{cuisine}</h4>
      <p>{rating} Start</p>
      <p>{time} mins</p>
    </div>
  );
};
const RestroContainer = () => {
  return (
    <div className="restro-container">
      <RestroCard
        restroName="Yummy Kitchen"
        cuisine="North Indian, chines"
        rating="4"
        time="32"
        restroImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/fw8lo5clwgoywor5xvsv"
      />
      <RestroCard
        restroName="Yummy2 Kitchen"
        cuisine="North Indian, chines"
        rating="4"
        time="32"
        restroImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/fw8lo5clwgoywor5xvsv"
      />
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      {/* search */}
      <p>search section</p>
      <RestroContainer />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h4>@C Copy Rights</h4>
      <h4>Address</h4>
      <h4>Contact Info</h4>
    </div>
  );
};

const FoodAppLayout = () => {
  return (
    <div className="Food-app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

root.render(<FoodAppLayout />);
