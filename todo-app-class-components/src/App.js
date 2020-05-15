import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar />
        <Todos />
      </div>
    </>
  );
}

export default App;
