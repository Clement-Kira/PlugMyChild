import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Components.css';
import homeImg from '../Images/home-bg.jpeg';
import indoorImg from '../Images/indoor-img.jpeg';
import outdoorImg from '../Images/outdoor-img.jpeg';
import readingImg from '../Images/readingImg.jpeg';
// import bundleofjoy from '../Images/bundleofjoyImg.jpeg';
import ourgraduates from '../Images/ourgraduatesImg.jpeg';
import Footer from './Footer';

const Activities = () => {
  const navigate = useNavigate();
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
          <h1 className='heading'>Activities of Our Kindergarten!</h1>
          <p>
            We offer a wide range of carefully curated activities that cater to every child's growth and learning journey. Our art and craft sessions
            encourage creativity and self-expression, while music and dance allow kids to explore rhythm and movement. Physical activities such as 
            obstacle courses and outdoor games promote gross motor skills and healthy physical development.
            <br/>
            Additionally, we introduce early literacy and numeracy through fun, hands-on activities like interactive storytelling, puzzles, and number games, 
            helping to build essential problem-solving and critical thinking skills. Science experiments and nature exploration spark curiosity and 
            encourage children to ask questions and discover the world around them.
            <br/>
            We also prioritize social and emotional development through group activities that foster teamwork, empathy, and communication skills. 
            Through all these activities, your child will build confidence and a love for learning in a warm and supportive environment.
          </p>

        </div>
        <div className="welcome-image">
          <img src={homeImg} alt="Kindergarten"/>
        </div>
      </div>

      {/* Cards  */}
      <div className='card-comp'>
        <img className='cardImg' src={indoorImg} alt="Indoor"/>
          <h2 className='cardTitle' >Indoor Activities </h2>
          <p className='cardContent' >Art & Craft: Children can express their creativity through painting, drawing, and crafting, <br/>
           helping to develop fine motor skills and imagination. <br/>
           Music & Dance: Singing, dancing, and playing simple musical instruments to develop rhythm and auditory skills while having fun. <br/>
           ...<br/>
           <button className='readMoreBtn' onClick={() => navigate('/indoor-activities')}>
            Read More
           </button>
          </p>
      </div>

      <div className='card-comp'>
          <img className='cardImg' src={outdoorImg} alt="outdoorImg"/>
          <h2 className='cardTitle' >Outdoor Activities</h2>
          <p className='cardContent' >Playground Games: Running, climbing, and swinging on jungle gyms to promote physical health,<br/>
          coordination, and muscle development. <br/>
          Gardening: Kids learn about nature by planting seeds, watering plants, and watching them grow, fostering responsibility and a connection <br/>
          ...<br/>
          <button className='readMoreBtn' onClick={() => navigate('/indoor-activities')}>
            Read More
          </button>
          </p>
      </div>

      <div className='card-comp'>
        <img className='cardImg' src={readingImg} alt="reading"/>
        <h2 className='cardTitle' >Reading Skills</h2>
        <p className='cardContent' >Guided Reading Sessions: Teachers work with small groups to read short, simple books, allowing <br/>
        children to improve their vocabulary and comprehension.sahfjksa <br/>
        Phonics and Letter Recognition: Children begin with letter sounds, sight words, and phonics-based learning to<br/>
        ...<br/>
        <button className='readMoreBtn' onClick={() => navigate('/indoor-activities')}>
          Read More
        </button>
        </p>
      </div>

      <div className='card-comp'>
        <img className='cardImg' src={ourgraduates} alt="graduates"/>
        <h2 className='cardTitle' >Our Bees (4-6years) </h2>
        <p className='cardContent' >Social and Emotional Skills: Confidence, communication abilities, and empathy, allowing them to <br/>
         well with peers and handle new environments. <br/>
         Problem-Solving and Critical Thinking: Through puzzles, games, and hands-on activities, they learn how to <br/>
         ...<br/>
         <button className='readMoreBtn' onClick={() => navigate('/indoor-activities')}>
          Read More
        </button>
        </p>
      </div>

       <Footer/>
      
    </div>
  );
};

export default Activities;
