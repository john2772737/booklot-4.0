import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";
import PageNotFound from "./pages/pagenotfound";
function app() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="*" element ={<PageNotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default app;
