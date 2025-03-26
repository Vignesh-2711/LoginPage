import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", firstname: "", lastname: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      setMessage("User registered successfully!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setMessage("Error registering user");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow text-center" style={{ width: "400px" }}>
        <h2>Register</h2>
        {message && <p className="text-success">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-3" type="text" name="username" placeholder="Username" onChange={handleChange} required />
          <input className="form-control mb-3" type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input className="form-control mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input className="form-control mb-3" type="text" name="firstname" placeholder="First Name" onChange={handleChange} required />
          <input className="form-control mb-3" type="text" name="lastname" placeholder="Last Name" onChange={handleChange} required />
          <button className="btn btn-primary w-100" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
