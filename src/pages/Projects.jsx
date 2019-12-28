import React from 'react';
import FadeIn from 'react-fade-in';
import { Parallax, Background } from 'react-parallax';
import $ from "jquery";
import { Link, Switch, Route } from 'react-router-dom';

class Projects extends React.Component {
  constructor(props)
  {
    super(props);

    this.state= {
        interests: [
          {
            "title": "ChronoCI",
            "img": "https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/drapi8sk2uj62hghvbc4",
            "desc": "Built a service for businesses and developers to find vulnerabilities in their projects / websites.",
            "link": "https://chronoci.herokuapp.com/",
            "bullet_points": [
              "70 total users",
              "Average daily 4 users per day",
              "Pitched it to Sequoia capital & former CEO of Jamba Juice",
              "Tech stack: Ruby on Rails, React, Redux, Apollo, Graphql, React-Router, Stripe, Kubernetes, Webpack, Github-api, redis, sidekiq, and PostgreSQL"
            ],
            "status": "Shut down (site is on a free tier heroku)",
            "dates" : ["May 2018", "Apr 2019"],
            "length": "1 yr"
          },
          {
            "title": "PixelML",
            "img": "https://i.imgur.com/kn6vAqc.png",
            "desc": "Attempted to build a service for businesses to evaluate the effectiveness of online advertisements.",
            "link": "https://github.com/AG-Systems/rails-ml",
            "bullet_points": [
              "Implemented a conventional neural network which was trained off good and bad advertisements",
              "Hosted on Google compute engine using apache2, and passenger. Images are stored securely on Amazon S3",
              "Built using Ruby on Rails for user registration. Includes ad uploading, HTTPS security, and payment subscription system",
              "Tech stack: Tensorflow, TFLearn, Sklearn, Python, Ruby on Rails, Stripe api, Google Compute Engine, Amazon S3, and React.js"
            ],
            "status": "Shut down",
            "dates" : ["May 2017", "Aug 2017"],
            "length": "4 mos"
          },
          {
            "title": "ConfidentMindset",
            "img": "https://raw.githubusercontent.com/AG-Systems/confidentmindset/master/public/bg1.jpg",
            "desc": "Attempted to build a site for users to get improve confidence by providing self help videos.",
            "link": "https://github.com/AG-Systems/confidentmindset",
            "bullet_points": [
              "First big project that I built with using Ruby on Rails",
              "Tech stack: Ruby on Rails, Heroku, Stripe api, & AngularJS"
            ],
            "status": "Shut down",
            "dates" : ["Oct 2016", "Dec 2016"],
            "length": "3 mos"
          },
      ]
    }
    $('html, body').animate({ scrollTop: 0 }, 'fast');


  }

  componentDidMount()
  {
    let element = document.getElementById("navbar");
    element.style.boxShadow = "";
   $("#navbar").addClass("bg-transparent");
   $("#navbar").addClass("mxdrble-navbar");
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
        <FadeIn delay={400}>
          <Parallax
              blur={{ min: -15, max: 15 }}
              bgImage={"https://www.larutadelsorigens.cat/wallpic/full/24-243147_forge-world-halo-reach-4k-background.png" }
              bgImageAlt="the dog"
              strength={500}>
              <FadeIn delay={250}>
                  <h1 style={{ marginTop: "150px", textAlign: "center", fontSize: "50px" }}> My projects </h1>
              </FadeIn>
              <div style={{ height: '300px' }} />
          </Parallax>

          <div style={{ background: "white" }}>
              <div className="card-deck" style={{ margin: "0 auto", paddingRight: "10px", paddingLeft: "10px" }}>

                {this.state.interests.map(function(item, index)
                {
                    return(
                        <div className="card text-white bg-dark mt-5" style={{ minWidth: '300px', width: "auto", maxWidth: "370px", margin: "0 auto",
                            boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px"
                         }} key={index} >
                          <img src={ item.img } className="card-img-top" />
                          <div className="card-body">
                              <h5 className="card-title">{ item.title } </h5>
                              <p className="card-text">{ item.desc }</p>
                              <ul>
                                { (item["bullet_points"]).map(function(bullet_point, bullet_index)
                                {
                                    return(
                                          <li key={ 100 * bullet_index }> { bullet_point } </li>
                                    );
                                })}
                              </ul>
                              <p className="card-text" style={{ color: "#9b9b9b"}}>{ item.dates[0] } - { item.dates[1] } • { item.length }</p>
                              <Link to={ item.link } className="btn btn-mycolor" style={{ width: "100%" }}>Link</Link>
                              <p className="card-text">{item.status} </p>
                            </div>
                        </div>
                    );

                })}
              </div>
          </div>
          <div style={{ height: '150px' }} />
          </FadeIn>
      </div>
    );
  }
}

export default Projects;
