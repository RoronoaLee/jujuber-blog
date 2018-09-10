import './AboutMe.css';
import React, {Component} from 'react';

export default class AboutMe extends Component {
  render() {
    return (
      <div className="about-me-block">
        <div className="about-me-content">
          {/*内容自定义*/}
          <h1 style={{ color: "rgba(1,1,1.65)" }}>还没想好</h1>
        </div>
      </div>
    )
  }
}