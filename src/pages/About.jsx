import React from 'react';
import FadeIn from 'react-fade-in';
import $ from "jquery";
import radial from '../images/other/radial_2.png';
import { Link } from "react-router-dom";

class About extends React.Component {
  constructor(props)
  {
    super(props);
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }

  goBackToHome()
  {
    window.location.href = "/";
  }


  render() {
    return (
      <div>
        <FadeIn delay={500}>
            <div className="bg" style={{ margin: "0px" }}>
                <span style={{ marginBottom: "50px" }}>
                    <FadeIn delay={400}>
                      <h1 className="text-center" style={{ color: "white"}}> Welcome! </h1>
                      <h1 className="text-center d-none d-lg-block" style={{ color: "white" }}> -Max Chakhmatov</h1>
                      <h1 className="text-center d-lg-none" style={{ color: "white"}}> -Max</h1>
                      <h1 className="text-center d-lg-none" style={{ color: "white" }}> Chakhmatov</h1>
                    </FadeIn>

                    <FadeIn delay={600}>
                      <div className="card text-white bg-dark mt-5" style={{width: '20rem', margin: "0 auto",
                          boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px"
                       }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vhd_Q6vYzz31DCdOpPRVIqc1r9YzSasnHPXKNS-Wp17RwxnM" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                              <p className="card-text">I have not found a use for this page yet....
                              <br/>
                              <span onClick={ this.goBackToHome } className="btn btn-mycolor"> Home </span>
                            </p>
                        </div>
                      </div>
                    </FadeIn>
                </span>
                <img className="radial" src={radial} />
            </div>
          </FadeIn>
      </div>
    );
  }
}

export default About;
