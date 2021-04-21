import React, { useState } from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import Button from "../UI/Button";

const User = ({ addUser, modalOpen }) => {
  const [inputs, setInputs] = useState({ name: "", age: "" });
  const [error, setError] = useState({ state: false, msg: "" });

  const nameChangeHandler = (e) => {
    setInputs((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };
  const ageChangeHandler = (e) => {
    setInputs((prevState) => {
      return { ...prevState, age: e.target.value };
    });
  };



  const submitHandler = (e) => {
    e.preventDefault();
    if (inputs.name === "" && inputs.age === "") {
      setError((prevState) => {
        return { ...prevState, state: true, msg: "Please enter a value" };
      });
      setTimeout(() => {
        setError({ ...error, state: false, msg: "" });
      }, 3000);
    } else if (inputs.age < 1) {
      modalOpen();
    } else {
      addUser(inputs);
      setInputs((prevState) => {
        return {
          ...prevState,
          name: "",
          age: "",
        };
      });
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        {error.state && <Error className="error">{error.msg}</Error>}
        <Label>Username</Label>
        <Input
          type="text"
          value={inputs.name}
          onChange={nameChangeHandler}
        ></Input>
        <Label>Age (Years)</Label>
        <Input
          type="text"
          value={inputs.age}
          onChange={ageChangeHandler}
        ></Input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Error = styled.p`
  color: coral;
`;

const Input = styled.input`
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;

  &:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

export default User;
