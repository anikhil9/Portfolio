import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ricecheck1.jpg";
import projImg2 from "../assets/img/Flav1.jpg";
import projImg3 from "../assets/img/Exam.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Rice Leaf Disease Detection",
      description: "A vital tool for farmers, this project provides real-time detection of rice leaf diseases, empowering agricultural communities with instant, accurate insights to protect their crops and livelihoods.",
      imgUrl: projImg1,
      link: "https://github.com/anikhil9/Rice_Leaf_Disease_Detection" 
    },
    {
      title: "Exam Scheduling Management System",
      description: "A streamlined solution for educational institutions, this system simplifies the complexities of exam scheduling, ensuring students and faculty have easy, 24/7 access to their academic timelines.",
      imgUrl: projImg3,
      link: "https://github.com/anikhil9/Exam-Scheduling-Management-System" 
    },
    {
      title: "Flavors Unleashed : A Taste Odyssey",
      description: "A digital journey through the world of flavors, this project brings culinary inspiration to life, offering users a dynamic recipe book experience enhanced with predictive insights and visually engaging data.",
      imgUrl: projImg2,
      link: "https://github.com/anikhil9/Recipe_App_MVC_L-master"
    }
  ];

  return (
    <section className="project" id="projects" style={{ position: 'relative' }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
        style={{ position: 'absolute', right: 0, bottom: 0, width: '519px', height: '380px' }}
      />
    </section>
  )
}
