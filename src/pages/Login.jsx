import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate login success for styling demo
    alert("Login Successful");
    localStorage.setItem("doctor", JSON.stringify({ name: "Test Doctor" }));
    navigate("/doctor/dashboard");
  };
  

  // Styles
  const containerStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f9fc",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "40px 50px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    width: "400px",
    maxWidth: "90%",
  };

  const titleStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "30px",
    color: "#244170",
    textAlign: "center",
  };

  const labelStyle = {
    display: "block",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#244170",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1.5px solid #d1d9e6",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.3s",
  };

  const inputFocusStyle = {
    borderColor: "#1a73e8",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px 0",
    backgroundColor: "#1a73e8",
    color: "#fff",
    fontWeight: "700",
    fontSize: "1.1rem",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(26,115,232,0.4)",
    transition: "background-color 0.3s",
  };

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Doctor Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" style={labelStyle}>Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ ...inputStyle, ...(emailFocused ? inputFocusStyle : {}) }}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />

          <label htmlFor="password" style={labelStyle}>Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ ...inputStyle, ...(passwordFocused ? inputFocusStyle : {}) }}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />

          <button type="submit" style={buttonStyle}>Login</button>
        </form>
      </div>
    </div>
  );
}
