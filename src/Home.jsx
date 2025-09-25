import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleAction = (action) => {
    navigate(`/auth/${action}`);
  };

  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #f0f4f8, #d9e2ec)",
    fontFamily: "Segoe UI, sans-serif",
    padding: "1rem",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "0.5rem",
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "2rem",
  };

  const buttonStyle = {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    margin: "0 0.5rem",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🏥 Hospital Care and Health Support</h1>
      <p style={subtitleStyle}>Your health, our priority.</p>
      <div>
        <button
          onClick={() => handleAction("login")}
          style={{
            ...buttonStyle,
            backgroundColor: "#ffffff",
            color: "#007bff",
            border: "2px solid #007bff",
          }}
        >
          Login
        </button>
        <button
          onClick={() => handleAction("signup")}
          style={{
            ...buttonStyle,
            backgroundColor: "#007bff",
            color: "#fff",
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
