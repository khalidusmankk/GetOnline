import React from "react";
import "../App.css";

const Footer = () => {
  const list = ["Website Development", "Software Development", "App Development", "Final Year Projects"];
  return (
    <>
      <div className="footerOne">
        <h3>Contact Info</h3>
        <div>
          <i className="fas fa-map-marker-alt"></i>
          Wana, South Waziristan, KPK, Pakistan
        </div>
        <div>
          <i className="fas fa-phone"></i>
          Phone: 00923299399509
        </div>
        <div>
          <i className="fa-brands fa-whatsapp "></i>
          Phone: 00923299399509
        </div>

        <div>
          <i className="fas fa-envelope"></i>
          Email: <a href="mailto:Khalidusmankkpk@gmail.com">getONline@gmail.com</a>
        </div>

        <div
          style={{
            float: "right",
            width: "30%" /* Adjust the width to fit beside .contact-info */,
            display: "block",
            fontFamily: "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
            fontSize: "30px",
            padding: "20px",
            marginTop: -260,
          }}
        >
          <h2> Our Services</h2>
          {list.map((list) => (
            <p>{list}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
