import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignUps/SignIn";
import SignUp from "./SignUps/SignUp";
import Home from "./Components/Home";
import Contacts from "./Components/Contacts";
import About from "./Components/About";
import Forms from "./Components/Forms";
import Activities from "./Components/Activities";
import IndoorActivities from "./More/IndoorActivities";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/forms' element={<Forms/>}/>
        <Route path='/activities' element={<Activities/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/indoor-activities' element={<IndoorActivities/>}/>
      </Routes>
    </Router>
  );
}

export default App;
