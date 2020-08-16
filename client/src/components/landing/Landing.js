import React from 'react';
import VideoBg from '../video/VideoBg';
import './Landing.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: ['EDUCATE', 'LEARN', 'GROW'],
      index: 0,
    };
  }
  componentDidMount() {
    this.TimerID = setInterval(() => this.UpdateCurrent(), 3000);
  }
  componentWillUnmount() {
    clearInterval(this.TimerID);
  }
  UpdateCurrent() {
    this.setState((state) => ({
      index: (state.index + 1) % state.elements.length,
    }));
  }
  render() {
    var prevScrollpos = window.pageYOffset;
    var currentScrollPos = window.pageYOffset;
    // let body = document.getElementsByTagName('body');
    window.onscroll = function () {
      currentScrollPos = window.pageYOffset;
      if (
        prevScrollpos > currentScrollPos - 5 ||
        window.innerHeight - (currentScrollPos % window.innerHeight) < 10
      ) {
        document.getElementById('navbar').style.top = '0rem';
        document.getElementById('ak_logo').style.top = '0rem';
      } else {
        document.getElementById('navbar').style.top = '-100px';
        document.getElementById('ak_logo').style.top = '-100px';
      }
      prevScrollpos = currentScrollPos;
    };

    return (
      <section className="landing" id="home">
        <VideoBg />
        <div className="container" id="container">
          <div className="welcome">
            <div className="line"></div>
            <h3>Welcome</h3>
          </div>
          <div className="caption">
            <h1>LEARNING BASE</h1>
            <h1 className="dynamic">{this.state.elements[this.state.index]}</h1>
          </div>
          <p>"Code and Develop"</p>
        </div>
      </section>
    );
  }
}

export default Landing;
