import React from 'react'
import { auth } from '../FirebaseConfig/Firebase';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Components.css'
import './Footer';
//import homeImg from '../Images/app-bg.jpeg';
//import indoorImg from '../Images/indoor-img.jpeg';
// import outdoorImg from '../Images/outdoor-img.jpeg';
import homebgImg from '../Images/kindergarten.jpeg';
import Footer from './Footer';

const Home = () => {
    const navigate = useNavigate();

    const handleLogOut = async ()=> {
        try{
            await signOut(auth);
            navigate("/signin");
            console.log("Logged out successfully");
        }catch(error){
            console.log("Error logging out:", error.message);
        }
    };

  return (
    <div>
        <nav className="navbar">
            <div className="brand">PlugMyChild</div>
                <div className="navLinks">
                    <Link to='/home' className="navLink">Home</Link>
                    <Link to='/about' className="navLink">About</Link>
                    <Link to='/activities' className="navLink">Activities</Link>
                    <Link to='/contacts' className="navLink">Contacts</Link>
                    <Link to='/forms' className="navLink">Forms</Link>
                    <button onClick={handleLogOut} style={styles.logoutButton}>LogOut</button>
                </div>
        </nav> 

        <div className="welcome-container">
            <div className="welcome-message">
                    <h1 className='heading'>Welcome to Clement's Kindergarten!</h1>
                    <p>
                        We are excited to have you here. Our kindergarten is a place where
                        children can learn, play, and grow in a safe and nurturing environment.
                    </p>
                </div>
                <div className="welcome-image">
                    <img src={homebgImg} alt="Kindergarten"/>
                </div>
            </div>

            {/* Cards 
            <div className='card-comp'>
                <img className='cardImg' src={indoorImg} alt="Indoor"/>
                <h2 className='cardTitle' >Indoor Acrivities</h2>
                <p className='cardContent' >Some text regarding the indoor image 
                </p>
            </div> */}

            <div style={styles.testimonialsSection}>
                <h2 style={styles.extrasHeading}>What Parents Say</h2>
                <div style={styles.testimonialsWrapper}>
                    <div style={styles.testimonialBox}>
                        <p>"My child loves it here! The teachers are loving and dedicated. I see so much growth every week."</p>
                        <strong>- Mrs. Lebo M.</strong>
                    </div>
                    <div style={styles.testimonialBox}>
                        <p>"Clement's Kindergarten feels like a second home for our daughter. Highly recommended!"</p>
                        <strong>- Mr. Thabo S.</strong>
                    </div>
                    <div style={styles.testimonialBox}>
                        <p>"Great balance of fun, learning, and care. My son never wants to leave!"</p>
                        <strong>- Mrs. Zinhle R.</strong>
                    </div>
                </div>
            </div>


            <div className="extras_section" style={styles.extrasSection}>
                <h2 className="extras_heading" style={styles.extrasHeading}>Why Choose Us?</h2>
                <div className="extras_features" style={styles.extrasFeatures}>
                    <div className="feature_box" style={styles.featureBox}>
                        <h3>💡 Creative Curriculum</h3>
                        <p>We use innovative teaching methods that make learning fun and effective.</p>
                    </div>
                    <div className="feature_box" style={styles.featureBox}>
                        <h3>🧸 Safe & Secure</h3>
                        <p>We ensure a secure environment with monitored play areas and trained staff.</p>
                    </div>
                    <div className="feature_box" style={styles.featureBox}>
                        <h3>🍎 Healthy Meals</h3>
                        <p>Nutritious meals are provided daily to keep our little ones energized.</p>
                    </div>
                    <div className="feature_box" style={styles.featureBox}>
                        <h3>🌱 Lifelong Learning</h3>
                        <p>We instill values, curiosity, and a love for learning from an early age.</p>
                    </div>
                </div>

            </div>



        <Footer/>
    </div>
  );
};

const styles = {
    logoutButton: {
        backgroundColor: '#ff4d4d',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    extrasSection: {
        textAlign: "center",
        marginTop: "40px",
        padding: "20px",
        marginBottom: "20px",
        backgroundColor: "#f9f9f9"
    },
    extrasHeading: {
        fontSize: "2rem",
        marginBottom: "20px",
        color: "rgb(206, 46, 46)",
        textShadow: "2px 2px 4px rgb(51, 51, 51)",
        fontFamily: "Times New Roman", 
    },
    extrasFeatures: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px"
    },
    featureBox: {
        flex: "1",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "8px 8px 8px rgba(247, 26, 26, 0.1)",
        maxWidth: "250px"
    },
    testimonialsSection: {
        padding: "40px 20px",
        backgroundColor: "#fdfdfd",
        textAlign: "center"
    },
    testimonialsWrapper: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "20px"
    },
    testimonialBox: {
        backgroundColor: "#fff",
        padding: "20px",
        maxWidth: "300px",
        borderRadius: "10px",
        boxShadow: "8px 8px 8px rgba(247, 26, 26, 0.1)",
        fontStyle: "italic"
    }
};

export default Home;