import React from "react";

const Experience = ({ unit, years, position, narative }) => {
  return (
    <div className="exper-container">
      <div className="exper-left-column">
        <h3 className="exper-header">{unit}</h3>
        <p className="years">{years}</p>
      </div>
      <div className="exper-right-column">
        <h3 className="exper-header">{position}</h3>
        <p className="text">{narative}</p>
      </div>
    </div>
  );
};

export default Experience;
