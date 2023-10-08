import "./Testimonial.css";
import { testimonialsData } from "../data/testimonialsData";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import React from "react";
import { useState } from "react";

import { motion } from "framer-motion";

const transition = { type: "spring", duration: 3 };

const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;

  const handleLeftArrow = () => {
    if (selected === 0) {
      setSelected(selected + tlength - 1);
      return;
    }

    setSelected(selected - 1);
  };

  const handleRightArrow = () => {
    if (selected === tlength - 1) {
      setSelected(0);
      return;
    }

    setSelected(selected + 1);
  };

  return (
    <div className="testimonial" id="testimonials">
      <div className="left-t">
        <span style={{ color: "var(--orange)", fontWeight: "bold" }}>
          TESTIMONIALS
        </span>
        <span className="stroke-text">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          <span> - {testimonialsData[selected].status}</span>
        </span>
      </div>

      <div className="right-t">
        <motion.div
          className="outline"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          duration={{ ...transition, duration: 2, type: "tween" }}
        ></motion.div>
        <motion.div
          className="filled"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          duration={{ ...transition, duration: 2, type: "tween" }}
        ></motion.div>
        <img alt="" src={testimonialsData[selected].image} />
        <div className="arrows">
          <img alt="" src={leftArrow} onClick={handleLeftArrow} />
          <img alt="" src={rightArrow} onClick={handleRightArrow} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
