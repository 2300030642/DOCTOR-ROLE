import { useState } from "react";

export default function Button({ children, onClick, type = "button", variant = "primary" }) {
  const [hovered, setHovered] = useState(false);

  const colors = {
    primary: "#2563eb",
    secondary: "#6b7280",
    success: "#22c55e",
    danger: "#ef4444",
  };

  const baseStyle = {
    padding: "12px 24px",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backgroundColor: colors[variant] || colors.primary,
    color: "#fff",
  };

  const hoverStyle = {
    filter: "brightness(1.1)",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        ...baseStyle,
        ...(hovered ? hoverStyle : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}
