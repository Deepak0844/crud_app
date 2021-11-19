import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import * as React from 'react';

//add user
export function AddUser({ user, setUser }) {
  const history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const addUser = () => {
    const newUser = {
      firstname,
      lastname,
      username,
      avatar,
      email,
      designation,
      age,
      gender,
      mobile,
      address,
    };
    console.log(newUser);
    setUser([...user, newUser]);
    history.push("/users");
  };
  return (
    <section className="form">
      <div className="input-form">
        <TextField
          label="First name"
          variant="standard"
          value={firstname}
          onChange={(event) => setFirstname(event.target.value)} />
        <TextField
          label="Last Name"
          variant="standard"
          value={lastname}
          onChange={(event) => setLastname(event.target.value)} />
        <TextField
          label="User Name"
          variant="standard"
          value={username}
          onChange={(event) => setUsername(event.target.value)} />
        <TextField
          label="Avatar"
          variant="standard"
          value={avatar}
          onChange={(event) => setAvatar(event.target.value)} />
        <TextField
          label="Email"
          variant="standard"
          value={email}
          onChange={(event) => setEmail(event.target.value)} />
        <TextField
          label="Designation"
          variant="standard"
          value={designation}
          onChange={(event) => setDesignation(event.target.value)} />
        <TextField
          label="Age"
          variant="standard"
          value={age}
          onChange={(event) => setAge(event.target.value)} />
        <TextField
          label="Gender"
          variant="standard"
          value={gender}
          onChange={(event) => setGender(event.target.value)} />
        <TextField
          label="Mobile"
          variant="standard"
          value={mobile}
          onChange={(event) => setMobile(event.target.value)} />
        <TextField
          label="Address"
          variant="standard"
          value={address}
          onChange={(event) => setAddress(event.target.value)} />
        <div className="addBtn">
          <Button style={{ marginTop: "10px" }} onClick={addUser} variant="outlined">Add User</Button>
        </div>
      </div>
      <Button style={{ color: "black" }} onClick={() => { history.goBack(); }}><ArrowBackIcon />Back</Button>
    </section>
  );
}
