import React from 'react';
import FadeIn from 'react-fade-in';
import $ from "jquery";
import date from 'date-and-time';
import { Link } from "react-router-dom";
import ExpandCollapse from 'react-expand-collapse';
import Card from "../components/Card.jsx";

const  DATE_DIFF = require("date-diff-js");
const hash = require('object-hash');



class More extends React.Component {
  constructor(props)
  {
    super(props);


  }




    render() {

      return (
        <div style={{ width: "100%", margin: "0 auto" }}>
                <div style={{width: '100%', height: "35px"}}></div>
                  <div className="card"  style={{width: '45%', minWidth: "300px", margin: "0 auto" }} id="card-content">

                    <div className="card-body">
                      <span  hidden={true}>
                      <Card data={ [
                            {
                              "title": "",
                              "sub_title": "",
                              "location": "",
                              "date_started": "",
                              "date_ended": "N/A",
                              "img": require("../images/logos/ucsc.jpg"),
                              "description": [

                              ],
                              "extra": [],
                              "tldr": "",
                              "media": []
                            },
                          ] }/>
                        </span>
                          <div className="card" style={{width: '18rem', margin: "0 auto"}}>
                            <ul className="list-group bg-transparent list-group-flush" style={{ backgroundColor: "transparent" }}>
                                <li className="list-group-item bg-transparent"><Link to="/about" style={{ color: "#1fd19b", background: "transparent" }}>About me </Link></li>
                                <li className="list-group-item bg-transparent"><Link to="/companies" style={{ color: "#1fd19b", background: "transparent" }}>Companies</Link></li>
                            </ul>
                          </div>

                    </div>
                  </div>
                <div style={{width: '100%', height: "35px"}}></div>
        </div>
      );
    }
}

export default More;
