import React from 'react';
import FadeIn from 'react-fade-in';
import $ from "jquery";

class Blog extends React.Component {
  constructor(props)
  {
    super(props);
    $('html, body').animate({ scrollTop: 0 }, 'fast');

  }


  render() {
    return (
      <div style={{ width: "99%", margin: "0 auto" }}>
              <div style={{width: '100%', height: "35px"}}></div>
                <div className="card text-dark"  style={{width: '45%', minWidth: "300px", margin: "0 auto", boxShadow: '0 0 35px 0 rgba(154,161,171,.15)'}}>
                  <div className="card-body">
                    <p> Blog is not finished </p>

                  </div>
                  {/*
                  <div className="card-body">

                    { this.renderEducation() }

                  </div>
                 */}
                </div>
              <div style={{width: '100%', height: "35px"}}></div>
      </div>
    );
  }
}

export default Blog;
