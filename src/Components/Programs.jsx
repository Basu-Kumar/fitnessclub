import React from "react";
import "./Programs.css";
import { programsData } from "../data/programsData";
import RightArrow from "../assets/rightArrow.png";
import { useMediaQuery } from "react-responsive";

const Programs = () => {
  const isScreen900 = useMediaQuery({
    query: "(min-width:900px)",
  });

  const isScreen600 = useMediaQuery({
    query: "(min-width:600px)",
  });

  return (
    <div className="program" id="programs">
      {/* program header */}
      <div className="program-header">
        <span className="stroke-text">explore our</span>
        <span>programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      {/* program lists */}

      {(isScreen900 || !isScreen600) && (
        <div className="program-categories">
          {programsData.map((program) => (
            <div className="category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img alt="arrow" src={RightArrow} />
              </div>
            </div>
          ))}
        </div>
      )}

      {!isScreen900 && isScreen600 && (
        <div className="prog-cont">
          <div className="program-categories-900">
            {programsData.slice(0, 2).map((program) => (
              <div className="category-900">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now-900">
                  <span>Join Now</span>
                  <img alt="arrow" src={RightArrow} />
                </div>
              </div>
            ))}
          </div>
          <div className="program-categories-900">
            {programsData.slice(2, 4).map((program) => (
              <div className="category-900">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now-900">
                  <span>Join Now</span>
                  <img alt="arrow" src={RightArrow} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Programs;
