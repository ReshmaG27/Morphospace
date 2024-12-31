import React, { useState } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    contactno: "",
    city: "",
    state: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8888/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        if (response.status === 200) {
          alert("User details updated successfully!");
        } else if (response.status === 201) {
          alert("User created successfully!");
        }
        console.log("Response Data: ", data);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("An unexpected error occurred.");
    }
  };
  

  return (
    <div style={styles.editProfileContainer}>
      <h2 style={styles.header}>Edit Profile</h2>
      <div style={styles.profileImage}>
        {/* <img
          src="https://via.placeholder.com/100"
          alt="Profile Avatar"
          style={styles.avatarImage}
        /> */}
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        {/* First Name & Last Name */}
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="firstName">
              First Name*
            </label>
            <input
              style={styles.input}
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="lastName">
              Last Name*
            </label>
            <input
              style={styles.input}
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Email */}
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">
              Email*
            </label>
            <input
              style={styles.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Address */}
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="address">
              Address*
            </label>
            <input
              style={styles.input}
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Contact Number */}
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="contactNumber">
              Contact Number*
            </label>
            <input
              style={styles.input}
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* City & State */}
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="city">
              City*
            </label>
            <select
              style={styles.input}
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="">Select City</option>
              <option value="Agra">Agra</option>
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="state">
              State*
            </label>
            <select
              style={styles.input}
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Goa">Goa</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
            </select>
          </div>
        </div>

        {/* Password Section */}
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="password">
              Password*
            </label>
            <div style={styles.passwordContainer}>
              <input
                style={styles.input}
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                style={styles.editBtn}
                onClick={() => alert("Password Edit Clicked")}
              >
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div style={styles.buttonGroup}>
          <button type="button" style={styles.cancelBtn}>
            Cancel
          </button>
          <button type="submit" style={styles.saveBtn}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;

// Inline styles
const styles = {
  editProfileContainer: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  profileImage: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  avatarImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "2px solid #ccc",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#555",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  passwordContainer: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  editBtn: {
    padding: "8px 12px",
    fontSize: "14px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginTop: "15px",
  },
  cancelBtn: {
    padding: "10px",
    borderRadius: "4px",
    backgroundColor: "#f8d7da",
    color: "#721c24",
    border: "none",
  },
  saveBtn: {
    padding: "10px",
    borderRadius: "4px",
    backgroundColor: "#d4edda",
    color: "#155724",
    border: "none",
  },
};

