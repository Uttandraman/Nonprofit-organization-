import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { CardActionArea, CardActions, Modal, Box, Slide } from "@mui/material";
import DonationForm from "./DonationForm";
import ethical from "./assets/ethical.jpg";
import medical from "./assets/medicalaid.jpg";
import urgent from "./assets/urgenthelp.jpg";
import global from "./assets/global.jpg";
import special from "./assets/specialreinforcement.jpg";
import concrete from "./assets/concretehelp.jpg";
import environment from "./assets/environmental.jpg";
import "./Donationpage.css";

const modalStyle = {
  position: "absolute",
  left: "35%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  maxHeight: "90vh",
  overflowY: "auto",
};

export default function MultiActionAreaCard() {
  const [open, setOpen] = useState(false);
  const [slideIn, setSlideIn] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [cards, setCards] = useState([
    { title: "Global Crisis", image: global, goal: 10000, raised: 8000, key: "global" },
    { title: "Ethical Support", image: ethical, goal: 5000, raised: 4000, key: "ethical" },
    { title: "Medical Aid", image: medical, goal: 7000, raised: 3500, key: "medical" },
    { title: "Urgent Help", image: urgent, goal: 6000, raised: 3900, key: "urgent" },
    { title: "Special Reinforcement", image: special, goal: 8000, raised: 6400, key: "special" },
    { title: "Concrete Help", image: concrete, goal: 5000, raised: 2500, key: "concrete" },
    { title: "Environmental Analyzes", image: environment, goal: 4500, raised: 2900, key: "environment" },
  ]);

  const images = [
    "https://www.shutterstock.com/image-photo/charity-close-diverse-people-holding-600nw-1154653396.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXhuO_HcwSEmnHyROKZDk4SI-8xnXzWJXNw&s",
    "https://wallpapercrafter.com/desktop7/1763563-black-and-white-dark-eyes-girl-hidden-hiding.jpg",
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDonation = (amount, key) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.key === key
          ? { ...card, raised: Math.min(card.raised + amount, card.goal) }
          : card
      )
    );
  };

  return (
    <div className="maindiv">
      <section
        className="seconddiv"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="hero-content">
          <span className="mydiv">GIVE</span>
          <p className="best">BEST COMPATIBILITY</p>
          <div className="best-content">
            <p>
              Your generosity transforms lives. Your contributions provide
              essential support. Together, we can make a significant impact and
              create a more compassionate world.
            </p>
          </div>
          <Slide
            direction="left"
            in={slideIn}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 2000, exit: 500 }}
          >
            <Card className="hero-card1" sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={global}
                  alt="global crisis image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Global Crisis
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Your generous donations help us provide compassionate,
                    respectful, and ethical support to those in need. By
                    contributing, you ensure that every individual receives the
                    care they deserve. Together, we can make a meaningful impact
                    and build a more ethical world.
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={(cards.find(card => card.key === 'global').raised / cards.find(card => card.key === 'global').goal) * 100}
                    sx={{ marginTop: 2 }}
                  />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    marginTop={20}
                  >
                    {cards.find(card => card.key === 'global').raised} / {cards.find(card => card.key === 'global').goal} ({Math.round((cards.find(card => card.key === 'global').raised / cards.find(card => card.key === 'global').goal) * 100)}% funded)
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <button
                  style={{
                    backgroundColor: "green",
                    borderRadius: 5,
                    height: 40,
                    color: "white",
                    width: 180,
                    marginLeft: 100,
                  }}
                  onClick={() => {
                    handleOpen();
                    handleDonation(5, 'global'); // Example donation amount
                  }}
                >
                  DONATE NOW
                </button>
              </CardActions>
            </Card>
          </Slide>
        </div>
      </section>
      <div
        style={{
          textAlign: "center",
          marginTop: 40,
          width: 600,
          marginLeft: 450,
        }}
      >
        <span className="each">Each drop creates the sea</span>
        <span className="world">
          A concrete help for a better and kind world
        </span>
      </div>
      <div className="card-container">
        {cards.map((card) => (
          <Card className="hoh-card" sx={{ maxWidth: 345 }} key={card.key}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={`${card.title} image`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.key === "medical"
                    ? "Your donation provides essential medications, equipment, and healthcare to those in need. Help us treat preventable diseases and perform life-saving surgeries. Together, we can save lives and restore health. Join us in making a difference today."
                    : card.key === "urgent"
                    ? "Your immediate support is crucial in providing essential aid during this crisis. Every dollar helps deliver food, shelter, and medical supplies to those in desperate need. Please donate now and make a life-changing difference. Your generosity can bring hope and save lives."
                    : card.key === "special"
                    ? "Your donation supports advanced educational programs, specialized medical treatments, and innovative job training initiatives. Amplify your impact and help us build stronger, more resilient, and thriving communities worldwide. Together, we can create lasting, positive change."
                    : card.key === "concrete"
                    ? "Your donation provides essential food, shelter, medical aid, education, and job training to those in need. With your donation, we can ensure families have nutritious meals. Every dollar helps rebuild lives and offers immediate relief during crises, creating a brighter future for all."
                    : card.key === "environment"
                    ? "Support environmental analysis to safeguard our planet. Your donation helps fund crucial studies on air, water, and soil quality, guiding sustainable practices and conservation efforts. Together, we can address pollution and protect our environment for future generations."
                    : "Your generous donations help us provide compassionate, respectful, and ethical support to those in need. By contributing, you ensure that every individual receives the care they deserve. Together, we can make a meaningful impact and build a more ethical world."
                  }
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={(card.raised / card.goal) * 100}
                  sx={{ marginTop: 2 }}
                />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  marginTop={20}
                >
                  {card.raised} / {card.goal} ({Math.round((card.raised / card.goal) * 100)}% funded)
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <button className="btn-donate" onClick={() => handleOpen()}>
                DONATE NOW
              </button>
            </CardActions>
          </Card>
        ))}
      </div>
      <section className="section3">
        <div className="section3-content">
          <span className="section31">
            Donate for a better future for everyone
          </span>
          <button className="btn" onClick={handleOpen}>
            DONATE NOW
          </button>
        </div>
      </section>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="donation-form-modal"
        aria-describedby="donation-form-description"
        closeAfterTransition
      >
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
          <Box sx={modalStyle}>
            <DonationForm />
          </Box>
        </Slide>
      </Modal>
    </div>
  );
}
