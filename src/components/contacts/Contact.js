import React from "react";
import "./Contact.css";

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
          Contact <span className="color-secondary">Me</span>
        </h1>
        <p className="greeting">This is how you can contact me...</p>
        <div class="boxes">
          <div>
            <span class="color-secondary">Email:</span>
            {" jananthakrishnan99@oulook.com"}
          </div>
          <div>
            <span class="color-secondary">Phone:</span>
            {" (+91) 963-324-3218"}
          </div>
          <div>
            <span class="color-secondary">Address:</span>
            {" MHB NIT Calicut"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
