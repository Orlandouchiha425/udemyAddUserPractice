import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useState, useRef } from "react";
import style from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
function AddUser(props) {
const nameInputRef = useRef();
const ageInputRef = useRef();


  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age (non-empty values).",
      });
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please Enter a valid   age (> 0).",
      });
    }
    props.onAddUser(enteredName, enteredUserAge);
    // setEnteredAge("");
    // setEnteredUsername("");
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (

<Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}{" "}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="text"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
      </Wrapper>
  );
}

export default AddUser;
