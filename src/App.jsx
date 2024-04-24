import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Article from "./components/Article1";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/1" element={<Article />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
