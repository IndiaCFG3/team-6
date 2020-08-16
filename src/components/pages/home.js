import React from 'react';
import Landing from '../landing/Landing';
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';
import Projects from '../projects/Projects';
import About from '../about/About';
import Contact from '../contacts/Contact';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Navbar />
        <div className="AppContainer">
          <Landing />
          <Projects />
          <About />
          <Contact />
        </div>
      </div>
    );
  }
}
export default Home;
