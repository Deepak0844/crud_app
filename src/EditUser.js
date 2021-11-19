import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import * as React from 'react';

// update user
export function EditUser({ user, setUser }) {
  const history = useHistory();
  const { id } = useParams();
  const profile = user[id];
  const [firstname, setFirstname] = useState(profile.firstname);
  const [lastname, setLastname] = useState(profile.lastname);
  const [username, setUsername] = useState(profile.username);
  const [avatar, setAvatar] = useState(profile.avatar);
  const [email, setEmail] = useState(profile.email);
  const [designation, setDesignation] = useState(profile.designation);
  const [age, setAge] = useState(profile.age);
  const [gender, setGender] = useState(profile.gender);
  const [mobile, setMobile] = useState(profile.mobile);
  const [address, setAddress] = useState(profile.address);

  const editUser = () => {
    const updateUser = {
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
    const updateProfile = [...user];
    updateProfile[id] = updateUser;
    setUser(updateProfile);
    history.push("/profile/" + id);
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
          <Button style={{ marginTop: "10px" }} onClick={editUser} variant="outlined">Update User</Button>
        </div>
      </div>
      <Button style={{ color: "black" }} onClick={() => { history.goBack(); }}><ArrowBackIcon />Back</Button>
    </section>
  );
}
