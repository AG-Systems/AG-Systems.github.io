import React from 'react';
import $ from "jquery";
import {
  Link,
} from "react-router-dom";
import Cookies from 'universal-cookie';
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import { connect } from 'react-redux';
import { changeDarkMode } from '../state/actions.js';



class Navbar extends React.Component {
  constructor(props)
  {
    super(props);

    const bg_images = [
      "https://wallpapercave.com/wp/wp2022155.jpg",
      require('../images/bg/shutterstock_674781376.0.jpg'),
      require('../images/bg/photo-1533683083439-1a776a5653cb.jpg'),
      require('../images/bg/25048.jpg'),
      require("../images/bg/photo-1507041957456-9c397ce39c97.jpg"),
      require("../images/bg/eb018d403fa9633f426fded17f843b73.jpg"),
      require("../images/bg/bg_red.png"),
      require("../images/bg/58341.jpg"),
      require("../images/bg/photo_2020-03-27_10-59-58.jpg")
    ];

    const cookies = new Cookies();
    if(!cookies.get('background_img_url'))
    {
      cookies.set('background_img_url', bg_images[Math.floor(Math.random() * Math.floor(bg_images.length))]);
    }



    this.refreshImage = this.refreshImage.bind(this);
    this.changeDarkMode = this.changeDarkMode.bind(this);

    let path = localStorage.getItem('path');
    if(path) {
      localStorage.removeItem('path');
      this.props.history.push([path]);
    }


    if(this.props.dark_mode_props)
    {
      if(this.props.dark_mode_props.dark_mode)
      {
        this.changeDarkMode(this.props.dark_mode_props.dark_mode, true);
        this.state = {
          "background_img_url": cookies.get('background_img_url'),
          "dark_mode": this.props.dark_mode_props.dark_mode
        };
      } else {
        this.changeDarkMode(false, true);
        this.state = {
          "background_img_url": cookies.get('background_img_url'),
          "dark_mode": false
        };
      }
    }

  }

  refreshImage()
  {
      const bg_images = [
        "https://wallpapercave.com/wp/wp2022155.jpg",
        require('../images/bg/shutterstock_674781376.0.jpg'),
        require('../images/bg/photo-1533683083439-1a776a5653cb.jpg'),
        require('../images/bg/25048.jpg'),
        require("../images/bg/photo-1507041957456-9c397ce39c97.jpg"),
        require("../images/bg/eb018d403fa9633f426fded17f843b73.jpg"),
        require("../images/bg/bg_red.png"),
        require("../images/bg/58341.jpg"),
        require("../images/bg/photo_2020-03-27_10-59-58.jpg")
      ];

      const cookies = new Cookies();
      cookies.set('background_img_url', bg_images[Math.floor(Math.random() * Math.floor(bg_images.length))]);
      this.setState({
        "background_img_url": cookies.get('background_img_url')
      });
      window.location.reload();

  }


  changeDarkMode(dk, mounting=false)
  {
      if(dk)
      {

          $("body").removeClass('white-body');
          $("body").addClass('dark-body');
          $("#navbar-card").removeClass("white-card");
          $("#navbar-card").addClass("dark-card border-0");

          // navbar tabs and cards
          $("#card-content").addClass("dark-card");
          $("#card-content").addClass("bg-white");
          $(".card-date").css("color","rgba(226, 226, 226, 0.6)");
          $(".card-location").css("color", "rgba(245, 245, 245, 0.6)");

          if(!mounting)
          {
            this.setState({
                "dark_mode": true
            });
          }

      } else {


        $("body").removeClass('dark-body');
        $("body").addClass('white-body');
        $("#navbar-card").removeClass("dark-card border-0");
        $("#navbar-card").addClass("white-card");

        // navbar tabs and cards
        $(".btn-navbar").addClass("white-text");
        $(".btn-navbar").removeClass("dark-text");
        $("#card-content").addClass("bg-white");
        $("#card-content").removeClass("dark-card");
        $(".card-date").css("color","rgba(0, 0, 0, 0.6)");
        $(".card-location").css("color", "rgba(0, 0, 0, 0.6)");

        if(!mounting)
        {
          this.setState({
              "dark_mode": false
          });
        }
      }
  }

  componentDidUpdate(prevProps)
  {
    if (this.props.dark_mode_props.dark_mode !== prevProps.dark_mode_props.dark_mode) {
        this.changeDarkMode(this.props.dark_mode_props.dark_mode);
    }
  }

  handleClick = () => {
    this.props.changeDarkMode(this.state["dark_mode"]);
  }


