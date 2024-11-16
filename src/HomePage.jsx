import React from "react";
import "./HomePage.css"; // Make sure the path to your CSS file is correct

const HomePage = () => {
  const cardData = [
    {
      title: "Annual Child Welfare Gala",
      image: "/images/gala.jpg",
      description:
        "Join us for a glamorous evening to support our  mission on Child Welfare . Enjoy fine dining, entertainment, and the chance to make a difference. This keeps it brief but highlights the key elements: the elegant nature of the event and its purpose in supporting a cause.",
    },
    {
      title: "Volunteer Drive",
      image: "/images/volunteers.jpg",
      description:
        "Make a difference in our community by volunteering your time. Join us to connect with others and contribute to meaningful projects so each Child can reach their required potentials ",
    },
    {
      title: "Run for Child Welfare",
      image: "/images/charity-run.jpg",
      description:
        "Run for a cause! Participate in our charity run to raise awareness and funds while staying active and healthy.This highlights the purpose of the event, the benefit of participating, and the physical activity involved",
    },
    {
      title: "Donation Campaign",
      image: "/images/donation.jpg",
      description:
        "Every contribution counts! Start a donation campaign to support our cause on Children Health  and help make a significant impact for their welfare .This emphasizes the importance of each donation and encourages participation in the campaign.",
    },
    {
      title: "Community Fair",
      image: "/images/community-fair.jpg",
      description:
        "Celebrate with us at our annual Community Fair. Enjoy fun activities with Children, local vendors, and a chance to connect with your neighbors.This highlights the festive nature of the event, the variety of activities, and the opportunity to engage with the community",
    },
    {
      title: "Art Auction",
      image: "/images/art-auction.jpg",
      description:
        "Bid on exquisite artworks to support our Child Welfare Program. Discover unique pieces and contribute to our fundraising goals through art.This emphasizes the opportunity to acquire art while supporting for a good cause.",
    },
  ];

  return (
    <div className="eventhomepage-container">
      <div className="eventhomepage-header">
        <h1 className="eventhomepage-title">Fundraising Events</h1>
      </div>
      <div className="eventhomepage-card-container">
        {cardData.map((card, index) => (
          <div key={index} className="eventhomepage-card">
            <img
              src={card.image}
              alt={`Image for ${card.title}`}
              className="eventhomepage-card-image"
            />
            <h2 className="eventhomepage-card-title">{card.title}</h2>
            <p className="eventhomepage-card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
