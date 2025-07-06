import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css';
import './Footer';
import abtUs from '../Images/aboutUs.jpeg';
import bundleJoy from '../Images/bundleofjoyImg.jpeg';
import ava1 from '../Images/avatar1.jpeg';
import ava2 from '../Images/avatar2.jpeg';
import ava3 from '../Images/avatar3.jpeg';
import ava4 from '../Images/avatar4.jpeg';
import ava5 from '../Images/avatar5.jpeg';
import ava6 from '../Images/avatar6.jpeg';
import ava7 from '../Images/avatar7.jpeg';
import ava8 from '../Images/avatar8.jpeg';
import Footer from './Footer';


const About = () => {
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
        </div>
      </nav>

      <div className="welcome-container">
        <div className="welcome-message">
          <h1 className='heading'>About our kindergarten!</h1>
          <p>
            Welcome to Clement's Kindergarten, a nurturing and vibrant learning environment where children are encouraged to grow, 
            explore, and discover. Our mission is to provide a fun and safe space where young learners can develop important 
            life skills through play, creativity, and education. We focus on fostering a love for learning, self-confidence, 
            and respect for others in every child.
          </p>
          <h3>Working Hours</h3>
          <h4>Monday - Thursday</h4>
          <p>06:00 - 17:00</p>
          <h4>Friday</h4>
          <p>07:00 - 16:30</p>
        </div>
        
        <div className="welcome-image">
          <img src={abtUs} alt="Kindergarten"/>
        </div>
      </div>

      <div className="welcome-container">
        <div className="welcome-message">
          <h1 className='heading'>History of our Kindergarten</h1>
            <p>
              Founded in 2003, Clement's Kindergarten was established with a vision to create a safe and joyful space where children can thrive.
              Our journey began with just a handful of students, and over the years, we've grown into a thriving community of passionate educators 
              and curious young learners. Our commitment to excellence in early childhood education has been the driving force behind our growth.
            </p>
        </div>
        <div className="welcome-image">
          <img src={bundleJoy} alt="Kindergarten"/>
        </div>
      </div>
      <div className='content'>
        <h1 className='heading'>Our Teachers</h1>
        <p>
         Our dedicated team of experienced educators and caregivers are passionate about nurturing young minds. With a combined experience 
         of over 21 years, our staff is committed to creating a positive and stimulating learning environment. Each teacher brings their own 
         unique expertise and love for teaching, ensuring that every child receives the support they need to succeed. 
         <br/>
         Our kindergarten is designed with young learners in mind. Our classrooms are bright, colorful, and filled with a variety of age-appropriate 
         learning materials. Outside, children can explore our safe and expansive play areas, complete with jungle gyms, sandpits, and gardens. 
         Every corner of our facility is thoughtfully designed to inspire curiosity and foster independence.
        </p>
      </div>
      <div className='card-comp'>
        <img className='cardImg' src={ava1} alt="Indoor"/>
          <h2 className='cardTitle' >Clement Thipe <br/> Principal</h2>
          <p className='cardContent' ><span> Education:</span> Bachelor's Degree in Early Childhood Education, University of Pretoria <br/>
          <span>Experience:</span> 10 years of experience teaching,
           Mr Thipe has worked in both public and private schools, nurturing the academic and emotional growth of young children.
          </p>
      </div>

      <div className='card-comp'>
        <img className='cardImg' src={ava2} alt="Indoor"/>
          <h2 className='cardTitle' >Karabo Maphutha <br/> Deputy Principal</h2>
          <p className='cardContent' ><span>Education:</span> Diploma in Early Childhood Development, University of Johannesburg <br/>
          <span>Experience:</span> 5 years of experience as an assistant teacher in kindergartens, with expertise in physical activities and motor skills development.
          </p>
      </div>
      
      <div className='card-comp'>
        <img className='cardImg' src={ava3} alt="Indoor"/>
          <h2 className='cardTitle' >Sipho Ngutshana <br/> Art and Craft</h2>
          <p className='cardContent' ><span>Education:</span> Bachelor of Fine Arts, University of Mpumalanga<br/>
          <span>Experience:</span> 7 years of experience teaching art and crafts to young children. He helped design art curriculums that foster creativity.
          </p>
      </div>
      
      <div className='card-comp'>
        <img className='cardImg' src={ava4} alt="Indoor"/>
          <h2 className='cardTitle' >Judith Tseka <br/> Language Specialist</h2>
          <p className='cardContent' ><span>Education:</span> Master's Degree in Early Literacy, University of South Africa (UNISA)<br/>
          <span>Experience:</span> 8 years of experience specializing in early literacy and language development in young learners.<br/>
          </p>
      </div>

      <div className='card-comp'>
        <img className='cardImg' src={ava5} alt="Indoor"/>
          <h2 className='cardTitle' >Kgantsho Thipe <br/> Music & Movement</h2>
          <p className='cardContent' ><span>Education:</span> Diploma in Music Education, University of Witwaterrand <br/>
          <span>Experience:</span> 6 years of experience as a music and movement instructor, teaching rhythm, dance, and song to young learners. <br/>
          </p>
      </div>

      <div className='card-comp'>
        <img className='cardImg' src={ava6} alt="Indoor"/>
          <h2 className='cardTitle' >Ofentse Thulare <br/>Childhood Speacialist</h2>
          <p className='cardContent' ><span>Education:</span> Bachelor’s Degree in Early Childhood Education, University of Cape Town<br/>
          <span>Experience:</span> With 12 years of experience teaching children ages 3-5. <br/>
          </p>
      </div>

      <div className='card-comp'>
        <img className='cardImg' src={ava7} alt="Indoor"/>
          <h2 className='cardTitle' >Puseletso Mokoena <br/>  Science & Nature </h2>
          <p className='cardContent' ><span>Education:</span> Bachelor of Science in Education, University of KwaZulu-Natal <br/>
          <span>Experience:</span> 6 years of experience teaching early science concepts, including nature exploration. <br/>
          </p>
      </div>

      <div className='card-comp'>
        <img className='cardImg' src={ava8} alt="Indoor"/>
          <h2 className='cardTitle' >Thabiso Phora <br/> Infant & Toddler Care</h2>
          <p className='cardContent' ><span>Education:</span> Diploma in Early Childhood Development, Tshwane University of Technology <br/>
          <span>Experience:</span> 8 years of experience working with infants and toddlers, focusing on the developmental needs of children aged 6 months to 2 years.
          </p>
      </div>

    <Footer/>
    </div>
  );
};

export default About;
