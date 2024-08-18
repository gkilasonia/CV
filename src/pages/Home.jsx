import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import avatar from "../../src/images/pictures/avatar.jpg";

const Home = () => {
  const navigate = useNavigate();
  const goToCV = () => {
    navigate("/cv");
  };

  return (
    <div className="background">
      <div className="home-container">
        <Avatar alt="My avatar" src={avatar} sx={{ width: 160, height: 160 }} />
        <h1 className="name">Giorgi Kilasonia</h1>
        <h2 className="profession">Military - Instructor - Course Director</h2>
        <p className="narative">
          Joint Exercise NCO - J3 Operational Planning Department - General
          Staff
        </p>
        <button className="know-more" onClick={goToCV}>
          Know More
        </button>
      </div>
    </div>
  );
};

export default Home;
