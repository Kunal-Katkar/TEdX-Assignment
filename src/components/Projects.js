import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Neel Gala",
      description: " ",
      imgUrl: projImg1,
    },
    {
      title: "Udit Mishra",
      description: "",
      imgUrl: projImg2,
    },
    {
      title: "Tim Poston",
      description: "",
      imgUrl: projImg3,
    },
    {
      title: "Sriram Ramamaswamy",
      description: "",
      imgUrl: projImg4,
    },
    {
      title: "Robin Chaurasiya",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "Rajeswari Vaidyanathan",
      description: "",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our Speakers</h2>
                <p>Stay Tuned to know our speaker</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Past Speakers </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Connect</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">A Tribute</Nav.Link>
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
                      <p>The TEDxNITKSurathkal team takes this moment to grieve the demise of Govind Jeevan, a bright student of NITK and one of its long-time proponents. Our deepest condolences go to his family and friends for the loss of a dear one.

Govind was an active member of the TEDxNITKSurathkal core team and community, with his impact spanning several editions of the event. He led the way in discovering and propagating ideas worth spreading.

Our team fondly remembers him for his ability to spot the challenges faced by the NITK community and his drive to explore and highlight feasible solutions for them. We will greatly miss his presence and the unique perspectives he brought to the table.

As has been seen with numerous events and initiatives on campus, Govind had an inspiring effect on the people he worked with, through his work and interactions with fellow students. At TEDxNITKSurathkal, his contributions ranged from Speaker Curation, Event Website Management, Merchandise, and Creative Design in the 2019 edition to leading an entire team for organising the 2020 edition themed ‘Mirrors and Windows’.

He saw worth in reflecting upon the events’ impact on the NITK community and kept brainstorming ways in which we could derive more value for the community.

May he rest in peace.

Team TEDxNITKSurathkal</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
