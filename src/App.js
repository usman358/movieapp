import React from "react";
import Sidebar from "./Sidebar";
import Table from "./Table";
import image1 from "./qq.jpg";
import "./imagess.css";

function App() {
  return (
    <div className="aqa" style={{ backgroundImage: `url(${image1})` }}>
      <div>
        <Sidebar />
        <Table />
      </div>
    </div>
  );
}

export default App;
