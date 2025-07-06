import React, { useState } from "react";
import { db } from "../FirebaseConfig/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import './Components.css';

const ApplicationForm = () => {
  const [childName, setChildName] = useState("");
  const [childSurname, setChildSurname] = useState("");
  const [childAge, setChildAge] = useState("");
  const [childGender, setChildGender] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentSurname, setParentSurname] = useState("");
  const [parentContacts, setParentContacts] = useState("");
  const [relationship, setRelationship] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //sending to database
    try {
      const applicationData = {
        childName,
        childSurname,
        childAge,
        childGender,
        parentName,
        parentSurname,
        parentContacts,
        relationship,
        homeAddress,
        timestamp: new Date(),
      };

      console.log("Submitting application:", applicationData); 

      // Using a unique ID 
      const docId = new Date().toISOString();
      await setDoc(doc(db, "applications", docId), applicationData);

      setMessage("Application submitted successfully!");
      alert('Application submitted successfully!');
      setTimeout(() => navigate("/home"), 2000);
    } catch (error) {
      console.error("Error submitting application:", error.message); 
      setMessage("Failed to submit application. Please try again.");
    }
  };

  return (
      <>
        <nav className="navbar">
         <div className="brand">PlugMyChild</div>
         <div className="navLinks">
           <Link to='/home' className="navLink">Home</Link>
           <Link to='/about' className="navLink">About</Link>
           <Link to='/activities' className="navLink">Activities</Link>
           <Link to='/contacts' className="navLink">Contacts</Link>
           <Link to='/forms' className="navLink">Forms</Link>
         </div>
       </nav>

      
        <div style={styles.container}>
          <div style={styles.formContainer}>
            <h2 style={styles.title}>Clement's Kindergarten Application Form</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              {/* Child Details */}
              <h3 style={styles.sectionTitle}>Child Details</h3>
              <input
                type="text"
                placeholder="Child's Name"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                style={styles.input}
                required
              />
              <input
                type="text"
                placeholder="Child's Surname"
                value={childSurname}
                onChange={(e) => setChildSurname(e.target.value)}
                style={styles.input}
                required
              />
              <select
                value={childAge}
                onChange={(e) => setChildAge(e.target.value)}
                style={styles.input}
                required
              >
                <option value="">Select Age Group</option>
                <option value="6 months - 2 years">6 months - 2 years</option>
                <option value="3 - 4 years">3 - 4 years</option>
                <option value="5 - 6 years">5 - 6 years</option>
              </select>
              <select
                value={childGender}
                onChange={(e) => setChildGender(e.target.value)}
                style={styles.input}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              {/* Parent/Guardian Details */}
              <h3 style={styles.sectionTitle}>Parent/Guardian Details</h3>
              <input
                type="text"
                placeholder="Parent's Name"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                style={styles.input}
                required
              />
              <input
                type="text"
                placeholder="Parent's Surname"
                value={parentSurname}
                onChange={(e) => setParentSurname(e.target.value)}
                style={styles.input}
                required
              />
              <input
                type="text"
                placeholder="Parent's Contacts"
                value={parentContacts}
                onChange={(e) => setParentContacts(e.target.value)}
                style={styles.input}
                required
              />
              <textarea
                placeholder="Relationship with Child"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                style={{ ...styles.input, height: "80px" }}
                required
              />
              <textarea
                placeholder="Home Address"
                value={homeAddress}
                onChange={(e) => setHomeAddress(e.target.value)}
                style={{ ...styles.input, height: "100px" }}
                required
              />

              {/* Submit Button */}
              <button type="submit" style={styles.button}>
                Submit Application
              </button>
            </form>
            {message && <p style={styles.message}>{message}</p>}
          </div>
        </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
  },
  navLink:{
      color: "#fff",
      textDecoration: "none",
      fontSize: "18px",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    width: "100%",
  },
  title: {
    fontSize: "32px",
    color: "#ff6f61",
    marginBottom: "20px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    width: "100%",
  },
  button: {
    padding: "12px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#ff6f61",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  message: {
    fontSize: "14px",
    color: "#ff4d4d",
    marginTop: "20px",
    textAlign: "center",
  },
};

export default ApplicationForm;