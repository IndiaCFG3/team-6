import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="wrapper3">
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
      <div className="contactcontainer">
        <h1>
          Contact <span className="color-secondary">Us</span>
        </h1>
        <p className="greeting">This is how you can contact us...</p>
        <div class="boxes">
          <div>
            <span class="color-secondary">Email:</span>
            {' johndoe@example.com'}
          </div>
          <div>
            <span class="color-secondary">Phone:</span>
            {' (+91) 000000000'}
          </div>
          <div>
            <span class="color-secondary">Address:</span>
            {' We at here'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
