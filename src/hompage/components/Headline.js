import React from "react";
import { Button } from "react-bootstrap";
import "./Headline.css";
import { useNavigate } from "react-router-dom";
const Headline = (props) => {
  const navigate = useNavigate();
  const handleStarted = (e) => {
    e.preventDefault();
    navigate("/add-website");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/web-sites");
  };
  return (
    <div className="hero-container">
      <h1>WELCOME TO YAD2</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" onClick={handleStarted}>
          GET STARTED
        </Button>
        <Button variant="light" className="btns" onClick={handleLogin}>
          Login <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};
export default Headline;
