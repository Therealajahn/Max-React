import React, { useState } from "react";
import Card from "../UI/Card";
import cardStyle from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    //in the tutorial these are enteredName.trim().length === 0
    if (!enteredName || !enteredAge) {
      return;
    }
    //+ converts enteredAge string to a number
    if (+enteredAge < 1) {
      return;
    }
    setEnteredName("");
    setEnteredAge("");
  };

  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const whenNameChanges = (event) => {
    setEnteredName(event.target.value);
  };

  const whenAgeChanges = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    // apply input styling from Card CSS Modules so that all cards rendered
    //by this component are given a unique class to style the inputs
    <Card className={cardStyle.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredName}
          onChange={whenNameChanges}
        />

        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={whenAgeChanges}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
