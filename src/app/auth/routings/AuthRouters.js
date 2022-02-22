//It should handle the routing for signup and Login
//whatever the login related specifications are coming right should be managed by this
// In spring we have used /auth for all authentication related stuff
// For all restcontrollers we have mapped requestMapping
//like /movies , /series etc

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
//we are utilizing Register3 without brackets eventhough its a function because its export is at the end not at the beginning.
import Register3 from "../components/Register3";

//rafc
export const AuthRouters = () => {
  console.log("Inside the auth Routers");
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register3></Register3>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
};
