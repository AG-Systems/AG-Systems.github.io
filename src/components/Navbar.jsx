import React from 'react';
import $ from "jquery";
import {
  Link,
} from "react-router-dom";


class Navbar extends React.Component {
  constructor(props)
  {
    super(props);

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
