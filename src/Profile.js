import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import * as React from 'react';
import { a11yProps } from './a11yProps';
import { TabPanel } from './TabPanel';

//profile
export function Profile({ user }) {
  const { id } = useParams();
  const history = useHistory();
  const profile = user[id];

  const [value, setValue] = React.useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="profilePage">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
            textColor="secondary"
            indicatorColor="secondary">
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Profile Details" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="profileLeft">
            <img src={profile.avatar} alt={profile.username}></img>
            <h3><b>{profile.username}</b></h3>
            <p>{profile.designation}</p>
            <p>{profile.address}</p>
            <Button style={{ width: "10px", height: "15px", padding: "15px" }}>Follow</Button>
            <Button style={{ paddingTop: "20px" }} onClick={() => { history.push("/edit-user/" + id); }}>Edit<EditIcon style={{ height: "20px" }} /></Button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="profileRight">
            <p><b>First Name</b> : {profile.firstname}</p>
            <p><b>Last Name</b> : {profile.lastname}</p>
            <p><b>User Name</b> : {profile.username}</p>
            <p><b>Age</b> : {profile.age}</p>
            <p><b>Gender</b> : {profile.gender}</p>
            <p><b>Mobile</b> : {profile.mobile}</p>
          </div>
        </TabPanel>
      </Box>
      <Button style={{ color: "black" }} onClick={() => { history.goBack(); }}><ArrowBackIcon />Back</Button>
    </div>
  );
}
