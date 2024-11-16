import React, { useState } from "react";
import "./GetInvolvedPage.css";

const GetInvolvedPage = () => {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isJoinUsModalOpen, setIsJoinUsModalOpen] = useState(false);

  const openVolunteerModal = () => setIsVolunteerModalOpen(true);
  const closeVolunteerModal = () => setIsVolunteerModalOpen(false);

  const openJoinUsModal = () => setIsJoinUsModalOpen(true);
  const closeJoinUsModal = () => setIsJoinUsModalOpen(false);

  const handleSubmitVolunteer = (event) => {
    event.preventDefault();
    closeVolunteerModal();
    // Additional form submission logic for the volunteer form can be added here
  };

  const handleSubmitJoinUs = (event) => {
    event.preventDefault();
    closeJoinUsModal();
    // Additional form submission logic for the Join Us form can be added here
  };

  const cardData = [
    {
      title: "Volunteering",
      description:
        "Join our dedicated team of volunteers and be part of initiatives that inspire change and foster growth. From organizing events to supporting local programs, your involvement will help us achieve our mission and create lasting effects.",
      buttonText: "Volunteer Application",
      buttonLink: "#",
      image: "/images/volunteering.jpg",
      onClick: openVolunteerModal,
    },
    {
      title: "Students",
      description:
        "By participating in our student programs, you’ll gain valuable skills, connect with like-minded peers, and explore new areas of knowledge.",
      buttonText: "Learn More",
      buttonLink: "https://www.youtube.com/watch?v=YeLeJ-0cr3A",
      image: "/images/students.jpg",
    },
    {
      title: "Child Welfare",
      description:
        "Join us in our mission to enhance the lives of children in need. Our child welfare program provides support and resources to children and families, aiming to create a safe and nurturing environment for growth and development.",
      buttonText: "Get Involved",
      buttonLink:
        "https://coimbatore.nic.in/notice/appointment-of-chair-person-for-the-child-welfare-committee-coimbatore/",
      image: "/images/childwelfare.jpg",
    },
    {
      title: "Community Outreach",
      description:
        "Whether it's organizing community events, supporting local causes, or collaborating with other organizations, our outreach efforts are designed to bring people together and drive collective progress. We believe that by working together, we can create a better, more connected community. Join us in our mission!",
      buttonText: "Join Us",
      buttonLink: "#",
      onClick: openJoinUsModal,
      image: "/images/community.jpg",
    },
  ];

  return (
    <div className="get-involved-page">
      <div className="get-involved-header">
        <h1>GET INVOLVED</h1>
      </div>
      <div className="get-involved-card-container">
        {cardData.map((card, index) => (
          <div key={index} className="get-involved-card">
            <img
              src={card.image}
              alt={card.title}
              className="get-involved-card-image"
            />
            <h2 className="get-involved-card-title">{card.title}</h2>
            <p className="get-involved-card-description">{card.description}</p>
            <a
              href={card.buttonLink}
              className="get-involved-button"
              onClick={card.onClick}
            >
              {card.buttonText}
            </a>
          </div>
        ))}
      </div>
      {isVolunteerModalOpen && (
        <div className="getinvmodal">
          <div className="getinvmodal-content">
            <span className="getinvclose" onClick={closeVolunteerModal}>
              &times;
            </span>
            <h2>Volunteer Application</h2>
            <form onSubmit={handleSubmitVolunteer}>
              <div className="getinvform-group">
                <label>Your name:</label>
                <div className="getinvform-group-inline">
                  <input
                    type="text"
                    name="first-name"
                    placeholder="First"
                    required
                  />
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Last"
                    required
                  />
                </div>
              </div>

              <div className="getinvform-group">
                <label>Your email address:</label>
                <input type="email" name="email" required />
              </div>

              <div className="getinvform-group">
                <label>The volunteer name:</label>
                <div className="getinvform-group-inline">
                  <input
                    type="text"
                    name="volunteer-first-name"
                    placeholder="First"
                    required
                  />
                  <input
                    type="text"
                    name="volunteer-last-name"
                    placeholder="Last"
                    required
                  />
                </div>
              </div>

              <div className="getinvform-group">
                <label>The volunteer email address:</label>
                <input type="email" name="volunteer-email" required />
              </div>

              <div className="getinvform-group">
                <label>The volunteer age:</label>
                <input type="number" name="volunteer-age" required />
              </div>

              <div className="getinvform-group">
                <label>Availability:</label>
                <div className="getinvform-group-checkbox">
                  <div className="getinvcheckbox-container">
                    <input
                      type="checkbox"
                      name="availability"
                      value="Weekends"
                    />
                    <label>Weekends</label>
                  </div>
                  <div className="getinvcheckbox-container">
                    <input
                      type="checkbox"
                      name="availability"
                      value="1 day a week"
                    />
                    <label>1 day a week</label>
                  </div>
                  <div className="getinvcheckbox-container">
                    <input
                      type="checkbox"
                      name="availability"
                      value="2 days a week"
                    />
                    <label>2 days a week</label>
                  </div>
                  <div className="getinvcheckbox-container">
                    <input
                      type="checkbox"
                      name="availability"
                      value="4h any day"
                    />
                    <label>4h any day</label>
                  </div>
                </div>
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      {isJoinUsModalOpen && (
        <div className="getinvmodal">
          <div className="getinvmodal-content">
            <span className="getinvclose" onClick={closeJoinUsModal}>
              &times;
            </span>
            <h2>Join Us Form</h2>
            <form onSubmit={handleSubmitJoinUs}>
              <div className="getinvform-group">
                <label>Your name:</label>
                <input type="text" name="name" required />
              </div>
              <div className="getinvform-group">
                <label>Your email:</label>
                <input type="email" name="email" required />
              </div>
              <div className="getinvform-group">
                <label>Message:</label>
                <textarea name="message" required />
              </div>
              <button type="submit" className="submit-button">
                Join Us
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetInvolvedPage;
