import React from 'react';
import 'react-multi-carousel/lib/styles.css';
//import { Carousel } from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';
import colorSharp from "../assets/img/color-sharp.png";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Optum",
      period: "Oct 2021 - Jul 2023",
      description: "At Optum, I took on the role of a Software Engineer where I led the backend development of the ELGS SaaS Application. Utilizing C#, TopDown CCM, and MS SQL, I applied both functional programming and object-oriented programming techniques to enhance the functionality and performance of the system. I was responsible for architecting a robust .NET Framework application, which included the integration of Swagger API, automating the cleanup of outdated PDF records. This innovation led to significant cost savings, approximately $180,000, by reducing NAS storage purchases by 50%. My role also involved securing RESTful API integrations using token authentication, HTTP TLS 1.2, and JSON parsing to ensure efficient data retrieval. I further enhanced the entity’s microservices by integrating Kafka with the .NET Framework, enabling seamless communication with existing services. By optimizing SQL queries and stored procedures, I boosted performance and reduced loading times by 27%, which greatly improved the system's operational efficiency. In addition, I automated the CI/CD pipeline by integrating .NET code with GitHub, Jenkins, and SonarQube, leading to efficient builds, artifact management, and comprehensive code quality analysis. I was also involved in deploying new production servers and distributing components to reduce the load on existing servers. This enhancement increased our system's capacity to process up to 1,000,000 JSON/XML records per day, transforming raw data into new letter templates. My efforts in leveraging SonarQube for code quality resulted in a 90% code coverage through MSTest Unit Testing.",
      skills: ["C#", ".Net", "MSSQL", "Jenkins","Kafka","MS Test","CI/CD","Rally", "SonarQube", "Swagger", "Object Oriented Programming","Functional Programming"]
    },
    {
      title: "Programmer Analyst Trainee",
      company: "Cognizant",
      period: "Feb 2021 - Aug 2021",
      description: "During my time at Cognizant as a Programmer Analyst Trainee, I engineered and optimized web applications using the Spring Boot framework. This included leveraging its rapid backend development capabilities and REST API integrations to build scalable and efficient applications. I also crafted dynamic, responsive user interfaces using JSP, significantly enhancing the user experience for the Audit Management System. In addition to development, I integrated Spring Security with JWT to ensure secure access control across the application. I was responsible for containerizing the app using Docker, and setting up CI/CD pipelines through AWS CodeCommit and ECS Fargate, which reduced deployment time by 70% and ensured consistent environments across different stages of development. My role also involved active participation in agile development practices, where I contributed to sprint planning, daily stand-ups, and retrospectives, fostering an iterative and collaborative project workflow. These experiences have provided me with a deep understanding of backend development, API security, CI/CD pipeline automation, and agile methodologies. I have honed my skills in both individual and team settings, constantly striving to improve systems' efficiency and security while staying up-to-date with the latest technologies and best practices.",
      skills: ["SpringBoot","Java","RestAPI","JSP","JWT","HTML", "CSS", "Docker","AWS CodeCommit","ECS Fargate", "MySQL","Agile"]
    }
  ];

  return (
    <section className="experience" id="experience">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="experience-bx wow zoomIn">
                        <h2>Experience</h2>
                        <Carousel responsive={{
                          superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
                          desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
                          tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
                          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
                        }} infinite={true} className="owl-carousel owl-theme experience-slider">
                            {experiences.map((experience, index) => (
                              <div className="item" key={index}>
                                  <h3>{experience.title}</h3>
                                  <h4>{experience.company}</h4>
                                  <span>{experience.period}</span>
                                  <p>{experience.description}</p>
                                  <ul className="skills-list">
                                    {experience.skills.map((skill, i) => (
                                      <li key={i}>{skill}</li>
                                    ))}
                                  </ul>
                              </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="BG" />
    </section>
  )
}
