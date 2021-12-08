import classes from "./UsersList.module.css"
import Card from "../UI/Card";


const UserList = (props) => {
  return (
    <Card className={classes.users}>
      {props.usersList.map((user) => (
        <li key={user.name}>
          Name:{user.name}, Age:{user.age}
        </li>
      ))}
    </Card>
  );
};

export default UserList;
