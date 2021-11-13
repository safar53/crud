import { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { addUser } from "../api/api";
import { useHistory } from "react-router";

const useStyle = makeStyles({
  header: {
    textAlign: "center",
    fontSize: 30,
    margin: 20,
  },
  container: {
    width: "50%",
    margin: "0 0 0 25%",
    background: "#ddd",
    padding: "0 20px",
    "& > *": {
      marginTop: 20,
    },
  },
});

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const { name, username, email, phone } = user;
  const classes = useStyle();
  const history = useHistory();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addUserDetails = async () => {
    await addUser(user);
    history.push("./crud/all");
  };

  return (
    <>
      <Typography variant="h4" className={classes.header}>
        Add User
      </Typography>
      <FormGroup className={classes.container}>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            type="text"
            name="name"
            value={name}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            type="text"
            name="username"
            value={username}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            type="email"
            name="email"
            value={email}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            type="number"
            name="phone"
            value={phone}
          />
        </FormControl>
        <Button
          onClick={() => addUserDetails()}
          variant="contained"
          color="primary"
        >
          Add User
        </Button>
      </FormGroup>
    </>
  );
};

export default AddUser;
