import React from "react";
import "./HomePage.css"; // Make sure the path to your CSS file is correct

const HomePage = () => {
  const cardData = [
    {
      title: "Annual Gala",
      image: "/images/gala.jpg",
      description:
        "Join us for a glamorous evening to support our mission. Enjoy fine dining, entertainment, and the chance to make a difference. This keeps it brief but highlights the key elements: the elegant nature of the event and its purpose in supporting a cause.",
    },
    {
      title: "Volunteer Drive",
      image: "/images/volunteers.jpg",
      description:
        "Make a difference in our community by volunteering your time. Join us to connect with others and contribute to meaningful projects"
    },
    {
      title: "Charity Run",
      image: "/images/charity-run.jpg",
      description:
        "Run for a cause! Participate in our charity run to raise awareness and funds while staying active and healthy.This highlights the purpose of the event, the benefit of participating, and the physical activity involved"
    },
    {
      title: "Donation Campaign",
      image: "/images/donation.jpg",
      description:
      "Every contribution counts! Start a donation campaign to support our cause and help make a significant impact.This emphasizes the importance of each donation and encourages participation in the campaign."
    },
    {
      title: "Community Fair",
      image: "/images/community-fair.jpg",
      description:"Celebrate with us at our annual Community Fair. Enjoy fun activities, local vendors, and a chance to connect with your neighbors.This highlights the festive nature of the event, the variety of activities, and the opportunity to engage with the community",
    },
    {
      title: "Art Auction",
      image: "/images/art-auction.jpg",
      description:"Bid on exquisite artworks to support our cause. Discover unique pieces and contribute to our fundraising goals through art.This emphasizes the opportunity to acquire art while supporting a good cause.",
    },
  ];

  return (
    <div className="homepage-container">
      <div className="homepage-header">
        <h1 className="homepage-title">Fundraising Events</h1>
      </div>
      <div className="homepage-card-container">
        {cardData.map((card, index) => (
          <div key={index} className="homepage-card">
            <img
              src={card.image}
              alt={`Image for ${card.title}`}
              className="homepage-card-image"
            />
            <h2 className="homepage-card-title">{card.title}</h2>
            <p className="homepage-card-description">{card.description}</p>
          </div>
        ))}
      </div>
      <footer className="homepage-footer">
        <p>Contact us:</p>
        <p>Email: contact@fundraisingevents.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 456 Charity Drive, Philanthropy City, KindState, 67890</p>
      </footer>
    </div>
  );
};

export default HomePage;
