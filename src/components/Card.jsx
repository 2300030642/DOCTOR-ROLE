export default function Card({ title, children }) {
  const cardStyle = {
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    marginBottom: "2rem",
    overflow: "hidden",
    minWidth: "250px",
    maxWidth: "100%",
    transition: "transform 0.3s ease",
  };

  const headerStyle = {
    backgroundColor: "#f1f5f9",
    padding: "1rem 1.5rem",
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#2c3e50",
    borderBottom: "1px solid #e0e0e0",
  };

  const bodyStyle = {
    padding: "1.5rem",
    fontSize: "1.1rem",
    color: "#374151",
  };

  return (
    <div style={cardStyle}>
      {title && <div style={headerStyle}>{title}</div>}
      <div style={bodyStyle}>{children}</div>
    </div>
  );
}
