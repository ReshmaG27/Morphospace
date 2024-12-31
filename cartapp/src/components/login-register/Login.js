import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./auth.css";
import userIcon from "./user.png"; // Import user icon
import passwordIcon from "./key.png"; // Import password icon

const Login = ({ onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // Initialize navigate hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8888/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Login successful!");
        console.log("Token:", result.token); // Save the token in localStorage/sessionStorage as needed

        // Redirect to the home page after successful login
        setTimeout(() => {
          navigate("/home"); // Redirect to the home page
        }, 500); // Delay to show the success message
      } else {
        setMessage(result.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-icon">
          <i className="fas fa-user-circle"></i>
        </div>
        <h2>User Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <img src={userIcon} alt="user icon" className="input-icon" />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="*******"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <img src={passwordIcon} alt="password icon" className="password-icon" />
          </div>
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <div className="create-account-text">
          Don't have an account?{" "}
          <a href="#" className="create-account-link" onClick={onSwitchToRegister}>
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
