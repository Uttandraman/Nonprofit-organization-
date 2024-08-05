import React from "react";
import "./GetInvolvedPage.css"; // Ensure this is the correct path to your CSS file
const GetInvolvedPage = () => {
  const cardData = [
    {
      title: "Volunteering",
      description: "Join our dedicated team of volunteers and be part of initiatives that inspire change and foster growth. From organizing events to supporting local programs, your involvement will help us achieve our mission and create lasting effects.",
      buttonText: "Volunteer Application",
      buttonLink: "#",
      image: "/images/volunteering.jpg" // Path to your image
    },
    {
      title: "Students",
      description: "By participating in our student programs, you’ll gain valuable skills, connect with like-minded peers, and explore new areas of knowledge.",
      buttonText: "Learn More",
      buttonLink: "#",
      image: "/images/students.jpg" // Path to your image
    },
    {
      title: "Educators",
      description: "From innovative teaching methods to exciting field trips and feedback opportunities, our initiatives are here to empower you with the tools and knowledge needed to make a lasting impact in the classroom. Join a community of educators committed to continuous learning and improvement, and discover new ways to inspire and motivate your students.",
      buttonText: "Field Trips Feedback",
      buttonLink: "#",
      image: "/images/educators.jpg" // Path to your image
    },
    {
      title: "Community Outreach",
      description: "Whether it's organizing community events, supporting local causes, or collaborating with other organizations, our outreach efforts are designed to bring people together and drive collective progress. We believe that by working together.Join us in our mission to create a better, more connected community!",
      buttonText: "Join Us",
      buttonLink: "#",
      image: "/images/community.jpg" // Path to your image
    }
  ];

  return (
    <div className="get-involved-page">
      <div className="get-involved-header">
        <h1>Get Involved</h1>
      </div>
      <div className="get-involved-card-container">
        {cardData.map((card, index) => (
          <div key={index} className="get-involved-card">
            <img src={card.image} alt={card.title} className="get-involved-card-image" />
            <h2 className="get-involved-card-title">{card.title}</h2>
            <p className="get-involved-card-description">{card.description}</p>
            <a href={card.buttonLink} className="get-involved-button">{card.buttonText}</a>
          </div>
        ))}
      </div>
      <footer className="get-involved-footer">
        <p>Contact us:</p>
        <p>Email: contact@organization.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 456 Community Path, Unity City, PeaceState, 12345</p>
      </footer>
    </div>
  );
};

export default GetInvolvedPage;
