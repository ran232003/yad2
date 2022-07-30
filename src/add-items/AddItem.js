import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Headline from "../components/Headline";
import Input from "../components/Input";
import DropMenu from "./components/DropMenu";
import "./AddItem.css";
import ImageLoader from "./components/ImageLoader";

const AddItem = (props) => {
  const [inputs, setInputs] = useState({
    name: "",
    nameValid: false,
    phone: "",
    phoneValid: false,
    email: "",
    emailValid: false,
    year: "",
    yearValid: false,
    condition: "",
    conditionValid: false,
    type: "",
    typeValid: false,
    file: null,
    fileValid: false,
  });
  const handleInput = (input, fieldName) => {
    let validString = fieldName + "Valid";
    console.log(input, fieldName, validString);
    setInputs(() => {
      return {
        ...inputs,
        [fieldName]: input.value,
        [validString]: input.valid,
      };
    });
  };
  const handleSubmit = () => {};
  const change = (date) => {};
  console.log(inputs, "inside change");
  return (
    <div className="allScreen">
      <div className="signup">
        <div className="centerText">
          <Headline lable="Enter Product" />
        </div>
        <div className="inputs">
          <Input
            lable="Product Name"
            type="text"
            fieldName="name"
            placeHolder="Enter Product Name"
            errorMessage="Requierd"
            handleInput={handleInput}
          />
          <div className="drop">
            <DropMenu
              lable="Product Type"
              items={[
                "electronics",
                "house furniture",
                "transportation",
                "food",
              ]}
              handleInput={handleInput}
              editItem="electronics"
              fieldName="type"
            />
          </div>
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
            lable="Phone Number"
            type="text"
            placeHolder="Enter Phone Number"
            errorMessage="Requierd"
            fieldName="phone"
          />
          <div className="year">
            <Form.Label>Year of Product</Form.Label>
          </div>
          <div className="drop">
            <DropMenu
              lable="Condition"
              items={["New", "Not Used", "Used", "Old"]}
              handleInput={handleInput}
              editItem="New"
              fieldName="condition"
            />
          </div>
          <ImageLoader handleInput={handleInput} fieldName="file" />
        </div>
        <div className="buttons-flex">
          <Button variant="primary" type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
