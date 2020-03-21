import React from 'react';
import FadeIn from 'react-fade-in';
import $ from "jquery";
import date from 'date-and-time';
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const  DATE_DIFF = require("date-diff-js");


class Home extends React.Component {
  constructor(props)
  {
    super(props);
    $('html, body').animate({ scrollTop: 0 }, 'fast');

    this.state = {
      current_selection: "experience"
    };
  }


  getEducation() {
    return [
          {
            "title": "Software Developer",
            "school": "QuesGen Systems",
            "location": "Burlingame, CA",
            "date_started": "Oct 2019",
            "date_ended": "Present",
            "img": require("../images/logos/quesgen.png"),
            "description": [
              "• Built internal full-fledged mobile app with flutter, redux, and dart",
              "• Features proper full-fledged state management, authentication, security, and high performance",
              "• Wrote and performed unit testing, integration testing, and widget testing for mobile app",
              "• Fixed bugs, built features and improved the overall experience of QuesGen dashboard",
              "• Found and fixed security vulnerabilities",
              "• Tech stack used: Flutter, Dart, Redux (state management), PHP, SQL, and Hack"
            ],
            "tldr": "",
            "media": []
          },
          {
            "title": "Mathematics Tutor",
            "school": "Foothill College",
            "location": "Los Altos, CA",
            "date_started": "Sep 2019",
            "date_ended": "Dec 2019",
            "img": require("../images/logos/foothill.png"),
            "description": [
              "• Tutored Precalculus (MATH 48A) for pass the torch program"
            ],
            "tldr": "",
            "media": []
          },
          {
            "title": "Programming Tutor",
            "school": "Self-Employeed",
            "location": "N/A",
            "date_started": "Jul 2019",
            "date_ended": "Nov 2019",
            "img": require("../images/logos/no_logo.png"),
            "description": [
              "• Taught the basics of programming for various high school students",
              "• Languages taught: Python, Java, and HTML / CSS / JS"
            ],
            "tldr": "",
            "media": []
          },

        ];
  }

getExperience() {
  return [
        {
          "title": "Software Developer",
          "company": "QuesGen Systems",
          "location": "Burlingame, CA",
          "date_started": "Oct 2019",
          "date_ended": "Present",
          "img": require("../images/logos/quesgen.png"),
          "description": [
            "• Built internal full-fledged mobile app with flutter, redux, and dart",
            "• Features proper full-fledged state management, authentication, security, and high performance",
            "• Wrote and performed unit testing, integration testing, and widget testing for mobile app",
            "• Fixed bugs, built features and improved the overall experience of QuesGen dashboard",
            "• Found and fixed security vulnerabilities",
            "• Tech stack used: Flutter, Dart, Redux (state management), PHP, SQL, and Hack"
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Mathematics Tutor",
          "company": "Foothill College",
          "location": "Los Altos, CA",
          "date_started": "Sep 2019",
          "date_ended": "Dec 2019",
          "img": require("../images/logos/foothill.png"),
          "description": [
            "• Tutored Precalculus (MATH 48A) for pass the torch program"
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Programming Tutor",
          "company": "Self-Employeed",
          "location": "N/A",
          "date_started": "Jul 2019",
          "date_ended": "Nov 2019",
          "img": require("../images/logos/no_logo.png"),
          "description": [
            "• Taught the basics of programming for various high school students",
            "• Languages taught: Python, Java, and HTML / CSS / JS"
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Founder",
          "company": "ChronoCI",
          "location": "Bay Area",
          "date_started": "May 2018",
          "date_ended": "April 2019",
          "img": require("../images/logos/chronoci.jpg"),
          "description": [
            ""
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Software Engineer Intern",
          "company": "Mindsight.io",
          "location": "Remote",
          "date_started": "Jul 2018",
          "date_ended": "Oct 2018",
          "img": require("../images/logos/mindsight.png"),
          "description": [
            "• Created unit and end to end tests for the dashboard with Jest, and Cypress",
            "• Drastically redesigned the dashboard with Vue.js, Vue-router, Bulma, Webpack, and Apollo",
            "• Completely redesigned landing page with Vue.js, Vue-router, & Bootstrap",
            "• Implemented a feature where users can compare past code commits and current code commits with Apollo, Graphql, and InfluxDB",
            "• Tech stack: Vue.js, Vue-router, Bulma, Webpack, Graphql, Apollo, Golang, PostgreSQL, auth0, and InfluxDB"
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Volunteer",
          "company": "San Fransisco Shakespeare Festival",
          "location": "Cuptertino, CA",
          "date_started": "Jul 2018",
          "date_ended": "Sep 2018",
          "img": require("../images/logos/sfshakes.png"),
          "description": [
            ""
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Software Engineer Intern",
          "company": "Fireflies.ai",
          "location": "San Fransisco, CA",
          "date_started": "Jan 2018",
          "date_ended": "Jul 2018",
          "img": require("../images/logos/fireflies.jpg"),
          "description": [
            "• Completely redesigned user interface with React.",
            "• Made improvements to user experience such as increasing site load speed by optimizing code.",
            "• Created an internal tool with Python that parses emails from Gmail API and inserts into Hubspot database",
            "• Built a Chrome extension using Webpack, React, internal API, and Hubspot API",
            "• Chrome extension features automatic audio note-taking that automatically sends to Hubspot",
            "• Tech stack: Meteor.js, React, React-Router, Webpack, Graphql, Apollo, MongoDB, Hubspot API, Gmail API"
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Founder",
          "company": "PixelML",
          "location": "Bay Area",
          "date_started": "May 2017",
          "date_ended": "Aug 2017",
          "img": require("../images/logos/no_logo.png"),
          "description": [
            "• Attempted to build a service for businesses to evaluate the effectiveness of online advertisements.",
            "• Implemented a conventional neural network which was trained off good and bad advertisements",
            "• Hosted on Google compute engine using apache2, and passenger. Images are stored securely on Amazon S3",
            "• Built using Ruby on Rails for user registration. Includes ad uploading, HTTPS security, and payment subscription system.",
            "• Tech stack: Tensorflow, TFLearn, Sklearn, Python, Ruby on Rails, Stripe api, Google Compute Engine, Amazon S3, and React.js"
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Founder",
          "company": "ConfidentMindset",
          "location": "Bay Area",
          "date_started": "Oct 2016",
          "date_ended": "Dec 2016",
          "img": require("../images/logos/no_logo.png"),
          "description": [
              ""
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Programming Instructor",
          "company": "theCoderSchool",
          "location": "San Mateo",
          "date_started": "Sep 2016",
          "date_ended": "Feb 2018",
          "img": require("../images/logos/thecoderschool.png"),
          "description": [
            "• Taught kids ages 7 to 15 coding skills through project-based learning.",
            "• Languages taught range from beginner level like Scratch to more advanced like JavaScript,Python and Ruby",
            "• Advance students learned basics of Ruby on Rails, Meteor.js, React, & ReactNative",
            "• API’s taught: YouTube api, Google maps api and Coinmarketcap api"
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Assistant",
          "company": "ConfidentMindset",
          "location": "Bay Area",
          "date_started": "May 2016",
          "date_ended": "Jul 2016",
          "img": require("../images/logos/swivl.png"),
          "description": [
              "• Helped packing boxes, and program units"
          ],
          "tldr": "",
          "media": []
        },
      ];
}

renderEducation() {


  const experience_list = this.getEducation();
  let experience = experience_list.map(function(exp, index) {
    let difference_months = "";
    if(exp.date_ended == "Present")
    {
      difference_months = DATE_DIFF(exp.date_started, (new Date(new Date().getFullYear(),new Date().getMonth())).toString(), 'Month').output + 1;
    } else {
      difference_months = DATE_DIFF(exp.date_started, exp.date_ended, "Month").output + 1;
    }

    let description_content = [];
    for (let value of experience_list[index].description) {
      description_content.push(<span key={"description-" + exp.title + exp.company + index}> { value } </span>);
      description_content.push(<br/>);
    }
    description_content.push(<br/>);

    return (
      <div className="media mt-5" key={index} >
        <img src={ exp.img } className="mr-3" alt="..." />
        <div className="media-body border-bottom d-none d-lg-block">
          <h3 className="mt-0" style={{ fontSize: "1.2rem" }}>{ exp.title }</h3>
          <p style={{ fontFamily: "Titillium Web" }}>
              <span style={{ fontWeight: "400" }}>{ exp.school } </span>
              <br/>
              <span style={{ color: "rgba(0,0,0,.6)" }}> { exp.date_started } - { exp.date_ended } • { difference_months } Months </span>
              <br/>
              <span style={{ color: "rgba(0,0,0,.6)" }}> { exp.location } </span>
          </p>
          <span>
            { description_content }
          </span>
        </div>
        <div className="media-body d-lg-none">

        </div>
      </div>
    );

  });

  return experience;
}


  renderExperience() {


    const experience_list = this.getExperience();
    let experience = experience_list.map(function(exp, index) {
      let difference_months = "";
      if(exp.date_ended == "Present")
      {
        difference_months = DATE_DIFF(exp.date_started, (new Date(new Date().getFullYear(),new Date().getMonth())).toString(), 'Month').output + 1;
      } else {
        difference_months = DATE_DIFF(exp.date_started, exp.date_ended, "Month").output + 1;
      }

      let description_content = [];
      for (let value of experience_list[index].description) {
        description_content.push(<span key={"description-" + exp.title + exp.company + index}> { value } </span>);
        description_content.push(<br/>);
      }
      description_content.push(<br/>);

      return (
        <div className="media mt-5" key={index} >
          <img src={ exp.img } className="mr-3" alt="..." />
          <div className="media-body border-bottom d-none d-lg-block">
            <h3 className="mt-0" style={{ fontSize: "1.2rem" }}>{ exp.title }</h3>
            <p style={{ fontFamily: "Titillium Web" }}>
                <span style={{ fontWeight: "400" }}>{ exp.company } </span>
                <br/>
                <span style={{ color: "rgba(0,0,0,.6)" }}> { exp.date_started } - { exp.date_ended } • { difference_months } Months </span>
                <br/>
                <span style={{ color: "rgba(0,0,0,.6)" }}> { exp.location } </span>
            </p>
            <span>
              { description_content }
            </span>
          </div>
          <div className="media-body d-lg-none">

          </div>
        </div>
      );

    });

    return experience;
  }


  render() {
    const bg_images = [
      "https://wallpapercave.com/wp/wp2022155.jpg",
      require('../images/bg/shutterstock_674781376.0.jpg'),
      require('../images/bg/photo-1533683083439-1a776a5653cb.jpg'),
      require('../images/bg/25048.jpg')
    ];

    const options = [
      'Work', 'Education'
    ];


    return (
      <div>
          <FadeIn delay={350}>
              <div style={{ height: "auto", minHeight: "100vh", background: "#fafbfe" }}>
                <div style={{width: '100%', height: "10px"}}></div>
                <div className="card text-dark" style={{width: '45%', minWidth: "300px", margin: "0 auto", boxShadow: '0 0 35px 0 rgba(154,161,171,.15)'}}>
                <div className="card-img-top" style={{ background: "url(" + bg_images[Math.floor(Math.random() * Math.floor(bg_images.length))] + ")", height: "200px", backgroundSize: "cover"  }} alt="Card image cap"></div>
                  <div className="card-body">
                    <img alt='' className='card-img-profile' src={ require("../images/profile/Wall-ESoundtrack.jpg") } style={{ height: "120px", width: "120px" }} />
                    <h3 className="card-text" style={{ fontFamily: "Titillium Web", color: "#1c1e20" }} >Max Chakhmatov</h3>
                    <a href={process.env.PUBLIC_URL + '/Max_Chakhmatov_CS_resume.pdf'} className="btn btn-mycolor"> Resume </a>
                    <br/>
                    <br/>
                    <p>Site is not fully complete yet. (mobile), Education, blog, and about does not work yet. </p>
                    <div className="footer-copyright py-3">
                      <a href="https://twitter.com/themaxadorable">
                        <i className="fab fa-twitter" style={{fontSize: '25px', color: "#1ebc8c"}} />
                      </a>
                      <a href="https://www.linkedin.com/in/max-chakhmatov/">
                        <i className="fab fa-linkedin" style={{fontSize: '25px', paddingLeft: '15px', color: "#1ebc8c"}} />
                      </a>
                      <a href="https://github.com/ag-systems">
                        <i className="fab fa-github" style={{fontSize: '25px', paddingLeft: '15px', color: "#1ebc8c"}} />
                      </a>
                      <a href="https://angel.co/chronoci">
                        <i className="fab fa-angellist" style={{fontSize: '25px', paddingLeft: '15px', color: "#1ebc8c"}} />
                      </a>
                    </div>
                  </div>
                  <div className="btn-group" style={{ width: "100%"}}>
                    <button type="button" className="btn border-bottom-active">Experience</button>
                    <button type="button" className="btn">Blog</button>
                    <button type="button" className="btn">About</button>
                  </div>
                </div>
                <div style={{width: '100%', height: "35px"}}></div>

                <div className="card text-dark"  style={{width: '45%', minWidth: "300px", margin: "0 auto", boxShadow: '0 0 35px 0 rgba(154,161,171,.15)'}}>
                  <div style={{ width: "30%", minWidth: "150px", float: "left" }}>
                    <Dropdown options={options} onChange={this._onSelect} value={options[0]} placeholder="Select an option" />
                  </div>

                  <div className="card-body">

                    { this.renderExperience() }

                  </div>
                  {/*
                  <div className="card-body">

                    { this.renderEducation() }

                  </div>
                 */}
                </div>

              </div>
              <div style={{width: '100%', height: "35px"}}></div>
          </FadeIn>
      </div>
    );
  }
}

export default Home;
