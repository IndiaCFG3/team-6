import React from 'react';
import portrait from './images/projectsmall.jpg';
import './About.css';
const About = () => {
  return (
    <section className="wrapper2" id="about">
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="aboutcontainer">
        <h1>
          About <span className="color-secondary">Us</span>
        </h1>
        <p className="greeting">Our mission</p>
        {/* <div className='aboutcontainer'>
        <h1>
          About <span className='color-secondary'>Me</span>
        </h1>
        <p className='greeting'>Let me tell you a few things ...</p>

        <div className='about-info'>
          <div className='first-part'>
            <img src={portrait} alt='John Doe' className='bio-image' />

            <div className='bio'>
              <h3 className='color-secondary'>BIO</h3>
              <p>
                Currently studying Computer Science and Engineering at NIT
                Calicut. Interested in Web Development, Alogorithms & Maths.
              </p>
            </div>
          </div>

          <div className='job job-1'>
            <h3>Storilabs</h3>
            <h6>Part Time Intern</h6>
            <p>
              Done a few projects using python, cassandra database, flask
              framework & R.
            </p>
          </div>

          <div className='job job-2'>
            <h3>Music Club</h3>
            <h6>Violin</h6>
            <p>
              Part of music club at Nit Calicut as an extracurricular activity.
            </p>
          </div>

          <div className='job job-3'>
            <h3>Hobbies</h3>
            <h6>Free time pass</h6>
            <p>Web Development, Learning React Vue & Angular.</p>
          </div>
        </div>
      </div> */}
        <div className="about-info">
          <img src={portrait} alt="John Doe" className="bio-image" />

          <div className="bio">
            {/* <h3 className='color-secondary'>BIO</h3> */}
            <p>Better education for all and everyone.</p>
          </div>

          <div className="job job-1">
            <h3>Mission</h3>
            <h6>Lorem</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, pariatur!
            </p>
          </div>

          <div className="job job-2">
            <h3>Lorem</h3>
            <h6>Ipsum</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              mollitia.
            </p>
          </div>

          <div className="job job-3">
            <h3>Lorem</h3>
            <h6>Lorem, ipsum dolor.</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              vitae hic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
