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

    const bg_images = [
      "https://wallpapercave.com/wp/wp2022155.jpg",
      require('../images/bg/shutterstock_674781376.0.jpg'),
      require('../images/bg/photo-1533683083439-1a776a5653cb.jpg'),
      require('../images/bg/25048.jpg'),
      require("../images/bg/photo-1507041957456-9c397ce39c97.jpg"),
      require("../images/bg/eb018d403fa9633f426fded17f843b73.jpg"),
      require("../images/bg/bg_red.png"),
      require("../images/bg/58341.jpg")
    ];

    return (
      <div id="navbar" hidden={ this.props.match.url === "/about" }>
        <div style={{width: '100%', height: "10px"}}></div>
        <div className="card text-dark" style={{width: '45%', minWidth: "300px", margin: "0 auto", boxShadow: '0 0 35px 0 rgba(154,161,171,.15)'}}>
        <div className="card-img-top" style={{ background: "url(" + bg_images[Math.floor(Math.random() * Math.floor(bg_images.length))] + ")", height: "200px", backgroundSize: "cover"  }} alt="Card image cap"></div>
          <div className="card-body">
            <img alt='' className='card-img-profile' src={ require("../images/profile/Wall-ESoundtrack.jpg") } style={{ height: "120px", width: "120px" }} />
            <h3 className="card-text" style={{ fontFamily: "Titillium Web", color: "#1c1e20" }} >Max Chakhmatov</h3>
            <a href={process.env.PUBLIC_URL + '/Max_Chakhmatov_CS_resume.pdf'} className="btn btn-mycolor"> Resume </a>
            <br/>
            <br/>
            <p>Nerdy person who has a lot of drive. Site is not complete. </p>
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
            </div>
          </div>
          <div className="btn-group" style={{ width: "100%"}}>
            <Link to="/" className={this.props.match.url === "/" ? "btn border-bottom-active" : "btn"}>Experience</Link>
            <Link to="/blog" className={this.props.match.url === "/blog" ? "btn border-bottom-active" : "btn"}>Blog</Link>
            <Link to="/about" className={this.props.match.url === "/about" ? "btn border-bottom-active" : "btn"}>About</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
