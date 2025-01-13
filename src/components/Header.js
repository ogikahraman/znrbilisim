import React, { Component } from "react";
import TypingEffect from "react-typing-effect";
import Toggle from "react-toggle";
import Particles from "react-tsparticles";
import particlesConfig from "../config/particlesConfig.js";
import particlesConfigLight from "../config/particlesConfigLight.js";
import "react-toggle/style.css";
import { Icon } from "@iconify/react";
import { InView } from "react-intersection-observer";

class Header extends Component {
  constructor() {
    super();
    this.state = { checked: true };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    let titles = [];
    if (this.props.resumeBasicInfo) {
      titles = this.props.resumeBasicInfo.titles.map(x => x.toUpperCase());
      if (!Array.isArray(titles) || titles.some(item => typeof item !== 'string')) {
        titles = [];
      }

    }

    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
    }

    return (
      <header id="home" style={{ height: window.innerHeight, display: 'block' }}>
        <Particles
          id="header-tsparticles"
          options={this.state.checked ? particlesConfig : particlesConfigLight}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <div className="row aligner" style={{ height: '100%' }}>
          <div className="col-md-12">
            <div>
              <InView
                as="div"
                triggerOnce
                onChange={(inView) => {
                  const element = document.getElementById("header-section");
                  if (inView) {
                    element.classList.add("fadeInUp");
                  } else {
                    element.classList.remove("fadeInUp");
                  }
                }}
              >
                <div id="header-section" className="header-content">
                  <img
                    src={process.env.PUBLIC_URL + "/images/znr.png"}
                    alt="logo"
                    height="170"
                    style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                  />
                  <br />
                  <h1 className="mb-0">
                    {name}
                  </h1>
                  <div className="title-container">
                    {titles.length > 0 ? (
                      <TypingEffect
                        className="title-styles"
                        text={titles}
                        speed={51}
                        eraseDelay={2000}
                        typingDelay={0}
                        eraseSpeed={40}
                      />
                    ) : (
                      <p>No Titles Available</p>  // Eğer titles dizisi boşsa burada alternatif bir metin göster
                    )}
                  </div>
                  <Toggle
                    checked={this.state.checked}
                    onChange={e => this.onThemeSwitchChange(e.target.checked)}
                    className="react-toggle mx-auto custom-toggle"
                    icons={{
                      checked: (
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "80px",
                            color: "#353239",
                            width: "120%",
                            height: "120%",
                          }}
                        >
                          <Icon icon="noto-v1:sun-with-face" />
                        </span>
                      ),
                      unchecked: (
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "80px",
                            color: "#353239",
                            width: "120%",
                            height: "120%",
                          }}
                        >
                          <Icon icon="noto-v1:crescent-moon" />
                        </span>
                      ),
                    }}
                    id="icon-toggle"
                    aria-label="Theme toggle"
                  />
                </div>
              </InView>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
