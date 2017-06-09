import React, { Component } from 'react';
import Logo from '../User/Logo';
import './OrgLayout.css';
import './carbon-components.css';

class OrgLayout extends Component {

  render() {
    return (
      <div className="orgLayoutContainer">
        <div className="banner">
          <div className="inner-banner">
            <Logo />
            <div className="about"><a href="https://github.com/IBM-Bluemix/health-blockchain">ABOUT</a></div>
          </div>
        </div>
        <div className="orgLayoutContainer">
          {this.props.children}
        </div>
      </div>

    );
  }
}

export default OrgLayout;
