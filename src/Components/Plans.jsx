import React from "react";
import "./Plans.css";
import { useState } from "react";
import { plansData } from "../data/plansData";
import whiteTick from "../assets/whiteTick.png";
import RightArrow from "../assets/rightArrow.png";
import { useMediaQuery } from "react-responsive";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";

const Plans = () => {
  const isScreen800 = useMediaQuery({
    query: "(min-width: 800px)",
  });

  const isScreen600 = useMediaQuery({
    query: "(min-width:600px)",
  });
  const [selected, setSelected] = useState(0);

  const tlength = plansData.length;

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
    <div className="plans-container" id="plans">
      <div className="blur plans-blur1"></div>
      <div className="blur plans-blur2"></div>

      <div className="plans-header" style={{ gap: "1.2rem" }}>
        <span>READY </span>
        <span className="stroke-text">TO START</span>
        <span className="stroke-text">YOUR JOURNEY</span>
        <span className="stroke-text">NOW</span>
        <span>WITHUS</span>
      </div>
      {(isScreen800 || !isScreen600) && (
        <div className="plans">
          {plansData.map((plan, i) => (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>
              <div className="features">
                {plan.features.map((feature, i) => (
                  <div className="feature">
                    <img alt="" src={whiteTick} />
                    <span key={i}>{feature}</span>
                  </div>
                ))}
              </div>
              <div>
                <span>See more benefits</span>
                <img alt="" src={RightArrow} />
              </div>
              <button className="btn">Join Now</button>
            </div>
          ))}
        </div>
      )}

      {!isScreen800 && isScreen600 && (
        <div className="plan-container-800">
          <div className="plans-800">
            {plansData[selected].icon}
            <span>{plansData[selected].name}</span>
            <span>$ {plansData[selected].price}</span>
            <div className="features">
              {plansData[selected].features.map((feature, i) => (
                <div className="feature">
                  <img alt="" src={whiteTick} />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits</span>
              <img alt="" src={RightArrow} />
            </div>
            <button className="btn">Join Now</button>
          </div>

          <div className="plan800-arrow">
            <img alt="" src={leftArrow} onClick={handleLeftArrow} />
            <img alt="" src={rightArrow} onClick={handleRightArrow} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Plans;
