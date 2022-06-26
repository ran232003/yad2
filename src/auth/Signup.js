import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "./SignUp.css";
import Headline from "../components/Headline";
import Input from "../components/Input";
const SignUp = (props) => {
  const [inputs, setInputs] = useState({
    name: "",
    nameValid: false,
    email: "",
    emailValid: false,
    password: "",
    passwordValid: false,
  });
  const test =
    "973904381117-45ognoieo8hqu6sk3us02poi78hk8mid.apps.googleusercontent.com";
  const handleInput = (input, fieldName) => {
    let validString = "Valid";
    console.log(fieldName);
  };
  return (
    <div className="allScreen">
      <div className="signup">
        <div className="centerText">
          <Headline lable="Sign Up" />
        </div>
        <div className="inputs">
          <Input
            lable="Full Name"
            type="text"
            fieldName="name"
            placeHolder="Enter Full Name"
            errorMessage="Requierd"
            handleInput={handleInput}
          />
          <Input
            lable="Email Address"
            type="email"
            fieldName="email"
            placeHolder="Enter Email Address"
            errorMessage="Requierd"
            handleInput={handleInput}
          />
          <Input
            handleInput={handleInput}
            lable="Password"
            type="password"
            placeHolder="Enter Password"
            errorMessage="Requierd"
            fieldName="password"
          />
        </div>
        <div className="buttons-flex">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
