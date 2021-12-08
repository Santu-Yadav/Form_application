import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
// import UserList from "./userList";

const NewUsers = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid data entry",
        message: "Name and Age field cannot be empty",
      });
      return;
    }
    if (+userAge < 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid age",
      });
      return;
    }
    props.list(userName, userAge);
    console.log(userName, userAge);
    setUserName("");
    setUserAge("");
  };

  const nameHandler = (event) => {
    // console.log(event.target.value);
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setUserAge(event.target.value);
  };

  const handleModal = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} handleModal={handleModal}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userName}
            onChange={nameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userAge}
            onChange={ageHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default NewUsers;
