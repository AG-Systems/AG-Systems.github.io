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
                <div style={{width: '100%', height: "35px"}}></div>
                  <div className="card"  style={{width: '45%', minWidth: "300px", margin: "0 auto" }} id="card-content">


                    <h2 style={{ textAlign: "center" }} className="mt-5">Skills (not finished)</h2>
                    <p style={{ textAlign: "center" }} className="">(Summary)</p>

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

                    <hr style={{ width: "90%", margin: "0 auto" }}/>
                    <br/>
                    <div className="card-deck" style={{ width: "90%", margin: "0 auto"}}>

                      <div className="card text-white bg-dark border-0 mb-2" style={{  minWidth: "300px", maxWidth: "400px", width: "auto" }}>
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.spyrestudios.com%2Fwp-content%2Fuploads%2FReact.js_logo.svg_.png&f=1&nofb=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h3 className="card-title">React</h3>
                        {/*  <p className="card-text">React (also known as React.js or ReactJS) is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p> */}
                        </div>
                        {/*
                        <div className="card-footer">
                          <small className="text-muted">https://reactjs.org/</small>
                        </div>
                        */}
                      </div>

                      <div className="card text-white bg-dark border-0 mb-2" style={{ minWidth: "300px", maxWidth: "400px", width: "auto"}}>
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.spyrestudios.com%2Fwp-content%2Fuploads%2FReact.js_logo.svg_.png&f=1&nofb=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h3 className="card-title">React Native</h3>
                        {/*   <p className="card-text">React Native is an open-source mobile application framework created by Facebook, Inc</p> */}
                        </div>
                      </div>

                      <div className="card text-white bg-dark border-0 mb-2" style={{ minWidth: "300px", maxWidth: "400px", width: "auto" }}>
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.spyrestudios.com%2Fwp-content%2Fuploads%2FReact.js_logo.svg_.png&f=1&nofb=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h3 className="card-title">react-router</h3>
                        {/*   <p className="card-text">React Router is a collection of navigational components that compose declaratively with your application.</p> */}
                        </div>
                      </div>

                      <div className="card text-white bg-dark border-0 mb-2" style={{ minWidth: "300px", maxWidth: "400px", width: "auto" }}>
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.couchbase.com%2Fwp-content%2Fuploads%2F2019%2F05%2FFlutter_Logo-1200x675.png&f=1&nofb=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h3 className="card-title">Flutter</h3>
                        {/*   <p className="card-text">Flutter is an open-source UI software mobile development kit created by Google</p> */}
                        </div>
                      </div>

                      <div className="card text-white bg-dark border-0 mb-2" style={{ minWidth: "300px", maxWidth: "400px", width: "auto" }}>
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.valuecoders.com%2Fblog%2Fwp-content%2Fuploads%2F2016%2F03%2FMeteor.png&f=1&nofb=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h3 className="card-title">Meteor.js</h3>
                          {/* <p className="card-text">Meteor, or MeteorJS, is a free and open-source isomorphic JavaScript web framework written using Node.js</p> */}
                        </div>
                      </div>

                      <div className="card text-white bg-dark border-0 mb-2" style={{ minWidth: "300px", maxWidth: "400px", width: "auto" }}>
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F17%2FGraphQL_Logo.svg%2F1200px-GraphQL_Logo.svg.png&f=1&nofb=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h3 className="card-title">GraphQL</h3>
                          {/* <p className="card-text">Meteor, or MeteorJS, is a free and open-source isomorphic JavaScript web framework written using Node.js</p> */}
                        </div>
                      </div>

                      <div className="card text-white bg-dark border-0 mb-2" style={{ minWidth: "300px", maxWidth: "400px", width: "auto" }}>
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F17%2FGraphQL_Logo.svg%2F1200px-GraphQL_Logo.svg.png&f=1&nofb=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h3 className="card-title">GraphQL</h3>
                          {/* <p className="card-text">Meteor, or MeteorJS, is a free and open-source isomorphic JavaScript web framework written using Node.js</p> */}
                        </div>
                      </div>




                    </div>
                    <br/>
                  </div>

                <div style={{width: '100%', height: "35px"}}></div>
        </div>
      );
    }
}

export default Skills;
