import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Services extends Component {
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
    if (this.props.resumeServices && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.services;
      var services = this.props.resumeServices.map(function (services) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={services.title}
            style={{ cursor: "pointer" }}
          >
            <span className="services-item d-block">
              <div className="foto" onClick={() => detailsModalShow(services)}>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + services.images}
                    alt="servicesImages"
                    height="auto"
                    style={{ marginBottom: 0, paddingBottom: 0, position: 'relative', maxWidth: '100%', objectFit: 'cover' }}
                  />
                  <br />
                  <p className="services-title-settings mt-3">
                    {services.title}
                  </p>
                  <p className="services-desc-settings mt-3">
                    {services.description}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="services">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{services}</div>
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

export default Services;
