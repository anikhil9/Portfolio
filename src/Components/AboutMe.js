import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const AboutMe = () => {
  const iconContainerStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 10px',
    transition: 'transform 0.3s',
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'scale(1.2)'; // Enlarge icon container on hover
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'scale(1)'; // Reset icon container size when not hovering
  };

  return (
    <section className="about-me" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12}>
            <div className="about-me-text">
              <h2>About Me</h2>
              <p>
                I am currently in my final semester of pursuing a Master of Science in Computer System Analysis at the University of South Florida. My academic journey has allowed me to develop a deep understanding of distributed systems, advanced database management, and cloud solutions architecture. Throughout my studies, I have worked on several technical projects that have significantly enhanced my technical skills, particularly in computer networks and distributed systems, giving me a strong foundation in both theoretical knowledge and practical applications.
                <br/><br/>
                In addition to my academic experience, I have accumulated two years of professional experience as a Software Development Engineer at Optum and as a Programmer Analyst Trainee at Cognizant. During my tenure at these companies, I led backend development projects, optimized web applications, and contributed to the successful deployment of scalable and secure software solutions. My hands-on experience with technologies like .NET, Spring Boot, AWS, and Docker has equipped me with the skills necessary to tackle complex technical challenges and deliver high-quality software solutions.
                <br/><br/>
                With my combination of academic and professional experience, I am well-prepared to contribute to innovative software development projects. I am a highly motivated individual with a strong work ethic and a passion for continuous learning. If you are looking for a dedicated and skilled software developer with a can-do attitude, I am confident that I can make a valuable contribution to your team.
              </p>
              <a href="/Nikhil Alla Resume.pdf" download="Nikhil_Alla_Resume.pdf" className="download-btn">
                Download My Resume
              </a>
              <div className="social-icon" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                <div 
                  style={iconContainerStyle} 
                  onMouseOver={handleMouseOver} 
                  onMouseOut={handleMouseOut}
                >
                  <a href="https://www.linkedin.com/in/alla-nikhil-96214217b/">
                    <img 
                      src={navIcon1} 
                      alt="LinkedIn" 
                      style={iconStyle} 
                    />
                  </a>
                </div>
                <div 
                  style={iconContainerStyle} 
                  onMouseOver={handleMouseOver} 
                  onMouseOut={handleMouseOut}
                >
                  <a href="https://www.facebook.com/alla.nikhil/">
                    <img 
                      src={navIcon2} 
                      alt="Facebook" 
                      style={iconStyle} 
                    />
                  </a>
                </div>
                <div 
                  style={iconContainerStyle} 
                  onMouseOver={handleMouseOver} 
                  onMouseOut={handleMouseOut}
                >
                  <a href="https://www.instagram.com/nikhil_chowdary_07?igsh=MTlhbHpmbzF1Z2hteg==">
                    <img 
                      src={navIcon3} 
                      alt="Instagram" 
                      style={iconStyle} 
                    />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
};

export default AboutMe;
