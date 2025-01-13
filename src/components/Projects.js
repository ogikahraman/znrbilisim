import React, { Component } from "react";
import { InView } from "react-intersection-observer";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map((projects, index) => {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
            }}
          >
            <span className="portfolio-item d-block">
              <InView
                as="div"
                triggerOnce
                onChange={(inView) => {
                  if (inView) {
                    const element = document.getElementById(`project-${index}`);
                    element.classList.add("fadeSlideUp");
                  }
                }}
              >
                <div
                  className="foto"
                  onClick={() => detailsModalShow(projects)}
                  id={`project-${index}`}
                  style={{ opacity: 0 }}
                >
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + projects.images}
                      alt="projectImages"
                      height="350px"
                      style={{
                        marginBottom: 0,
                        paddingBottom: 0,
                        position: "relative",
                        maxWidth: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <br />
                    <p className="project-title-settings mt-3">
                      {projects.title}
                    </p>
                    <p className="project-desc-settings mt-3">
                      {projects.description}
                    </p>
                  </div>
                </div>
              </InView>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1
            className="section-title"
            style={{ color: "black", fontSize: "31px" }}
          >
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
