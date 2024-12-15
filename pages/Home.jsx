import React from "react";

import Software from "../components/Software";
import Grocery from "../components/Grocery";
const Home = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "1300px",
          zIndex: -1,
        }}
      >
        <img src="/images/homesmob.png" alt="mainimg" style={{ width: "100%", height: "500px", marginTop: "50px" }} />

        <div
          style={{
            marginTop: "-400px",
            fontSize: "50px",
            color: "whitesmoke",
            textAlign: "center",
            marginBottom: "50px",
            textShadow: "5px 5px black",
          }}
          className="fall-animation"
        >
          <h1>Welcome to GetOnline </h1>
          <h1>We solve new world's problems </h1>
        </div>

        <div className="home3rd">
          <img src="/images/homesweb.png" alt="homesweb" />
          <h2> Web Development</h2>
        </div>
        <div className="home3rd">
          <img src="/images/homesmob.png" alt="MobileApp" />
          <h2> Mobile Development</h2>
        </div>
        <div className="home3rd">
          <img src="/images/homes1.png" alt="fyp" />

          <h2>Final Year Projects</h2>
        </div>

        <div className="home3rd">
          <img src="/images/homessm.png" alt="Social Media" />
          <h2> Social Media Marketing</h2>
        </div>
        <div className="home3rd">
          <img src="/images/homesse.png" alt="SearchEngine" />
          <h2> Search Engine Optimization </h2>
        </div>
        <div className="home3rd ">
          <img src="/images/homes2.png" alt="image" />
          <h2> Software Development</h2>
        </div>
      </div>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "rgb(134, 9, 9)",
          color: "whitesmoke",
          width: "98.4%",
          margin: "auto",
          border: "2px solid rgb(134, 9, 9)",
        }}
      >
        Software for Grocery:
      </h1>
      <Grocery />
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "yellow",
          width: "80%",
          margin: "auto",
          border: "2px solid rgb(134, 9, 9)",
        }}
      >
        Software for Text:
      </h1>
      <Software />
    </>
  );
};

export default Home;
