import React from 'react';
import FadeIn from 'react-fade-in';
import { Parallax, Background } from 'react-parallax';
import $ from "jquery";

class About extends React.Component {
  constructor(props)
  {
    super(props);
    $('html, body').animate({ scrollTop: 0 }, 'fast');

  }

  componentDidMount()
  {
    let element = document.getElementById("navbar");
    element.style.backgroundColor = '#12171c';
    element.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px";
     $("#navbar").removeClass("bg-transparent");
     $("#navbar").removeClass("mxdrble-navbar");
    if(this.props.location.pathname != "/")
    {
        element.style.background = 'transparent';
    } else {
        element.style.background = 'linear-gradient(180deg,rgba(18,23,28,.75),transparent);';
    }
  }

  componentWillUnmount()
  {
    let element = document.getElementById("navbar");
    if(this.props.location.pathname != "/")
    {
        element.style.background = 'transparent';
    } else {
        element.style.background = 'linear-gradient(180deg,rgba(18,23,28,.75),transparent);';
    }
  }

  render() {
    return (
      <div>
          <FadeIn delay={350}>
              <div style={{ height: "auto", minHeight: "100vh", background: "#fafbfe" }}>
                <div style={{width: '100%', height: "150px"}}></div>
                <div className="card text-dark" style={{width: '28rem', minWidth: "300px", margin: "0 auto", boxShadow: '0 0 35px 0 rgba(154,161,171,.15)'}}>
                <img class="card-img-top" src="https://wallpapercave.com/wp/wp2022155.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h6 className="card-title" style={{ color: "#98a6ad" }}>About me</h6>
                    <p className="card-text" syle={{ color: "#6c757d" }}>Email: maxchakhmatov (at g mail dot com)</p>
                    <p className="card-text" syle={{ color: "#6c757d" }}>Born & Raised in Silicon Valley</p>
                    <a href="https://github.com/AG-Systems" className="btn btn-mycolor">Github</a>
                    <br/>
                    <br/>
                    <a href="https://www.linkedin.com/in/max-chakhmatov/" className="btn btn-mycolor">LinkedIn</a>
                  </div>
                </div>
              </div>
          </FadeIn>
      </div>
    );
  }
}

export default About;
