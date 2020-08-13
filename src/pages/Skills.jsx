import React from 'react';
import FadeIn from 'react-fade-in';
import $ from "jquery";
import date from 'date-and-time';
import { Link } from "react-router-dom";
import ExpandCollapse from 'react-expand-collapse';
import Card from "../components/Card.jsx";

const  DATE_DIFF = require("date-diff-js");
const hash = require('object-hash');



class Skills extends React.Component {
  constructor(props)
  {
    super(props);


  }


    render() {

      return (
        <div style={{ width: "100%", margin: "0 auto" }}>
                <Card show={false} />
                <div style={{width: '100%', height: "35px"}}></div>
                  <div className="card"  style={{width: '45%', minWidth: "300px", margin: "0 auto" }} id="card-content">


                    <h2 style={{ textAlign: "center" }} className="mt-5">Skills</h2>
                    <p style={{ textAlign: "center" }} className=""><Link to={"/about"} className="btn btn-mycolor"> About </Link></p>

                    <div className="card border-0 bg-transparent" style={{ width: '90%', margin: "0 auto"}}>
                      <div className="card-body">
                        <div className="tag-list">
                          <span className="tag">Software Engineering</span>
                          <span className="tag">Frontend Engineering</span>
                          <span className="tag">Backend Engineering</span>
                          <span className="tag">Fullstack Engineering</span>
                          <span className="tag">3D Modeling</span>
                          <span className="tag">Level Design</span>
                          <span className="tag">Video editing</span>
                        </div>
                      </div>
                    </div>

                    <hr style={{ width: "90%", margin: "0 auto", background: this.props.dark_mode_props ? "#383838" : "inherit" }}/>

                    <h2 style={{ textAlign: "center" }} className="mt-5">Software proficiency</h2>

                    <div className="card border-0 bg-transparent" style={{ width: '90%', margin: "0 auto"}}>
                      <div className="card-body">
                        <div className="software-icons">
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="3ds Max"
                              className="software-icon-image"
                              src={ require("../images/icons/AutoCAD.png") }
                            />
                            <div className="software-icon-name">AutoCAD</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Photoshop"
                              className="software-icon-image"
                              src="https://cdna.artstation.com/p/softwares/icons/000/000/032/default/photoshop.png?1567799381"
                            />
                            <div className="software-icon-name">Photoshop</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Fusion 360"
                              className="software-icon-image"
                              src="https://cdna.artstation.com/p/softwares/icons/000/000/016/default/fusion360.png?1504818877"
                            />
                            <div className="software-icon-name">Fusion 360</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Maya"
                              className="software-icon-image"
                              src="https://cdna.artstation.com/p/softwares/icons/000/000/024/default/maya.png?1504879343"
                            />
                            <div className="software-icon-name">Maya</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unreal Engine"
                              className="software-icon-image"
                              src="https://cdna.artstation.com/p/softwares/icons/000/000/044/default/unreal_logo_0.png?1471455994"
                            />
                            <div className="software-icon-name">Unreal Engine</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src="https://cdnb.artstation.com/p/softwares/icons/000/000/047/default/unity-logo-white.png?1479506284"
                            />
                            <div className="software-icon-name">Unity</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/AfterEffects.png") }
                            />
                            <div className="software-icon-name">After Effects</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/Assembly.png") }
                            />
                            <div className="software-icon-name">Assembly</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/C.png") }
                            />
                            <div className="software-icon-name">C</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/C++.png") }
                            />
                            <div className="software-icon-name">C++</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/CircleCI.png") }
                            />
                            <div className="software-icon-name">CircleCI</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/GraphQL.png") }
                            />
                            <div className="software-icon-name">GrapQL</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/JavaScript.png") }
                            />
                            <div className="software-icon-name">ES6 JavaScript</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/Nodejs.png") }
                            />
                            <div className="software-icon-name">Node.js</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/PHP.png") }
                            />
                            <div className="software-icon-name">PHP</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/Python.png") }
                            />
                            <div className="software-icon-name">Python</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/Ruby.png") }
                            />
                            <div className="software-icon-name">Ruby</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/rails.png") }
                            />
                            <div className="software-icon-name">Ruby on Rails</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/SocketIO.png") }
                            />
                            <div className="software-icon-name">Socket IO</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/Webpack.png") }
                            />
                            <div className="software-icon-name">Webpack</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/Meteorjs.png") }
                            />
                            <div className="software-icon-name">Meteor.js</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/React.png") }
                            />
                            <div className="software-icon-name">React.js</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/React.png") }
                            />
                            <div className="software-icon-name">React-router</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/React.png") }
                            />
                            <div className="software-icon-name">React Native</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/Redux.png") }
                            />
                            <div className="software-icon-name">Redux</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/Jest.png") }
                            />
                            <div className="software-icon-name">Jest</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/Latex.png") }
                            />
                            <div className="software-icon-name">Latex</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/Mathematica.png") }
                            />
                            <div className="software-icon-name">Mathematica</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/Flask.png") }
                            />
                            <div className="software-icon-name">Flask</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/Excel.png") }
                            />
                            <div className="software-icon-name">Excel</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Unity"
                              className="software-icon-image"
                              src={ require("../images/icons/MongoDB.png") }
                            />
                            <div className="software-icon-name">MongoDB</div>
                          </div>
                        </div>
                        </div>
                      </div>

                    <br/>
                    <br/>
                  </div>

                <div style={{width: '100%', height: "35px"}}></div>
        </div>
      );
    }
}

export default Skills;
