import React from "react";

const About = () => {
  return (
    <>
      <div className="aboutMain">
        <img src="/images/aboutmain.jpg" alt="mainPic" />
        <h1 className="fall-animation"> It's About You , Not Us</h1>
      </div>
      <div style={{ boxSizing: "border-box", marginLeft: "50px", marginRight: "50px" }}>
        <div className="about-container">
          <section className="about-header">
            <h1> Introduction</h1>
            <p>
              At GetOnline, we are passionate about crafting tailored solutions for websites, software, mobile apps,
              social media marketing, and SEO. Our mission is to help businesses thrive in the digital landscape with
              cutting-edge technologies and innovative strategies.
            </p>
          </section>

          <section className="about-services">
            <h2>What We Offer</h2>
            <ol>
              <li>Custom Website Development</li>
              <li>Mobile Application Development</li>
              <li>Robust Software Solutions</li>
              <li>Social Media Marketing Strategies</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Final Year Projects (FYP)</li>
            </ol>
          </section>

          <section className="about-mission">
            <i className=" fa-regular fa-lightbulb" />
            <h2>Our Mission</h2>
            <p>
              To empower businesses by providing high-quality, innovative, and scalable digital solutions that drive
              success and growth. To deliver exceptional IT experiences that drive digital transformation, enhance
              efficiency, and unlock the full potential of our clients by:
            </p>
            <h3>Prioritizing Innovation:</h3>
            <p>
              We continuously explore and implement cutting-edge technologies to provide our clients with a competitive
              edge.
            </p>
            <h3>Building Trustworthy Solutions: </h3>
            <p> We develop secure and reliable IT systems that our clients can depend on for smooth operations.</p>
            <h3>Fostering Collaboration:</h3>
            <p>We partner closely with our clients to understand their unique needs and craft customized solutions.</p>
            <h3>Delivering Scalable Growth:</h3>
            <p> We offer adaptable IT solutions that scale alongside your business aspirations.</p>
            <h3>Ensuring Your Success:</h3>
            <p>
              We provide ongoing support and expertise to empower you to maximize the value of your IT investment. This
              combination of vision and mission captures your company's long-term aspirations while outlining the core
              principles guiding your daily operations.
            </p>
          </section>

          <div className="aboutBoth">
            <section className="about-team">
              <h1>Meet Our Team</h1>
              <p>
                Our team is a blend of skilled developers, creative designers, and marketing strategists dedicated to
                delivering the best results for our clients.
              </p>
              <p>
                Our team comprises a remarkable ensemble of software engineers and web developers whose collective
                expertise transforms ideas into reality. With precision, creativity, and an unwavering commitment to
                excellence, they breathe life into digital solutions tailored to every client’s unique vision.
              </p>
              <p>
                Driven by a passion for innovation, our team members thrive on crafting cutting-edge technologies. Their
                ability to think outside the box ensures that every project stands out, seamlessly blending
                functionality with aesthetic brilliance to create products that inspire.
              </p>
              <p>
                With years of experience across diverse industries, each team member is a master in their domain.
                Whether it is developing robust backend systems or designing intuitive user interfaces, their meticulous
                attention to detail sets a gold standard for quality.
              </p>
              <h3> Committed to Excellence: </h3>
              <p>
                Our team believes in delivering more than just projects; they deliver excellence. With a client-centric
                approach, they ensure every line of code and every pixel aligns with the client’s goals, resulting in
                solutions that not only meet but exceed expectations.
              </p>
              <p>
                Equipped with a deep understanding of the latest technologies, our team members stay ahead of the curve.
                From mastering modern frameworks to integrating advanced tools, they embrace challenges and adapt
                swiftly to the ever-evolving tech landscape.
              </p>

              <h3>Human-Centric Innovators:</h3>
              <p>
                Beyond the code, our team members understand the human element behind every digital product. They craft
                solutions with empathy, ensuring that user experience remains at the heart of their development process,
                delivering not just functionality but delight.
              </p>
            </section>

            <div className="about-myTeam">
              <h3>LET'S TALK</h3>
              <h2> Speak With Expert</h2>
              <i className="fa-solid fa-phone-volume" />
              <h3>Phone:</h3>
              <p>00923299399509</p>
              <i className="fa-brands fa-whatsapp " />
              <h3>What'sApp:</h3>
              <p>00923299399509</p>
              <i className="fa-solid fa-envelope" />
              <h3>Email:</h3>
              <p>
                <a href="mailto:Khalidusmankkpk@gmail.com">getONline@gmail.com</a>
              </p>
              <i className="fa-solid fa-address-card" />
              <h3>Address:</h3>
              <p>Wana,South Waziristan</p>
              <p>KPK Pakistan</p>
            </div>
          </div>

          <section className="about-cta">
            <h3>Let's Work Together</h3>
            <p>
              Ready to take your business to the next level? <a href="/Contact#contact">Contact us</a> today to get
              started!
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;

// import React from "react";

// const About = () => {
//   return (
//     <>
//
//     </>
//   );
// };

// export default About;
