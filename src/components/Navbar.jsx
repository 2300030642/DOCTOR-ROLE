import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 40px",
        backgroundColor: "#1a73e8",
        color: "white",
        alignItems: "center",
      }}
    >
      <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>
        My Doctor App
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>
          Home
        </Link>

        <Link to="/doctor/login" style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>
          Login
        </Link>

        <Link to="/doctor/signup" style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>
          Signup
        </Link>
      </div>
    </nav>
  );
}
