import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./SignUp.css";
import Headline from "../components/Headline";
import Input from "../components/Input";
import { addUser, login } from "../api/api";
import Alert from "../components/Alert";
import MyAlert from "../components/Alert";
import { useNavigate } from "react-router-dom";
import { authAction } from "../store/authSlice";
const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alertObject, setAlert] = useState({
    lable: "",
    showAlert: false,
    cssClass: "",
  });
  const [inputs, setInputs] = useState({
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
      password: inputs.password,
      email: inputs.email,
    };
    const result = await login(obj);
    if (result === "User Exist") {
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
          <Headline lable="Login" />
        </div>
        <div className="inputs">
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
export default Login;
