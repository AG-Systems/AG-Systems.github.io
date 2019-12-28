import React from 'react';
import radial from '../images/radial_2.png';
import FadeIn from 'react-fade-in';
import $ from "jquery";
import simpleParallax from 'simple-parallax-js';


import math from "../images/math.png";
import biz from "../images/frme.png";
import cs from "../images/cs.png";
import ce from "../images/ce.png";
import swe from "../images/swe.png";
import ss from "../images/ss.png";
import cp from "../images/cp.png";
import design from "../images/design.png";
import poker from "../images/poker.png";
import stocks from "../images/stocks.png";

class Home extends React.Component {
  constructor(props)
  {
    super(props);

    this.state= {
        interests: [
          {
            "title": "Entrepreneurship",
            "img": biz
          },
          {
            "title": "Mathematics",
            "img": math
          },
          {
            "title": "Computer Science",
            "img": cs
          },
          {
            "title": "Computer Engineering",
            "img": ce
          },
          {
            "title": "Software Engineering",
            "img": swe
          },
          {
            "title": "Software Security",
            "img": ss
          },
          {
            "title": "Competitive programming",
            "img": cp
          },
          {
            "title": "Design",
            "img": design
          },
          {
            "title": "Poker",
            "img": poker
          },
          {
            "title": "Stock Market",
            "img": stocks
          }
      ]
    }

    $('html, body').animate({ scrollTop: 0 }, 'fast');

  }

  componentDidMount()
  {
    let element = document.getElementById("navbar");
    if(this.props.location.pathname != "/")
    {
        element.style.background = 'transparent';
    } else {
        element.style.background = 'linear-gradient(180deg,rgba(18,23,28,.75),transparent);';
    }
    element.style.boxShadow = "";
     $("#navbar").addClass("bg-transparent");
     $("#navbar").addClass("mxdrble-navbar");
  }

  render() {
    return (
      <div>
          <div className="bg" style={{ margin: "0px" }}>
              <span style={{ marginBottom: "50px", zIndex: "7"  }}>
                <FadeIn>
                  <h1 className="text-center" style={{ color: "white"}}> Welcome! </h1>
                  <h1 className="text-center d-none d-lg-block" style={{ color: "white" }}> -Max Chakhmatov</h1>
                  <h1 className="text-center d-lg-none" style={{ color: "white"}}> -Max</h1>
                  <h1 className="text-center d-lg-none" style={{ color: "white" }}> Chakhmatov</h1>

                  <div className="card text-white bg-dark mt-5" style={{width: '20rem', margin: "0 auto",
                      boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px"
                   }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vhd_Q6vYzz31DCdOpPRVIqc1r9YzSasnHPXKNS-Wp17RwxnM" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <FadeIn delay={350}>
                        <h5 className="card-title">Student</h5>
                        <p className="card-text">Just a nerdy lad who loves programming and computer science.</p>
                      </FadeIn>
                    </div>
                  </div>
                </FadeIn>
              </span>
              <img className="radial" src={radial} />
          </div>
      </div>
    );
  }
}

export default Home;
