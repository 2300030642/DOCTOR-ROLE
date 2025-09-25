import Card from "../components/Card";

export default function Dashboard() {
  const cardContainerStyle = {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    padding: "2rem",
    flexWrap: "wrap",
  };

  const cardStyle = {
    flex: "1",
    minWidth: "250px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const numberStyle = (color) => ({
    fontSize: "2rem",
    fontWeight: "bold",
    color,
    marginTop: "1rem",
  });

  return (
    <div style={cardContainerStyle}>
      <div style={cardStyle}>
        <Card title="Total Patients">
          <h3 style={numberStyle("#007bff")}>120</h3>
        </Card>
      </div>
      <div style={cardStyle}>
        <Card title="Total Doctors">
          <h3 style={numberStyle("#28a745")}>25</h3>
        </Card>
      </div>
      <div style={cardStyle}>
        <Card title="Appointments Today">
          <h3 style={numberStyle("#ffc107")}>18</h3>
        </Card>
      </div>
    </div>
  );
}
