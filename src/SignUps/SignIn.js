import React, { useState } from "react";
import { auth } from "../FirebaseConfig/Firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './SignUps.css';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      setEmail("");
      setPassword("");
      console.log("User signed in:", user);
      navigate("/home"); // Redirect to home page
    } catch (error) {
      console.error("Error signing in:", error.message);
      setMessage("Invalid email or password. Please try again.");
    }
  };

  const handleForgotPassword = async () => {
    if (!resetEmail) {
      setMessage("Please enter your email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setMessage("Password reset email sent. Check your inbox!");
      setShowForgotPassword(false);
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
      setMessage("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <div className="bgImage">
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Welcome Back!</h2>
          <p style={styles.subtitle}>Sign in to continue to Clement's Kindergarten</p>
          <form onSubmit={handleSignIn} style={styles.form}>
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
              Sign In
            </button>
          </form>
          <p style={styles.footerText}>
            Don't have an account? <a href="/signup" style={styles.link}>Sign Up</a>
          </p>
          <p style={styles.forgotPasswordText}>
            <a
              href="#"
              onClick={() => setShowForgotPassword(!showForgotPassword)}
              style={styles.link}
            >
              Forgot Password?
            </a>
          </p>

          {showForgotPassword && (
            <div style={styles.forgotPasswordSection}>
              <input
                type="email"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                style={styles.input}
              />
              <button onClick={handleForgotPassword} style={styles.button}>
                Reset Password
              </button>
            </div>
          )}

          {message && <p style={styles.message}>{message}</p>}
        </div>
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
  buttonHover: {
    backgroundColor: "#ff4d4d",
  },
  footerText: {
    fontSize: "14px",
    color: "#555",
    marginTop: "20px",
  },
  forgotPasswordText: {
    fontSize: "14px",
    color: "#555",
    marginTop: "10px",
  },
  link: {
    color: "#ff6f61",
    textDecoration: "none",
    fontWeight: "bold",
  },
  forgotPasswordSection: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  message: {
    fontSize: "14px",
    color: "#ff4d4d",
    marginTop: "20px",
  },
};

export default SignIn;