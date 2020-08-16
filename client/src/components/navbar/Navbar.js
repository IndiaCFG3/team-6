import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.removeMenu = this.removeMenu.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      clicked: !state.clicked,
    }));
  }
  removeMenu() {
    this.setState({
      clicked: false,
    });
  }
  render() {
    let classname = 'nav-items';
    let iconclass = 'fa fa-bars fa-lg';
    if (this.state.clicked) {
      classname = 'menu';
      iconclass = 'fa fa-times fa-lg';
    } else {
      classname = 'navbar';
      iconclass = 'fa fa-bars fa-lg';
    }

    return (
      <div>
        <div className={classname} id="navbar">
          <a href="#!" className="icon" onClick={this.handleClick}>
            <i className={iconclass}></i>
          </a>
          <ul className="nav-items" id="nav-items">
            <li className="nav-link">
              <Link
                to="home"
                spy={true}
                hashSpy={true}
                activeClass="active"
                className="first link"
                onClick={this.removeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="projects"
                spy={true}
                hashSpy={true}
                activeClass="active"
                className="second link"
                onClick={this.removeMenu}
              >
                Courses
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="about"
                spy={true}
                hashSpy={true}
                activeClass="active"
                className="third link"
                onClick={this.removeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="contact"
                spy={true}
                hashSpy={true}
                activeClass="active"
                className="fourth link"
                onClick={this.removeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
