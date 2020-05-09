import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
