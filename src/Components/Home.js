import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <div className="home-banner-container">

        {/* background image */}
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>

        {/* left side content */}
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        
        {/* right side content */}
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>

      </div>

    </div>
  );
};

export default Home;
