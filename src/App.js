import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Products from "./components/Products";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <div
          className="col-md-12 mx-auto language"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          <span className="number" style={{ cursor: "pointer", marginLeft: "10px" }} onClick={() => { window.location.href = "tel: +905368853513" }}
          >+90 (536) 885 3513</span>
          <div className="text-right" style={{ display: "flex", alignItems: "center" }}>
            <div
              onClick={() =>
                this.applyPickedLanguage(
                  window.$primaryLanguage,
                  window.$secondaryLanguageIconId
                )
              }
              style={{ marginRight: "10px", cursor: "pointer" }}
            >
              <span
                className="iconify language-icon"
                data-icon="twemoji-flag-for-flag-turkey"
                data-inline="false"
                id={window.$primaryLanguageIconId}
              ></span>
            </div>
            <div
              onClick={() =>
                this.applyPickedLanguage(
                  window.$secondaryLanguage,
                  window.$primaryLanguageIconId
                )
              }
              style={{ marginRight: "10px", cursor: "pointer" }}
            >
              <span
                className="iconify language-icon"
                data-icon="twemoji-flag-for-flag-united-kingdom"
                data-inline="false"
                id={window.$secondaryLanguageIconId}
              ></span>
            </div>
          </div>
        </div>

        <Header
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedData={this.state.sharedData.basic_info}
        />
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Services
          resumeServices={this.state.resumeData.services}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Products
          resumeProducts={this.state.resumeData.products}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />

      </div>
    );
  }
}

export default App;
