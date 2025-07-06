import React, { useState } from "react";
import { auth, db } from "../FirebaseConfig/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Step 1: Create the user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Step 2: Sign in the user immediately
      await signInWithEmailAndPassword(auth, email, password);

      // Step 3: Store user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
      });

      console.log("User signed up, signed in, and details stored.");
      navigate("/home"); // Redirect to home page
    } catch (error) {
      console.error("Error:", error.message);
      setMessage("Failed to sign up. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Join Clement's Kindergarten!</h2>
        <p style={styles.subtitle}>Create an account to get started</p>
        <form onSubmit={handleSignUp} style={styles.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
        <p style={styles.footerText}>
          Already have an account? <a href="/signin" style={styles.link}>Sign In</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  title: {
    fontSize: "32px",
    color: "#ff6f61",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
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
  footerText: {
    fontSize: "14px",
    color: "#555",
    marginTop: "20px",
  },
  link: {
    color: "#ff6f61",
    textDecoration: "none",
    fontWeight: "bold",
  },
  message: {
    fontSize: "20px",
    color: "#ff4d4d",
    marginTop: "20px",
  },
};

export default SignUp;