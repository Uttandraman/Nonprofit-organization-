import React, { useState, useEffect } from "react";
import "./Home.css";

import G1 from "./assets/gallery-1.jpg";
import G2 from "./assets/gallery-2.jpg";
import G3 from "./assets/gallery-3.jpg";
import G4 from "./assets/gallery-4.jpg";
import G5 from "./assets/gallery-5.jpg";
import G6 from "./assets/gallery-6.jpg";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [events, setEvents] = useState([]);
  const [causes, setCauses] = useState([]);
  const [missionData, setMissionData] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetching cards data from API
    fetch("http://localhost:3000/api/homecard")
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error("Error fetching cards:", error));

    // Fetching events data from API
    fetch("http://localhost:3000/api/event")
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error("Error fetching events:", error));

    // Fetching causes data from API
    fetch("http://localhost:3000/api/causes")
      .then(response => response.json())
      .then(data => setCauses(data))
      .catch(error => console.error("Error fetching causes:", error));

    // Fetching mission data from API
    fetch("http://localhost:3000/api/mission")
      .then(response => response.json())
      .then(data => setMissionData(data))
      .catch(error => console.error("Error fetching mission data:", error));

    // Fetching blog posts data from API
    fetch("http://localhost:3000/api/blog")
      .then(response => response.json())
      .then(data => setBlogPosts(data))
      .catch(error => console.error("Error fetching blog posts:", error));
  }, []);

  return (
    <div>
      <section id="home" className="hero11">
        <div className="container">
          <h2 className="animate_animated animate_fadeInLeft">
            No one has ever become poor by giving.
          </h2>
          <p className="animate_animated animate_fadeInRight">
            Hope is being able to see that there is light despite all of the
            darkness.
          </p>
          <a
            href="#missionhome"
            className="btn animate_animated animatepulse animate_infinite"
          >
            Learn More
          </a>
        </div>
      </section>
      <section>
        <div className="card-section">
          <div className="container">
            <div className="cards">
              {cards.map((card, index) => (
                <div key={index} className="card">
                  <div className="icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <a href="/getin"><button>{card.buttonText}</button></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div>
        <section>
          <div className="charity-section">
            <div className="events">
              <h2 className="section-title">Upcoming Events</h2>
              <div className="event-list">
                {events.map((event, index) => (
                  <div key={index} className="event-item">
                    <div className="event-date">
                      <span className="day">{event.date.split(" ")[0]}</span>
                      <span className="month">{event.date.split(" ")[1]}</span>
                    </div>
                    <div className="event-details">
                      <h3 className="event-title">{event.title}</h3>
                      <p className="event-time">{event.time}</p>
                      <p className="event-location">{event.location}</p>
                      <p className="event-description">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="featured-cause">
              <h2 className="section-title">Featured Causes</h2>
              <div className="cause-content">
                <img
                  src="http://hasan.themexlab.com/new/charity-home-html/img/causes/b1.jpg"
                  alt="Child"
                  className="cause-image"
                />
                <div className="cause-details">
                  <h2>Charity For Education</h2>
                  <p>
                    <span className="cause-span">
                      "Empower young minds through education to break the cycle
                      of poverty and build a brighter future."
                    </span>
                  </p>
                  <p className="cause-description">
                    "Charity for Education focuses on providing essential
                    educational resources and opportunities to underprivileged
                    children. By supporting their learning journey, we empower
                    them to break the cycle of poverty and build a brighter
                    future. Join us in making a lasting impact on young minds."
                  </p>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "85%" }}>
                      85%
                    </div>
                  </div>
                  <div className="donation-info">
                    <span>Raised: $7890</span>
                    <span>Goal: $9300</span>
                  </div>
                  <div className="cause-buttons">
                    <a href="/donate"><button className="donate-button">Donate Now</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="app">
            <h1 className="app-h1">Recent Causes</h1>
            <div className="causes-container">
              {causes.map((cause, index) => (
                <div className="cause-a1" key={index}>
                  <img src={cause.image} alt="Cause" className="cause-img" />

                  <div className="causeInfo">
                    <h3 className="cause-h1">SPONSOR A CHILD TODAY</h3>
                    <p className="cause-span">Raised: ${cause.raised}</p>
                    <p className="cause-span">Goal: ${cause.goal}</p>
                    <p>{cause.description}</p>
                    <a href="/donate"><button className="button donate-now">
                      &raquo; DONATE NOW
                    </button></a>

                    <button className="button donators">
                      <span className="heart-icon">&#10084;</span> Donate: $
                      {cause.donate}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="donate-section">
          <div className="donate-overlay"></div>
          <div className="donate-content">
            <h3>Support Us and Change the Course of a Child's Life Today!</h3>
            <p>
              "The simplest acts of kindness are by far more powerful than a
              thousand heads bowing in prayer."
            </p>
            <a href="/donate" className="donate-button">
              Donate
            </a>
          </div>
        </section>

        <section id="" className="gallery">
          <div className="container3">
            <h2 className="gallery-title">Gallery</h2>
            <div className="gallery-images">
              <img
                src={G1}
                alt="Gallery Image 1"
                className="animate_animated animate_zoomIn"
              />
              <img
                src={G2}
                alt="Gallery Image 2"
                className="animate_animated animatezoomIn animate_delay-1s"
              />
              <img
                src={G3}
                alt="Gallery Image 3"
                className="animate_animated animatezoomIn animate_delay-2s"
              />
              <img
                src={G4}
                alt="Gallery Image 4"
                className="animate_animated animatezoomIn animate_delay-3s"
              />
              <img
                src={G5}
                alt="Gallery Image 5"
                className="animate_animated animatezoomIn animate_delay-4s"
              />
              <img
                src={G6}
                alt="Gallery Image 6"
                className="animate_animated animatezoomIn animate_delay-5s"
              />
            </div>
          </div>
        </section>
        <div className="section-container">
          <div className="text-content">
            <h1>"See the change you've inspired"!</h1>
            <p>
              "Visit our gallery to see the impact of your support, showcasing
              moments of hope and transformation made possible by your
              contributions."
            </p>
          </div>
          <a href="/gallery"><button className="donate-button">VIEW FULL GALLERY</button></a>
          <div className="image-content"></div>
        </div>
      </div>
      <section id="missionhome">
        <div className="mission-container">
          <h2 className="mission-heading">OUR MISSION</h2>
          <div className="mission-content">
            {missionData.map((mission, index) => (
              <div key={index} className="mission-item">
                <div className="mission-icon">{mission.icon}</div>
                <div className="mission-text">
                  <h3>{mission.title}</h3>
                  <p>{mission.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog">
        <div className="blog-container">
          <div className="blog-content">
            <h2>Latest News</h2>
            <div className="blog-list">
              {blogPosts.map((post, index) => (
                <div key={index} className="blog-post">
                  <img src={post.image} className="blog-image"></img>
                  <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p>{post.date}</p>
                  <p>{post.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