  render() {



    return (
      <div id="navbar" hidden={ this.props.match.url === "/about" }>
        <div style={{width: '100%', height: "10px"}}></div>
        <div className="card" style={{width: '45%', minWidth: "300px", margin: "0 auto"}} id="navbar-card">
          <i className="fas fa-redo" alt="Click on icon to refresh background image" style={{ zIndex: 5, position: "absolute", right: 0, padding: "10px", textShadow: "0 0 3px #000", color: "white" }} onClick={ this.refreshImage }></i>
          <div className="card-img-top" style={{ background: "url(" + this.state["background_img_url"] + ")", height: "200px", backgroundSize: "cover" }}></div>
          <div className="card-body">
            <img alt='' className='card-img-profile' src={ require("../images/profile/Wall-ESoundtrack.jpg") } style={{ height: "120px", width: "120px" }} />
            <h3 className="card-text" style={{ fontFamily: "Titillium Web", color: this.state["dark_mode"] ? "#f8f9fa" : "#1c1e20"}} >Max Chakhmatov</h3>
            <a href={process.env.PUBLIC_URL + '/Max_Chakhmatov_CS_resume.pdf'} className="btn btn-mycolor"> Resume </a>
            <br/>
            <br/>
            <p>
              <span className="dark-mode">
                Nerdy person who has a lot of drive. <br/>
              </span>
              <br/>
              <span style={{ color: "#6e767d" }}>
                  <i className="fas fa-map-marker-alt"></i> Planet earth
              </span>
            </p>


            {/*
            <input type="checkbox" id="hide-checkbox" hidden={true} />
            <label htmlFor="hide-checkbox" className="toggle">
              <span className="toggle-button">
                <span className="crater crater-1" />
                <span className="crater crater-2" />
                <span className="crater crater-3" />
                <span className="crater crater-4" />
                <span className="crater crater-5" />
                <span className="crater crater-6" />
                <span className="crater crater-7" />
              </span>
              <span className="star star-1" />
              <span className="star star-2" />
              <span className="star star-3" />
              <span className="star star-4" />
              <span className="star star-5" />
              <span className="star star-6" />
              <span className="star star-7" />
              <span className="star star-8" />
            </label>
            */}
            <div style={{ color: "rgb(110, 118, 125)" }}>
              Dark mode:
              <br/>
              <Toggle
                defaultChecked={ this.state["dark_mode"] }
                icons={false}
                onChange={ this.handleClick } />
              <br/>
              <span style={{ fontSize: "13px", color: "rgb(110, 118, 125)" }}>ps: dark mode is automatically enabled by time of day </span>
            </div>

            <div className="footer-copyright py-3">
              <a href="https://twitter.com/themaxadorable">
                <i className="fab fa-twitter" style={{fontSize: '25px', color: "#1ebc8c"}} />
              </a>
              <a href="https://www.linkedin.com/in/max-chakhmatov/">
                <i className="fab fa-linkedin" style={{fontSize: '25px', paddingLeft: '15px', color: "#1ebc8c"}} />
              </a>
              <a href="https://github.com/ag-systems">
                <i className="fab fa-github" style={{fontSize: '25px', paddingLeft: '15px', color: "#1ebc8c"}} />
              </a>
              <a href="https://angel.co/max-chakhmatov">
                <i className="fab fa-angellist" style={{fontSize: '25px', paddingLeft: '15px', color: "#1ebc8c"}} />
              </a>
              <a href="https://stackoverflow.com/users/5487345/auriga?tab=profile">
                <i className="fab fa-stack-overflow" style={{fontSize: '25px', paddingLeft: '15px', color: "#1ebc8c"}} />
              </a>
            </div>
          </div>

          <div className="btn-group" style={{ width: "100%"}}>
            <Link to="/" className={this.props.match.url === "/" ? "btn border-bottom-active" : ( this.state["dark_mode"] ? "btn btn-navbar dark-text" : "btn btn-navbar white-text") }>
              <span className="d-lg-none" style={{ fontSize: "10px" }}>Experience</span>
              <span className="d-none d-lg-block">Experience</span>
            </Link>
            <Link to="/education" className={this.props.match.url === "/education" ? "btn border-bottom-active" : ( this.state["dark_mode"] ? "btn btn-navbar dark-text" : "btn btn-navbar white-text") }>
              <span className="d-lg-none" style={{ fontSize: "10px" }}>Education</span>
              <span className="d-none d-lg-block">Education</span>
            </Link>
            <Link to="/miscellaneous" className={this.props.match.url === "/miscellaneous" ? "btn border-bottom-active" : ( this.state["dark_mode"] ? "btn btn-navbar dark-text" : "btn btn-navbar white-text") }>
              <span className="d-lg-none" style={{ fontSize: "10px" }}>Miscellaneous</span>
              <span className="d-none d-lg-block">Miscellaneous</span>
            </Link>
            <Link to="/more" className={this.props.match.url === "/more" ? "btn border-bottom-active" : ( this.state["dark_mode"] ? "btn btn-navbar dark-text" : "btn btn-navbar white-text") }>
              <span className="d-lg-none" style={{ fontSize: "10px" }}>More</span>
              <span className="d-none d-lg-block">More</span>
            </Link>
          </div>

        </div>
      </div>
    );
  }
}

// export default Navbar;

const mapStateToProps = (state, ownProps) => {
    return {
        dark_mode_props: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeDarkMode: (dk) => {
            dispatch(changeDarkMode(dk));
        }
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
