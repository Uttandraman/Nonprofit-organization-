import React from "react";
import "./Home.css";
import "animate.css";
import { useNavigate } from "react-router-dom";
import aboutUsImage from "./assets/2.jpeg.jpg";
import G1 from "./assets/gallery-1.jpg";
import G2 from "./assets/gallery-2.jpg";
import G3 from "./assets/gallery-3.jpg";
import G4 from "./assets/gallery-4.jpg";
import G5 from "./assets/gallery-5.jpg";
import G6 from "./assets/gallery-6.jpg";
import L1 from "./assets/white.jpg";

function Home() {
  const navigate = useNavigate();

  const handleNavigation = (path) => (e) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="home-wrapper">
      <div className="charity-template">
        <header>
          <div
            className="home-container"
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}
          >
            <div className="con" style={{ display: "flex", alignItems: "center" }}>
              <img
                src={L1}
                style={{
                  display: "block",
                  marginTop: "10px",
                  marginRight: "10px",
                  width: "60px",
                  height: "60px",
                }}
                alt="Logo"
              />
              <h1 className="animate_animated animate_fadeInDown" style={{ display: "inline" }}>
                Hearts of Hope
              </h1>
            </div>
            <nav className="p3" style={{ marginLeft: "auto" }}>
              <ul style={{ display: "flex", listStyle: "none" }}>
                <li style={{ margin: "0 10px" }}>
                  <a href="/home" onClick={handleNavigation("/")}>Home</a>
                </li>
                <li style={{ margin: "0 10px" }}>
                  <a href="/about" onClick={handleNavigation("/about")}>About</a>
                </li>
                <li style={{ margin: "0 10px" }}>
                  <a href="/programs" onClick={handleNavigation("/programs")}>Programs</a>
                </li>
                <li style={{ margin: "0 10px" }}>
                  <a href="/getin" onClick={handleNavigation("/getin")}>Get Involved</a>
                </li>
                <li style={{ margin: "0 10px" }}>
                  <a href="/resource" onClick={handleNavigation("/resource")}>Resource</a>
                </li>
                <li style={{ margin: "0 10px" }}>
                  <a href="#footer" onClick={handleNavigation("#footer")}>Contact</a>
                </li>
                <li style={{ margin: "0 10px" }}>
                  <a href="/donate" onClick={handleNavigation("/donate")}>Donate</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      <section id="home" class="hero11">
        <div class="container">
          <h2 class="animate_animated animate_fadeInLeft">
            No one has ever become poor by giving.
          </h2>
          <p class="animate_animated animate_fadeInRight">
            Hope is being able to see that there is light despite all of the
            darkness.
          </p>
          <a
            href="#about"
            class="btn animate_animated animatepulse animate_infinite"
          >
            Learn More
          </a>
        </div>
      </section>

      <section id="" class="about">
        <div class="container1">
          <div class="text-content animate_animated animate_fadeInUp">
            <h2>Who <span class="p1">We</span> Are</h2>
            <p>
              Hearts of Hope was founded in 2020 with a mission to provide
              support and resources to underprivileged communities worldwide.
              Our journey began with a small group of dedicated volunteers who
              believed in the power of compassion and collective action. Over
              the years, we have grown into a robust organization, impacting
              countless lives through our various programs in education,
              healthcare, and sustainable development. At Hearts of Hope, we
              strive to bring hope and change to those in need, fostering a
              world where everyone has the opportunity to thrive and succeed.
              Our mission is to empower individuals and communities by offering
              aid, resources, and a supportive network, ensuring that hope is
              always within reach.
            </p>
          </div>
          <div class="image-content">
            <img src={aboutUsImage} alt="About Us" />
          </div>
        </div>
      </section>

      <section id="" class="menu">
        <div class="container2">
          <h1 class="animate_animated animate_fadeInUp">Our Approach</h1>
          <div class="menu-items">
            <div class="menu-item animate_animated animate_zoomIn">
              <h3>Vision & Mission</h3>
              {/* <img src={m1}></img> */}
              <p>
                "At Heart of Hope, our mission is to empower communities and
                uplift lives through compassionate support and sustainable
                solutions. We envision a world where everyone has the
                opportunity to thrive."
              </p>
            </div>
            <div class="menu-item animate_animated animatezoomIn animate_delay-1s">
              <h3>Community Engagement</h3>
              <p>
                "We believe in the power of community. Our approach centers on
                engaging with local communities to understand their needs,
                harness their strengths, and develop tailored solutions that
                foster resilience and growth."
              </p>
            </div>
            <div class="menu-item animate_animated animatezoomIn animate_delay-2s">
              <h3>Sustainable Solutions</h3>
              <p>
                "Sustainability is at the core of our initiatives. We focus on
                creating long-term solutions that promote self-sufficiency and
                environmental stewardship, ensuring that our impact endures for
                generations to come."
              </p>
            </div>
            <div class="menu-item animate_animated animatezoomIn animate_delay-3s">
              <h3>Transparency and Accountability</h3>
              <p>
                "We uphold the highest standards of transparency and
                accountability. Our commitment to open communication and
                diligent reporting ensures that every contribution is used
                effectively and ethically."
              </p>
            </div>
            <div class="menu-item animate_animated animatezoomIn animate_delay-4s">
              <h3>Partnerships and Collaboration</h3>
              <p>
                "Collaboration is key to our success. By partnering with
                like-minded organizations, government bodies, and community
                leaders, we leverage collective expertise and resources to
                maximize our impact."
              </p>
            </div>
            <div class="menu-item animate_animated animatezoomIn animate_delay-5s">
              <h3>Impact and Success Stories</h3>
              <p>
                "Our impact is best illustrated through the stories of those
                we've helped. From providing educational opportunities to
                transforming lives through healthcare initiatives, our success
                stories reflect the heart and hope we strive to bring to every
                individual and community we serve."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="" class="gallery">
        <div class="container3">
          <h2 class="animate_animated animate_fadeInUp">Gallery</h2>
          <div class="gallery-images">
            <img
              src={G1}
              alt="Gallery Image 1"
              class="animate_animated animate_zoomIn"
            />
            <img
              src={G2}
              alt="Gallery Image 2"
              class="animate_animated animatezoomIn animate_delay-1s"
            />
            <img
              src={G3}
              alt="Gallery Image 3"
              class="animate_animated animatezoomIn animate_delay-2s"
            />
            <img
              src={G4}
              alt="Gallery Image 4"
              class="animate_animated animatezoomIn animate_delay-3s"
            />
            <img
              src={G5}
              alt="Gallery Image 5"
              class="animate_animated animatezoomIn animate_delay-4s"
            />
            <img
              src={G6}
              alt="Gallery Image 6"
              class="animate_animated animatezoomIn animate_delay-5s"
            />
          </div>
        </div>
      </section>
      <section id="" class="blog">
        <div class="container">
          <h2 class="animate_animated animate_fadeInUp">
            We <span class="p1">Need</span> Your Help
          </h2>
          <div class="blog-posts">
            <div class="blog-post animate_animated animate_fadeInUp">
              <img
                src="https://th.bing.com/th?id=OIP.APu_TrsfCDS4VxkuXbALqwHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="Blog Image 1"
              />
              <h3>The Silent Tragedy: Lives Lost to Hunger</h3>
              <p>
                In many parts of the world, children face the harsh reality of
                hunger and malnutrition, leading to countless deaths daily. Join
                us in our mission to provide essential nutrition and save
                innocent lives. Lives Lost to Hunger. Your help can make a difference.
              </p>
              <a href="#" class="home-btn">
                Read More
              </a>
            </div>
            <div class="blog-post animate_animated animatefadeInUp animate_delay-1s">
              <img
                src="https://wallpaperaccess.com/full/2719941.jpg"
                alt="Blog Image 2"
              />
              <h3>The Plight of the Elderly: Stranded on the Streets</h3>
              <p>
                In many cities, an increasing number of elderly individuals find
                themselves without a home, forced to live on the streets. These
                vulnerable seniors often lack access to basic necessities such
                as food, shelter, and medical care, making their situation dire.
              </p>
              <a href="#" class="home-btn">
                Read More
              </a>
            </div>
            <div class="blog-post animate_animated animatefadeInUp animate_delay-2s">
              <img
                src="https://th.bing.com/th/id/OIP.pbP4eeGOyQN75IrJhegNbQHaEK?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Blog Image 3"
              />
              <h3>Empowering Lives: Your Contribution Can Make a Difference</h3>
              <p>
                Millions of families around the world are grappling with the
                harsh realities of poverty. Basic needs like food, shelter, and
                education remain out of reach, making daily survival a daunting
                challenge
              </p>
              <a href="#" class="home-btn">
                Read More
              </a>
            </div>
            <div class="blog-post animate_animated animatefadeInUp animate_delay-3s">
              <img
                src="https://th.bing.com/th/id/OIP.ms8HHnfduFMgVZXV1isDdwHaE8?w=293&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Blog Image 4"
              />
              <h3>
                The Growing Crisis: Lives Lost to Disease, Fever, and Mosquitoes
              </h3>
              <p>
                Every year,countless lives are lost to preventable diseases,
                fevers,and mosquito-borne illnesses. Malaria,dengue fever,and
                other vector-borne diseases remain rampant in many parts of the
                world.
              </p>
              <a href="#" class="home-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="contact1-form" id="contact1-form">
      <h2>Get in touch</h2>
      <p>Let's talk about your project</p>
      <form>
        <input className='home-input' type="text" placeholder="Your name" />
        <input className="home-input" type="text" placeholder="Your phone number" />
        <input className="home-input" type="email" placeholder="Your email" />
        <textarea className='home-input' placeholder="Your message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section> */}

      <footer className='footer' id="footer">
    <div class="footer-content">
      {/* <div class="footer-section about">
        <h2 class="logo-text"><span>HOH</span> Charity & Non-profit</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
        </p>
        <a href="#">Read More</a>
      </div> */}

      <div class="footer-section links">
        <h2>Who We Are</h2>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>

      <div class="footer-section contact-form">
        <h2>Where We Work</h2>
        <ul>
          <li><span>Coimbatore TamilNadu </span></li>
          <li><span>7373750804 - 9842750804</span></li>
          <li><span>HOHcharity@gmail.com</span></li>
          <li><span>Mon - Sat 09:00 - 17:00</span></li>
        </ul>
      </div>

      <div class="footer-section social-media">
        <h2>Follow Us</h2>
       
        <div class="socials">
          <a href="#"><i class="fab fa-facebook"><img src="https://i.pinimg.com/736x/ee/93/32/ee933267f1290803739dd38bca4a9b25.jpg" alt="facebook"></img></i></a>
          <a href="#"><i class="fab fa-twitter"><img src="https://img.freepik.com/premium-vector/twitter-x-icon_878233-1623.jpg" alt="twitter"></img></i></a>
          <a href="#"><i class="fab fa-instagram"><img src="https://thumbs.dreamstime.com/z/black-white-instagram-logo-vector-ai-file-easily-editable-have-white-background-high-resolution-instagram-logo-138329686.jpg" alt="instagram" /></i></a>
          <a href="#"><i class="fab fa-pinterest"><img src="https://i.pinimg.com/564x/fd/24/fe/fd24fe4adfd1e7d0ca36bc476b6b5005.jpg" alt="pinterest" /></i></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      Thiruvarutselvan  Uttandaraman  Uvalakshmi
    </div>
  </footer>
    </div>
    </div>
  );
}

export default Home;