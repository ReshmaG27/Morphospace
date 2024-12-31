import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./auth.css";
import userIcon from "./user.png"; // Import user icon
import emailIcon from "./email.png"; // Import email icon
import passwordIcon from "./key.png"; // Import password icon

const Register = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // To differentiate success and error messages

  const navigate = useNavigate(); // Initialize navigate hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    try {
      const response = await fetch("http://localhost:8888/Reg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, confirmPassword }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessageType("success");
        setMessage(result.message || "Registration successful!");
        setFormData({ username: "", email: "", password: "", confirmPassword: "" });

        // Redirect to the login page after successful registration
        setTimeout(() => {
          navigate("/login"); // Redirect to the login page
        }, 1500); // Delay to show the success message
      } else {
        setMessageType("error");
        setMessage(result.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessageType("error");
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="create-account-box">
        <div className="login-icon">
          <i className="fas fa-user-circle"></i>
        </div>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <img src={userIcon} alt="user icon" className="input-icon" />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <img src={emailIcon} alt="email icon" className="input-icon" />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <img src={passwordIcon} alt="password icon" className="password-icon" />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <img src={passwordIcon} alt="password icon" className="password-icon" />
          </div>
          <button type="submit" className="login-button">
            REGISTER
          </button>
        </form>
        {message && (
          <p className={`message ${messageType}`}>
            {message}
          </p>
        )}
        <a href="#" className="forgot-password" onClick={onSwitchToLogin}>
          Already have an account? <span>Login</span>
        </a>
      </div>
    </div>
  );
};

export default Register;
