import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button"; // Your custom Button component
import Card from "./components/Card";     // Your custom Card component
import bgImage from "./assets/image.jpg"; // Adjust the path if needed

export default function FrontPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card>
        <div style={{ textAlign: "center", padding: "1rem 2rem" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
            🏥 HealthCare Portal
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "30px", color: "#555" }}>
            Welcome! Please choose your role to continue
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Button onClick={() => navigate("/patient/login")}>Patient</Button>
            <Button onClick={() => navigate("/doctor/login")}>Doctor</Button>
            <Button onClick={() => navigate("/admin/login")}>Admin</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
