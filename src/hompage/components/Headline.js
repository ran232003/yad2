import React from "react";
import { Button } from "react-bootstrap";
import "./Headline.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Headline = (props) => {
  const navigate = useNavigate();

  const user = useSelector((state) => {
    return state.auth.user;
  });
  const link = user.eamil === "undefined" ? "/signup" : "/main";
  const handleStarted = (e) => {
    e.preventDefault();
    navigate(link);
  };
  console.log("link", link);
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div className="hero-container">
      <h1>WELCOME TO YAD2</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" onClick={handleStarted}>
          GET STARTED
        </Button>
        {user === "undefined" ? (
          <Button variant="light" className="btns" onClick={handleLogin}>
            Login <i className="far fa-play-circle" />
          </Button>
        ) : null}
      </div>
    </div>
  );
};
export default Headline;
