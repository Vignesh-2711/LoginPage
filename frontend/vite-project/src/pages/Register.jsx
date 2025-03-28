import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api";
import { Eye, EyeOff } from "lucide-react"; // Import icons

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", firstname: "", lastname: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="text-center" style={{ width: "400px" }}>
        <h2 style={{ color: "#ffffff", marginBottom: "20px" }}>Register</h2>
        {message && <p className="text-success">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-3" type="text" name="username" placeholder="Username" onChange={handleChange} required />
          <input className="form-control mb-3" type="text" name="firstname" placeholder="First Name" onChange={handleChange} required />
          <input className="form-control mb-3" type="text" name="lastname" placeholder="Last Name" onChange={handleChange} required />
          <input className="form-control mb-3" type="email" name="email" placeholder="Email" onChange={handleChange} required />
          
          
          <div className="input-group mb-3">
            <input 
              className="form-control" 
              type={showPassword ? "text" : "password"} 
              name="password" 
              placeholder="Password" 
              onChange={handleChange} 
              required 
            />
            <button 
              className="btn btn-outline-secondary" 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button className="btn btn-info w-25 my-3" type="submit">Register</button>
        </form>

        
        <p className="mt-3" style={{ color: "white" }}>
          Already have an account? <Link to="/login" className="text-info">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
