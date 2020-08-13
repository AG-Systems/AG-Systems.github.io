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
                              src="https://cdna.artstation.com/p/softwares/icons/000/000/002/default/3dsmax-20172.png?1504815710"
                            />
                            <div className="software-icon-name">3ds Max</div>
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
                              alt="ZBrush"
                              className="software-icon-image"
                              src="https://cdna.artstation.com/p/softwares/icons/000/000/046/default/zBrush3.png?1505488078"
                            />
                            <div className="software-icon-name">ZBrush</div>
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
                              alt="Substance Designer"
                              className="software-icon-image"
                              src="https://cdna.artstation.com/p/softwares/icons/000/000/042/default/Substance_Designer_Icon.png?1456833082"
                            />
                            <div className="software-icon-name">Substance Designer</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="Substance Painter"
                              className="software-icon-image"
                              src="https://cdnb.artstation.com/p/softwares/icons/000/000/041/default/Substance_Painter_Icon.png?1456833230"
                            />
                            <div className="software-icon-name">Substance Painter</div>
                          </div>
                          <div className="software-icon-item mr-3 ml-3">
                            <img
                              width={30}
                              height={30}
                              alt="3DCoat"
                              className="software-icon-image"
                              src="https://cdnb.artstation.com/p/softwares/icons/000/000/059/default/3d-coat_logo_ball.png?1511365214"
                            />
                            <div className="software-icon-name">3DCoat</div>
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
                              alt="UVLayout"
                              className="software-icon-image"
                              src="https://cdnb.artstation.com/p/softwares/icons/000/000/095/default/uvlayout.png?1424865993"
                            />
                            <div className="software-icon-name">UVLayout</div>
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
                              alt="CRYENGINE"
                              className="software-icon-image"
                              src="https://cdnb.artstation.com/p/softwares/icons/000/000/091/default/cryengine.png?1424866454"
                            />
                            <div className="software-icon-name">CRYENGINE</div>
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
