import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small stylish-color-dark pt-4" style={{backgroundColor: '#14181c', marginTop: '0px'}}>
        {/*Footer Links*/}
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-12" style={{margin: '0 auto', width: '50%'}}>
              {/* <h5 class="text-uppercase" style="text-align: center">Links</h5>
              <ul className="list-unstyled" id="links">
                <li id="links-li">
                  <a href="/company" style={{ color: '#c4c4c4' }}>Company</a>
                </li>
                <li id="links-li">
                  <a href="/support" style={{ color: '#c4c4c4' }}>Contact/Support</a>
                </li>
                <li id="links-li">
                  <a href="/privacy" style={{ color: '#c4c4c4' }}>Privacy policy</a>
                </li>
              </ul>
              */}
            </div>
          </div>
        </div>
        {/*/.Footer Links*/}
        <hr />
        {/*Call to action*/}
        <div className="text-center py-3">
          <ul className="list-unstyled list-inline mb-0">
            <li className="list-inline-item">
              <h5 className="mb-1">Built with love ❤️ </h5>
            </li>
            <br />
            <br />
            <li className="list-inline-item">
              <Link to="/about" className="btn btn-outline-mycolor btn-rounded">Email me : )</Link>
            </li>
          </ul>
        </div>
        {/*/.Call to action*/}
        {/*Copyright*/}
        <div className="footer-copyright py-3 text-center">
          © 2020 (fake) Copyright:
          <a href="https://www.maxchakhmatov.com" style={{color: 'white'}}> maxchakhmatov.com </a>
        </div>
        <div className="footer-copyright py-3 text-center">
          <a href="https://www.linkedin.com/in/max-chakhmatov/">
            <i className="fab fa-linkedin" style={{fontSize: '25px', paddingLeft: '15px', color: '#c4c4c4' }} />
          </a>
          <a href="https://github.com/AG-Systems">
            <i className="fab fa-github" style={{fontSize: '25px', paddingLeft: '15px', color: '#c4c4c4'}} />
          </a>
          <a href="https://angel.co/max-chakhmatov">
            <i className="fab fa-angellist" style={{fontSize: '25px', paddingLeft: '15px', color: '#c4c4c4'}} />
          </a>
        </div>
        {/*/.Copyright*/}
      </footer>
    );
  }
}

export default Footer;
