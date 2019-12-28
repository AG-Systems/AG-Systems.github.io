import React from 'react';
import $ from "jquery";
import {
  Link,
} from "react-router-dom";


class Navbar extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      y_position: 0
    };

  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
    /*
    let element = document.getElementById("navbar");
    if(this.props.location.pathname != "/")
    {
        element.style.background = 'transparent';
    }
    */
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height

    if(scrolled * 100 > 0.10)
    {
      var element = document.getElementById("navbar");
      element.style.backgroundColor = '#12171c';
      element.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px";
       $("#navbar").removeClass("bg-transparent");
       $("#navbar").removeClass("mxdrble-navbar");
    } else {
      if(this.props.location.pathname != "/about")
      {
        var element = document.getElementById("navbar");
        element.style.backgroundColor = 'linear-gradient(180deg,rgba(18,23,28,.75),transparent);';
        element.style.boxShadow = "";
         $("#navbar").addClass("bg-transparent");
         $("#navbar").addClass("mxdrble-navbar");
      }
    }

    this.setState({
      y_position: scrolled * 100,
    })
  }


  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark bg-transparent mxdrble-navbar" id="navbar">
        <a className="navbar-brand" href="/">Max Chakhmatov</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto">
            <li className={ this.props.location.pathname == "/" ? "nav-item active" :  "nav-item" }>
              <Link className="nav-link" to={"/"} >Home</Link>
            </li>
            <li className={ this.props.location.pathname == "/projects" ? "nav-item active" :  "nav-item" }>
              <Link className="nav-link" to={"/projects"}>Projects</Link>
            </li>
            <li className={ this.props.location.pathname == "/about" ? "nav-item active" :  "nav-item" }>
              <Link className="nav-link" to={"/about"}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"to="Max_Chakhmatov_CS_resume.pdf" target="_blank" download>Resume</Link>
            </li>
            {/*
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
            */}
          </ul>
        </div>
      </nav>

    );
  }
}

export default Navbar;
