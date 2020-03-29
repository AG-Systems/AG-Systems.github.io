import React from 'react';
import FadeIn from 'react-fade-in';
import $ from "jquery";
import date from 'date-and-time';
import { Link } from "react-router-dom";
import ExpandCollapse from 'react-expand-collapse';
import Card from "../components/Card.jsx";

const  DATE_DIFF = require("date-diff-js");
const hash = require('object-hash');



class Education extends React.Component {
  constructor(props)
  {
    super(props);
    $('html, body').animate({ scrollTop: 0 }, 'fast');

  }

  getEducation() {
    return [
          {
            "title": "University of California, Santa Cruz",
            "sub_title": "Bachelor of Science - BS, Robotics Engineering",
            "location": "Santa Cruz, CA",
            "date_started": "Sept 2020",
            "date_ended": "N/A",
            "img": require("../images/logos/ucsc.jpg"),
            "description": [

            ],
            "extra": [],
            "tldr": "",
            "media": []
          },
          {
            "title": "Foothill College",
            "degree_title": "Transfer to 4 year university - BS, Computer Science & Mathematics",
            "location": "Los Altos, CA",
            "date_started": "July 2017",
            "date_ended": "June 2020",
            "img": require("../images/logos/foothill.png"),
            "description": [
              "· Computer Science 2B - Intermediate Software Design in C++",
              "· Computer Science 2C - Data Structures and Algorithms",
              "· Computer Science 10 - Computer Architecture and Organization",
              "· Computer Science 18 - Discrete Mathematics",
              "· Physics 4A - Classical Mechanics Physics (Calculus)",
              "· Math 48A - Precalculus I",
              "· Math 48B - Precalculus II",
              "· Math 48C - Precalculus III (Trigonometry)",
              "· Math 1A - Single Variable Calculus (Differentiation)",
              "· Math 1B - Single Variable Calculus (Integration",
              "· Math 1C - Multi-Variable Calculus",
              "· Math 1D - Vector Calculus",
              "· Math 2A - Differential Equations",
              "· Accounting 1A - Financial Accounting",
              "· Economics 1A - Macroeconomics",
              "· Photography 5 - Introduction to Photography",
              "· Comm 4 - Group Communications",
              "· English 209 - Introduction to College Reading",
              "· English 110 - Introduction to College Writing",
              "· English 1A - Composition and Reading",
              "· English 1B - Critical Reading and Literature",
              "· Music 8 - Music of American Cultures"
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
                  <div className="card text-dark dark-mode dark-mode-card white-card"  style={{width: '45%', minWidth: "300px", margin: "0 auto" }}>

                    <div className="card-body">

                      <Card data={this.getEducation() }/>

                    </div>
                  </div>
                <div style={{width: '100%', height: "35px"}}></div>
        </div>
      );
    }
}

export default Education;
