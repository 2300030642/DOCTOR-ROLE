import React, { useState, useEffect } from "react";
import { doctorAxios } from "../security/config";

export default function Profile() {
  // Manage doctor data state from localStorage
  const [doctorData, setDoctorData] = useState(() => {
    const stored = localStorage.getItem("doctor");
    return stored ? JSON.parse(stored) : null;
  });

  // Form state for profile fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    specialization: "",
    designation: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // On component mount or doctorData change, populate form fields
  useEffect(() => {
    if (doctorData) {
      setForm({
        name: doctorData.name || "",
        email: doctorData.email || "",
        password: "",
        age: doctorData.age || "",
        gender: doctorData.gender || "",
        specialization: doctorData.specialization || "",
        designation: doctorData.designation || "",
      });
    }
  }, [doctorData]);

  // Handle form input changes
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Enable editing mode
  const handleEdit = () => setIsEditing(true);

  // Save updated profile
  const handleSave = async (e) => {
    e.preventDefault();

    if (!doctorData || !doctorData.id) {
      alert("Doctor ID not found. Please log in again.");
      return;
    }

    const payload = {
      name: form.name,
      email: form.email,
      age: form.age ? Number(form.age) : null,
      gender: form.gender || null,
      specialization: form.specialization || null,
      designation: form.designation || null,
    };

    if (form.password) {
      payload.password = form.password;
    }

    try {
      const res = await doctorAxios.put(`/${doctorData.id}`, payload);

      // Update local state and localStorage with new doctor data
      setDoctorData(res.data);

      setForm({
        name: res.data.name,
        email: res.data.email,
        password: "",
        age: res.data.age || "",
        gender: res.data.gender || "",
        specialization: res.data.specialization || "",
        designation: res.data.designation || "",
      });

      localStorage.setItem("doctor", JSON.stringify(res.data));

      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update error:", error.response?.data || error.message);
      alert("Profile update failed: " + (error.response?.data || error.message));
    }
  };

  return (
    <div style={styles.outer}>
      <div style={styles.card}>
        <h2 style={styles.header}>Doctor Profile</h2>
        {!isEditing ? (
          <>
            <ProfileRow label="Name" value={form.name} />
            <ProfileRow label="Email" value={form.email} />
            <ProfileRow label="Age" value={form.age} />
            <ProfileRow label="Gender" value={form.gender} />
            <ProfileRow label="Specialization" value={form.specialization} />
            <ProfileRow label="Designation" value={form.designation} />
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <button type="button" style={styles.editBtn} onClick={handleEdit}>
                Edit
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSave}>
            <ProfileInput
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <ProfileInput
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <ProfileInput
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
            />
            <ProfileInput
              label="Age"
              name="age"
              type="number"
              value={form.age}
              onChange={handleChange}
            />
            <ProfileSelect
              label="Gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              options={["Male", "Female", "Other"]}
            />
            <ProfileInput
              label="Specialization"
              name="specialization"
              value={form.specialization}
              onChange={handleChange}
            />
            <ProfileInput
              label="Designation"
              name="designation"
              value={form.designation}
              onChange={handleChange}
            />
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <button type="submit" style={styles.saveBtn}>
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div style={styles.row}>
      <span style={styles.label}>{label}:</span>
      <span style={styles.value}>{value}</span>
    </div>
  );
}

function ProfileInput({ label, name, value, onChange, type = "text" }) {
  return (
    <div style={styles.row}>
      <span style={styles.label}>{label}:</span>
      <input
        style={styles.input}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
}

function ProfileSelect({ label, name, value, onChange, options }) {
  return (
    <div style={styles.row}>
      <span style={styles.label}>{label}:</span>
      <select
        style={styles.input}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

const styles = {
  outer: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  card: {
    maxWidth: "540px",
    width: "100%",
    background: "rgba(255,255,255,0.97)",
    borderRadius: "24px",
    padding: "44px 38px",
    boxShadow: "0 8px 32px rgba(40,67,135,0.12)",
    fontSize: "1.18rem",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    fontWeight: "700",
    fontSize: "2rem",
    marginBottom: "2.2rem",
    color: "#244170",
    textAlign: "center",
  },
  row: {
    marginBottom: "1.25rem",
    display: "flex",
    alignItems: "center",
  },
  label: {
    minWidth: "140px",
    color: "#2172c9",
    fontWeight: "600",
  },
  value: {
    marginLeft: "1.2rem",
    color: "#222",
    fontWeight: 400,
    letterSpacing: "0.03em",
    wordBreak: "break-word",
  },
  input: {
    marginLeft: "1.2rem",
    fontSize: "1.09rem",
    padding: "0.72rem 1rem",
    borderRadius: "10px",
    border: "1px solid #b5bbd1",
    width: "62%",
  },
  editBtn: {
    background: "#1a73e8",
    color: "#fff",
    border: "none",
    borderRadius: "15px",
    padding: "13px 44px",
    fontSize: "1.18rem",
    fontWeight: 600,
    boxShadow: "0 3px 14px rgba(26,115,232,0.13)",
    cursor: "pointer",
  },
  saveBtn: {
    background: "#21a163",
    color: "#fff",
    border: "none",
    borderRadius: "15px",
    padding: "13px 44px",
    fontSize: "1.18rem",
    fontWeight: 600,
    boxShadow: "0 3px 14px rgba(28,161,99,0.14)",
    cursor: "pointer",
  },
};
