import { useState } from "react";
import NewUsers from "./componenets/Users/AddUser";
import UserList from "./componenets/Users/userList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserToArray = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };

  return (
    <>
      <NewUsers list={addUserToArray} />
      <UserList usersList={usersList} />
    </>
  );
}

export default App;
