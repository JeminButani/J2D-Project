import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  // const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" exact>
            <Route index element={<Home />} />
            <Route element={() => <Navigate to="/posts" />} />
            <Route path="/posts" exact element={<Home />} />
            <Route path="/posts/search" exact element={<Home />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/auth" exact element={<Auth />} />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
