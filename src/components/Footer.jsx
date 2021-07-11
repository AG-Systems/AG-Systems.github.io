import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className={ "media mt-1" } style={{ margin: "0 auto", width: '45%' }}>
        <div className="card mb-3" style={{width: '100%', margin: "0 auto"}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="..." className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Footer;
