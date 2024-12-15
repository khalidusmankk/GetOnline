import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contactMain">
        <img src="/images/contactmain.jpg" alt="Contact Us" />
        <h1 id="contact"> Contact Us Today</h1>

        <div className="contactForm">
          <label> Your Name : </label> <br />
          <input type="text" /> <br />
          <br />
          <label> Your Email : </label>
          <br />
          <input type="email" />
          <br />
          <br />
          <label> Subject : </label> <br />
          <input type="text" />
          <br />
          <br />
          <label> Your Message : </label>
          <br />
          <textarea rows="10" cols="50">
            {" "}
          </textarea>{" "}
          <i className="fa-solid fa-mobile-retro" /> <br />
          <button type="button"> Submit </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
