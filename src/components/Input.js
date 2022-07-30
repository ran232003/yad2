import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { checkInput } from "../HelperFunc";

const Input = (props) => {
  const { placeHolder, type, lable, errorMessage, fieldName } = props;
  const [error, setError] = useState({
    isValid: false,
    countError: 1,
  });
  const [input, setInput] = useState({
    value: "",
    valid: false,
  });
  const handleInput = (e) => {
    let value = e.target.value.trim();
    const valid = checkInput(lable, value);
    if (valid) {
      if (error.countError > 0) {
        setError(() => {
          return { isValid: false, countError: 1 };
        });
      }
    } else {
      if (error.countError > 0) {
        setError(() => {
          return { isValid: true, countError: 1 };
        });
      }
    }
    setInput(() => {
      return { valid, value };
    });
    props.handleInput({ valid, value }, fieldName);
  };
  const onInput = () => {
    if (input.valid === false) {
      setError(() => {
        return { isValid: true, countError: 1 };
      });
    } else {
      setError(() => {
        return { isValid: false, countError: 1 };
      });
    }
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{lable}</Form.Label>
          <Form.Control
            type={type}
            placeholder={placeHolder}
            onChange={handleInput}
            isInvalid={error.isValid}
            onBlur={onInput}
          />

          <Form.Control.Feedback type="invalid">
            {errorMessage}
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
    </div>
  );
};
export default Input;
