import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = sessionStorage.getItem("user");
    if (!userData) {
      navigate("/login");
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      sessionStorage.removeItem("user");
      navigate("/login");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(user.email);
    alert("Email copied to clipboard!");
  };

  if (!user) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="d-flex vh-100 bg-light">
      <Sidebar navigate={navigate} />
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        
        
        <div className="position-absolute top-0 end-0 p-3">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>

        
        <div 
          className="rounded-circle d-flex align-items-center justify-content-center mb-3"
          style={{
            width: "100px", height: "100px",
            fontSize: "30px", fontWeight: "bold",
            backgroundColor: "#007bff", color: "white"
          }}
        >
          {user.username ? user.username.charAt(0).toUpperCase() : "U"}
        </div>

        <h2 className="text-center mb-3">Welcome, {user.username}!</h2>
        
        <div className="card p-4 shadow text-center" style={{ width: "350px" }}>
          <p><strong>Email:</strong> {user.email} <button className="btn btn-sm btn-outline-secondary ms-2" onClick={copyEmail}>📋</button></p>
          <p><strong>First Name:</strong> {user.first_name || "N/A"}</p>
          <p><strong>Last Name:</strong> {user.last_name || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
