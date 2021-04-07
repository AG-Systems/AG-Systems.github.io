import React from 'react';
import FadeIn from 'react-fade-in';
import $ from "jquery";
import date from 'date-and-time';
import { Link } from "react-router-dom";
import ExpandCollapse from 'react-expand-collapse';
import Card from "../components/Card.jsx";

const  DATE_DIFF = require("date-diff-js");
const hash = require('object-hash');



class Miscellaneous extends React.Component {
  constructor(props)
  {
    super(props);


  }

  getMiscellaneous() {
    return [
          {
            "title": "Team member",
            "sub_title": "Formula Slug",
            "location": "Santa Cruz, CA",
            "date_started": "Oct 2020",
            "date_ended": "Present",
            "img": require("../images/logos/formulaslug.png"),
            "description": [
              "· Wrote documentation to assist new team members, and existing team members.",
              "· Overhauled entire internal wiki for organization.",
              "· In charge of onboarding new team members.",
            ],
            "tldr": "",
            "media": [],
            "extra_html": ""
          },
          {
            "title": "Semi Professional Clash Royale Player",
            "sub_title": "Clash Royale - Supercell",
            "location": "Planet Earth",
            "date_started": "Nov 2017",
            "date_ended": "Mar 2021",
            "total_length": "3 Years 5 Months",
            "img": require("../images/logos/clashroyale.png"),
            "description": [
              "· Best season elo: 5609 (master 3)",
              "· Played at various in-person tournements"
            ],
            "extra": [],
            "tldr": "",
            "media": [],
            "extra_html": ""
          },
          {
            "title": "Poker",
            "sub_title": "Personal",
            "location": "Las Vegas, NV",
            "date_started": "Dec 2019",
            "date_ended": "Present",
            "img": require("../images/logos/poker.png"),
            "description": [
              "· Tripled bank roll",
            ],
            "tldr": "",
            "media": [],
            "extra_html": ""
          },
        ];
  }


  render() {


    return (
      <div style={{ width: "100%", margin: "0 auto" }}>
              <div style={{width: '100%', height: "35px"}}></div>
                <div className="card"  style={{width: '45%', minWidth: "300px", margin: "0 auto"}} id="card-content">
                  <div className="card-body">

                    <Card data={ this.getMiscellaneous() } />

                  </div>
                </div>
              <div style={{width: '100%', height: "35px"}}></div>
      </div>
    );
  }
}

export default Miscellaneous;
