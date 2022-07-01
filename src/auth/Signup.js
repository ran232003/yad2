import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./SignUp.css";
import Headline from "../components/Headline";
import Input from "../components/Input";
import { addUser } from "../api/api";
import Alert from "../components/Alert";
import MyAlert from "../components/Alert";
import { useNavigate } from "react-router-dom";
import { authAction } from "../store/authSlice";
const SignUp = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alertObject, setAlert] = useState({
    lable: "",
    showAlert: false,
    cssClass: "",
  });
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
    let validString = fieldName + "Valid";
    setInputs(() => {
      return {
        ...inputs,
        [fieldName]: input.value,
        [validString]: input.valid,
      };
    });
  };
  const handleSubmit = async () => {
    const obj = {
      name: inputs.name,
      password: inputs.password,
      email: inputs.email,
    };
    const result = await addUser(obj);
    if (result === "user added") {
      dispatch(authAction.userInit(obj));
      localStorage.setItem("user", JSON.stringify(obj));
      setAlert(() => {
        return { lable: result, cssClass: "success", showAlert: true };
      });
    } else {
      setAlert(() => {
        return { lable: result, cssClass: "danger", showAlert: true };
      });
    }
  };
  const handleNavigate = () => {
    navigate("/main");
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
          <Button variant="primary" type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
      <MyAlert
        handleNavigate={handleNavigate}
        showObject={alertObject}
        className="centerAlert"
      />
    </div>
  );
};
export default SignUp;
