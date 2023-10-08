import React from "react";
import "./Hero.css";
import Header from "./Header/Header";
import hero_image from "../assets/hero_image.png";
import Calories from "../assets/calories.png";
import Heart from "../assets/heart.png";
import hero_image_back from "../assets/hero_image_back.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  const buttonStyle =
    window.innerWidth > 600
      ? { position: "absolute", top: "2rem", right: "3rem" }
      : { position: "absolute", top: "2rem", left: "15rem" };
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* add container */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in town</span>
        </div>

        {/* hero text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span> Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+ 1000</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <Link to="joins" span={true} smooth={true}>
          <button className="btn" style={buttonStyle}>
            Join Now
          </button>
        </Link>

        <div className="heart-rate">
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        {/* hero image */}
        <img src={hero_image} alt="hero_image" className="hero-image" />
        <img
          src={hero_image_back}
          alt="hero_image_back"
          className="hero-image-back"
        />
        <motion.div
          className="calories"
          initial={{}}
          whileInView={{}}
          transition={{}}
        >
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 Cal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
