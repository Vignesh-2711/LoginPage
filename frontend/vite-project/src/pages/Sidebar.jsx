import React from "react";

const Sidebar = ({ navigate }) => {
  return (
    <div className="bg-dark text-white p-3 d-flex flex-column" style={{ width: "200px", height: "100vh" }}>

      <button className="btn btn-light" onClick={() => navigate("/settings")}>
        Settings.py
      </button>
    </div>
  );
};

export default Sidebar;
