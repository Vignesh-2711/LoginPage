import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api";
import { Eye, EyeOff } from "lucide-react"; // Import eye icons

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/profile");
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="text-center" style={{ width: "400px" }}>
        <h1 style={{ color: "#ffffff", marginBottom: "20px" }}>Login</h1>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input 
            className="form-control mb-3" 
            type="text" 
            name="username" 
            placeholder="Username" 
            onChange={handleChange} 
            required 
          />

          {/* Password Field with Eye Icon */}
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


        <p className="mt-3" style={{ color: "white" }}>
          Don't have an account? <Link to="/register" className="text-info">Register</Link>
        </p>
          <button className="btn btn-info w-25 my-3" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
