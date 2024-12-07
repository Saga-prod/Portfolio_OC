import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import grimoire from "../../Assets/Projects/grimoire.png";
import kasa from "../../Assets/Projects/kasa.png";
import sophie from "../../Assets/Projects/sophieBluel.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grimoire}
              title="Mon Vieux Grimoire"
              description="Here is a book rating website for a chain of bookstores called 'Le Vieux Grimoire' in Lille. The website will be named 'Mon Vieux Grimoire' and will allow members to add new books and give them ratings visible to the public. My job was to work on the back-end of this project."
              ghLink="https://github.com/Saga-prod/Mon_vieux_grimoire"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kasa}
              title="Kasa"
              description="The Kasa website, a company specializing in peer-to-peer apartment rentals. Was coded over 10 years ago in ASP.NET, with a significant amount of legacy code. My job was to initiate a complete overhaul to switch to a full JavaScript stack with Node.js for the back-end and React for the front-end."
              ghLink="https://github.com/Saga-prod/Creez-une-application-web-de-location-immobili-re-avec-React_OpenClassRoom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sophie}
              title="Sophie Bluel"
              description={`For this project, i had to work on the portfolio of this architecte named Sophie Bluel.
              My tasks were - to implémente the page with the project of this person. - to create the logic behind the connexion of the client on the website (admin access). - to implemente the modal that allow to uplaud now projects.`}
              ghLink="https://github.com/Saga-prod/Portfolio-architecte-sophie-bluel_OpenClassroom"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
