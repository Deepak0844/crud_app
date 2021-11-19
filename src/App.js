import './App.css';
import {Route, useHistory } from "react-router-dom";
import { Switch} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useState } from 'react';

import * as React from 'react';
import { EditUser } from './EditUser';
import { AddUser } from './AddUser';
import { Profile } from './Profile';
import { ListUser } from './ListUser';


function App() {
  const users=[
    {
firstname:"Julio ",
lastname:"Crona",
username:"Julio Crona",
avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqN3nkTGk58nnkOqWwpi-j9rkmPfNtFWBKSA&usqp=CAU",
email:"JulioCrona@gmail.com",
designation:"UI Designer",
age:40,
gender:"Male",
mobile:123456789,
address:"Chennai, India"
},
{
firstname:"Pablo ",
lastname:"Hahn",
username:"Pablo Hahn",
avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJoBkWxNNHvLpW4knNYlRPtXfn9pRdijE0ow&usqp=CAU",
email:"Pablo Hahn@gmail.com",
designation:"Developer",
age:35,
gender:"Male",
mobile:234567891,
address:"Banglore, India"
},
{
  firstname:"Eloise ",
  lastname:"Reichert",
  username:"Eloise Reichert",
  avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTPndLSFHM9SS8t1wJYeBjfurdYsg8MVYsg&usqp=CAU",
  email:"EloiseReichert@gmail.com",
  designation:"UI Designer",
  age:28,
  gender:"Male",
  mobile:345678912,
  address:"Delhi, India"
},
{
    firstname:"Robin ",
    lastname:"Satterfield",
    username:"Robin Satterfield",
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBx_P1zJcOHhpA_PDhyNMToHfAIgOdkaMUzA&usqp=CAU",
    email:"RobinSatterfield@gmail.com",
    designation:"Marketing Manager",
    age:33,
    gender:"Male",
    mobile:456789123,
    address:"Banglore, India",
},
{
  firstname:"Franklin ",
  lastname:"Champlin",
  username:"Franklin Champlin",
  avatar:"data:image/png;base64,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",
  email:"FranklinChamplin@gmail.com",
  designation:"Developer",
  age:30,
  gender:"Male",
  mobile:567891234,
  address:"Chennai, India"
},
]
const [user,setUser] = useState(users);

const history = useHistory();
  return (
<div>
    <AppBar position="static" style={{background:"#0d1249"}}>
      <Toolbar variant="dense">
        <Button variant="Text" color="inherit" onClick={()=> history.push("/")}>
          Home
        </Button>
        <Button onClick={()=>history.push("/users")} variant="Text" color="inherit">
          List Users
        </Button>
        <Button onClick={()=>history.push("/create-user")} variant="Text" color="inherit">
       Create User
        </Button>
      </Toolbar>
    </AppBar>
<Switch>
<Route exact path="/">
  <Home/>
 </Route>
 <Route path="/movies/edit/:id">
 </Route>
 <Route path="/edit-user/:id">
 <EditUser user={user} setUser={setUser} />
 </Route>
 <Route path="/profile/:id">
   <Profile user={user}  />
   </Route>
 <Route path="/users">
 <ListUser user={user} setUser={setUser}/>
 </Route>
 <Route path="/create-user">
 <AddUser user={user} setUser={setUser}/>
 </Route>
 <Route path="**">
 
 </Route>
 </Switch>
 </div>
);
}
export default App;

function Home(){
  return(
    <div>
     <h2 style={{textAlign:"center"}}>CRUD Application</h2>
    </div>
  )
}
