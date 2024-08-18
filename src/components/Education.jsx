import React from "react";

const Education = ({ year, profession, narative }) => {
  return (
    <div className="educ-container">
      <div className="left-column">
        <h3 className="educ-header">{year}</h3>
        <div className="educ-line"></div>
      </div>
      <div className="right-column">
        <h3 className="educ-header">{profession}</h3>
        <p className="text">{narative}</p>
      </div>
    </div>
  );
};

export default Education;
