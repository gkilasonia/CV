import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Skills.css";
import edit from "../../src/images/icons/Edit.png";
import SkillBar from "../components/SkillBar";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState("");
  const [skillRange, setSkillRange] = useState(null);

  const openEdit = () => {};
  const navigate = useNavigate();
  const goToCV = () => {
    navigate("/cv");
  };
  const addSkill = () => {
    if (skillRange <= 20) {
      const bar = <div className="bar20">{skillName}</div>;
      setSkills([...skills, bar]);
    } else if (skillRange <= 40) {
      const bar = <div className="bar40">{skillName}</div>;
      setSkills([...skills, bar]);
    } else if (skillRange <= 60) {
      const bar = <div className="bar60">{skillName}</div>;
      setSkills([...skills, bar]);
    } else if (skillRange <= 80) {
      const bar = <div className="bar80">{skillName}</div>;
      setSkills([...skills, bar]);
    } else if (skillRange <= 100) {
      const bar = <div className="bar100">{skillName}</div>;
      setSkills([...skills, bar]);
    } else {
      const bar = <div className="bar100">Please enter valid range</div>;
      setSkills([...skills, bar]);
    }
  };

  return (
    <section className="skills-container">
      <div className="header-container">
        <h3 className="skill-header">Skills</h3>
        <button className="open-edit" onClick={openEdit}>
          <img src={edit} alt="Open edit icon" />
          Open edit
        </button>
      </div>
      <div className="skills-form">
        <Box component="form" noValidate autoComplete="off">
          <div className="input-container">
            <label>Skill name:</label>
            <TextField
              className="input"
              id="outlined-basic"
              type="text"
              label="Enter skill name"
              variant="outlined"
              value={skillName}
              onChange={(e) => {
                setSkillName(e.target.value);
                console.log(skillName);
              }}
            />
          </div>
          <div className="input-container">
            <label>Skill range:</label>
            <TextField
              className="input"
              id="outlined-basic"
              type="number"
              label="Enter skill range from 0 to 100"
              variant="outlined"
              value={skillRange}
              onChange={(e) => {
                setSkillRange(e.target.value);
                console.log(skillRange);
              }}
            />
          </div>
        </Box>
        <button className="add-skill" onClick={addSkill}>
          Add skill
        </button>
      </div>
      <SkillBar skills={skills} />
      <button className="add-skill" onClick={goToCV}>
        Go Back
      </button>
    </section>
  );
};

export default Skills;
