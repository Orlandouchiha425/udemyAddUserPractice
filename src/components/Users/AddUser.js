import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useState } from "react";
import style from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
    <ErrorModal title='An Error Occured!' message= "Something Went Wrong!"/>
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="text"
          value={enteredAge}
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit"> Add User</Button>
      </form>
    </Card>
    </div>
  );
}

export default AddUser;
