import React from "react";
import "../components/SkillBar.css";

const SkillBar = ({ skills }) => {
  return (
    <>
      <div className="skills">
        <div className="skill">INSTRUCTOR</div>
        <div className="skill">COURSE DIRECTOR</div>
        <div className="skill">PLANNER</div>
        <div className="skill quality-skill">QUALITY ASSURANCE OFFICER</div>
        {skills}
      </div>
      <div className="scale-container">
        <div className="scale"></div>
        <div className="scale"></div>
        <div className="scale"></div>
      </div>
      <div className="scale-measurement">
        <div className="measurement">Beginner</div>
        <div className="measurement measurement-proficient">Proficient</div>
        <div className="measurement measurement-expert">Expert</div>
        <div className="measurement">Master</div>
      </div>
    </>
  );
};

export default SkillBar;
