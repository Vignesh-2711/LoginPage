import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  if (!user) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      {/* Top bar with Logout button */}
      <div className="position-absolute top-0 end-0 p-3">
        <button className="btn btn-danger" onClick={() => {
          sessionStorage.removeItem("user");
          navigate("/login");
        }}>
          Logout
        </button>
      </div>

      {/* Welcome message centered */}
      <h2 className="text-center mb-4">Welcome, {user.username}!</h2>

      {/* User details card */}
      <div className="card p-4 shadow text-center" style={{ width: "400px" }}>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>First Name:</strong> {user.first_name || "N/A"}</p>
        <p><strong>Last Name:</strong> {user.last_name || "N/A"}</p>
      </div>
    </div>
  );
};

export default Profile;
