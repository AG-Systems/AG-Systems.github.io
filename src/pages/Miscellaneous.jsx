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
    $('html, body').animate({ scrollTop: 0 }, 'fast');

  }

  getMiscellaneous() {
    return [
          {
            "title": "Semi Professional Clash Royale Player",
            "sub_title": "Clash Royale - Supercell",
            "location": "",
            "date_started": "Nov 2017",
            "date_ended": "Present",
            "img": require("../images/logos/clashroyale.png"),
            "description": [
              "· Best season elo: 5609 (master 3)",
              "· Played at various in-person tournements"
            ],
            "extra": [],
            "tldr": "",
            "media": []
          },
          {
            "title": "Poker",
            "sub_title": "Personal",
            "location": "Las Vegas, NV",
            "date_started": "July 2019",
            "date_ended": "Present",
            "img": require("../images/logos/poker.png"),
            "description": [
              ""
            ],
            "tldr": "",
            "media": []
          },
        ];
  }


  render() {


    return (
      <div style={{ width: "99%", margin: "0 auto" }}>
              <div style={{width: '100%', height: "35px"}}></div>
                <div className="card text-dark dark-mode dark-mode-card white-card"  style={{width: '45%', minWidth: "300px", margin: "0 auto"}}>
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
