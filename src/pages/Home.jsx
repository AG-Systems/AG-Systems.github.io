import React from 'react';
import FadeIn from 'react-fade-in';
import $ from "jquery";
import date from 'date-and-time';
import { Link } from "react-router-dom";
import ExpandCollapse from 'react-expand-collapse';



import Card from "../components/Card.jsx";


const  DATE_DIFF = require("date-diff-js");
const hash = require('object-hash');



class Home extends React.Component {
  constructor(props)
  {
    super(props);
    $('html, body').animate({ scrollTop: 0 }, 'fast');


  }


getExperience() {
  return [
        {
          "title": "Frontend Engineer Intern",
          "sub_title": "Walmart eCommerce",
          "location": "Sunnyvale, CA",
          "date_started": "Jun 2020",
          "date_ended": "Aug 2020",
          "img": require("../images/logos/walmart.jfif"),
          "description": [
            "• Built mobile app using React Native (Typescript, and Redux) for internal testing",
            "• Built an UI component sharing library for other teams to use with JavaScript (with React)",
            "• UI component sharing library is highly optimized for speed, and bundle size (30%+ more efficient)",
            "• Tech stack used: React.js, React-native, Redux (state management), typescript, ES6 JavaScript",
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Engineering Intern",
          "sub_title": "Walmart Labs",
          "location": "San Bruno, CA",
          "date_started": "Jun 2020",
          "date_ended": "Aug 2020",
          "img": require("../images/logos/walmartlabs.png"),
          "description": [
            "• I technically work for both, Walmart eCommerce and Walmart labs (now is called Global Tech)",
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Physics Teacher Assistant",
          "sub_title": "Foothill College",
          "location": "Los Altos Hills, CA",
          "date_started": "Jun 2020",
          "date_ended": "Aug 2020",
          "img": require("../images/logos/foothill.png"),
          "description": [
            "• Class: Physics 4B (Electricity & Magnetism)",
            "• Hosted office hours to assist students on their homework",
            "• Used LaTeX to create a formula sheet for students",
            "• 6-week summer session",
            "• Professor: Max Yuen"
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Software Developer",
          "sub_title": "QuesGen Systems",
          "location": "Burlingame, CA",
          "date_started": "Oct 2019",
          "date_ended": "Jun 2020",
          "img": require("../images/logos/quesgen.png"),
          "description": [
            "• Built internal full-fledged mobile app with flutter, redux, and dart",
            "• Features proper full-fledged state management, authentication, security, and high performance",
            "• Wrote and performed unit testing, integration testing, and widget testing for mobile app",
            "• Fixed bugs, built features and improved the overall experience of QuesGen dashboard",
            "• Integrated end to end testing with selenium with python and CircleCI (Continuous integration)",
            "• Found and fixed security vulnerabilities",
            "• Tech stack used: Flutter, Dart, Redux (state management),Python, Selenium, PHP, SQL, and Hack"
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Mathematics Tutor",
          "sub_title": "Foothill College",
          "location": "Los Altos Hills, CA",
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
          "sub_title": "Self-Employeed",
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
          "sub_title": "ChronoCI",
          "location": "Bay Area",
          "date_started": "May 2018",
          "date_ended": "April 2019",
          "img": require("../images/logos/chronoci.jpg"),
          "description": [
            "• Built a platform for testing web applications for security vulnerabilities.",
            "• 4 daily users (minimum), & 70 total users",
            "• Pitched to Sequoia Capital",
            "• Technologies: React, Redux, Webpack, Ruby on Rails, GraphQL, Apollo, Docker, Docker-compose, Google Kubernetes Engine, Python, Flask, Stripe api, GitHub api, GitLab api, Bitbucket api, MongoDB, Redis, PostgreSQL"
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Software Engineer Intern",
          "sub_title": "Mindsight.io",
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
          "sub_title": "San Fransisco Shakespeare Festival",
          "location": "Cuptertino, CA",
          "date_started": "Jul 2018",
          "date_ended": "Sep 2018",
          "img": require("../images/logos/sfshakes.png"),
          "description": [
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Software Engineer Intern",
          "sub_title": "Fireflies.ai",
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
          "sub_title": "PixelML",
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
          "sub_title": "ConfidentMindset",
          "location": "Bay Area",
          "date_started": "Oct 2016",
          "date_ended": "Dec 2016",
          "img": require("../images/logos/no_logo.png"),
          "description": [
          ],
          "tldr": "",
          "media": []
        },
        {
          "title": "Programming Instructor",
          "sub_title": "theCoderSchool",
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
          "sub_title": "Swivl",
          "location": "San Carlos",
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



  render() {

    return (
      <div style={{ width: "100%", margin: "0 auto" }}>
              <div style={{width: '100%', height: "35px"}}></div>
                <div className="card"  style={{width: '45%', minWidth: "300px", margin: "0 auto"}} id="card-content">

                  <div className="card-body">

                    <Card data={ this.getExperience() } />

                  </div>
                </div>
              <div style={{width: '100%', height: "35px"}}></div>
      </div>
    );
  }
}

export default Home;
