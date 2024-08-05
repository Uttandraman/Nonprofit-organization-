import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import ethical from './assets/ethical.jpg';
import medical from './assets/medicalaid.jpg';
import urgent from './assets/urgenthelp.jpg';
import global from './assets/global.jpg';
import special from './assets/specialreinforcement.jpg';
import concrete from './assets/concretehelp.jpg';
import environment from './assets/environmental.jpg';
import './Donationpage.css';
import { Button, CardActionArea, CardActions, Modal, Box, Slide } from '@mui/material';
import DonationForm from './DonationForm';

const modalStyle = {
  position: 'absolute',
  left: '35%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function MultiActionAreaCard() {
  const [open, setOpen] = useState(false);
  const [slideIn, setSlideIn] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='maindiv'>
      <section className='seconddiv'>
        <div className='hero-content'>
          <span className="mydiv">GIVE</span>
          <p className='best'>BEST COMPATIBILITY</p>
          <div className='best-content'>
            <p>Your generosity transforms lives. Your contributions provide essential support. Together, we can make a significant impact and create a more compassionate world.</p>
          </div>
          <Slide direction="left" in={slideIn} mountOnEnter unmountOnExit timeout={{ enter: 2000, exit: 500 }}>
            <Card className='hero-card1' sx={{ maxWidth: 400 }}>
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
                    Your generous donations help us provide compassionate, respectful, and ethical support to those in need. By contributing, you ensure that every individual receives the care they deserve. Together, we can make a meaningful impact and build a more ethical world.
                  </Typography>
                  <LinearProgress variant="determinate" value={80} sx={{ marginTop: 2 }} />
                  <Typography variant="caption" color="text.secondary" marginTop={20}>
                    {80}% funded
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <button style={{ backgroundColor: 'green', borderRadius: 5, height: 40, color: 'white', width: 180, marginLeft: 100 }} onClick={handleOpen}>DONATE NOW</button>
              </CardActions>
            </Card>
          </Slide>
        </div>
      </section>
      <div style={{textAlign:'center',marginTop:40,width:600,marginLeft:450}}>
      <span className='each'>Each drop creates the sea</span>
      <span className='world'>A concrete help for a better and kind world</span>
      </div>
      <div className="card-container">
        <Card className='card' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ethical}
              alt="Ethical support image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ethical Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your generous donations help us provide compassionate, respectful, and ethical support to those in need. By contributing, you ensure that every individual receives the care they deserve. Together, we can make a meaningful impact and build a more ethical world.
              </Typography>
              <LinearProgress variant="determinate" value={80} sx={{ marginTop: 2 }} />
              <Typography variant="caption" color="text.secondary" marginTop={20}>
                {80}% funded
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <button className='btn-donate' onClick={handleOpen}>DONATE NOW</button>
          </CardActions>
        </Card>

        <Card className='card' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={medical}
              alt="Medical aid image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Medical Aid
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your donation provides essential medications, equipment, and healthcare to those in need. Help us treat preventable diseases and perform life-saving surgeries. Together, we can save lives and restore health. Join us in making a difference today.
              </Typography>
              <LinearProgress variant="determinate" value={50} sx={{ marginTop: 2 }} />
              <Typography variant="caption" color="text.secondary" sx={{ marginTop: 1 }}>
                {50}% funded
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <button className='btn-donate' onClick={handleOpen}>DONATE NOW</button>
          </CardActions>
        </Card>

        <Card className='card' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={urgent}
              alt="Urgent help image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Urgent Help
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your immediate support is crucial in providing essential aid during this crisis. Every dollar helps deliver food, shelter, and medical supplies to those in desperate need. Please donate now and make a life-changing difference. Your generosity can bring hope and save lives.
              </Typography>
              <LinearProgress variant="determinate" value={65} sx={{ marginTop: 2 }} />
              <Typography variant="caption" color="text.secondary" sx={{ marginTop: 1 }}>
                {65}% funded
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <button className='btn-donate' onClick={handleOpen}>DONATE NOW</button>
          </CardActions>
        </Card>
      </div>
      <div className="card-container">
        <Card className='card' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={special}
              alt="Special reinforcement image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Special Reinforcement
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Your donation supports advanced educational programs, specialized medical treatments, and innovative job training initiatives. Amplify your impact and help us build stronger, more resilient, and thriving communities worldwide. Together, we can create lasting, positive change.
              </Typography>
              <LinearProgress variant="determinate" value={80} sx={{ marginTop: 2 }} />
              <Typography variant="caption" color="text.secondary" marginTop={20}>
                {80}% funded
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <button className='btn-donate' onClick={handleOpen}>DONATE NOW</button>
          </CardActions>
        </Card>

        <Card className='card' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={concrete}
              alt="Concrete help image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Concrete Help
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Your donation provides essential food, shelter, medical aid, education, and job training to those in need. With your donation, we can ensure families have nutritious meals. Every dollar helps rebuild lives and offers immediate relief during crises, creating a brighter future for all.
              </Typography>
              <LinearProgress variant="determinate" value={50} sx={{ marginTop: 2 }} />
              <Typography variant="caption" color="text.secondary" sx={{ marginTop: 1 }}>
                {50}% funded
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <button className='btn-donate' onClick={handleOpen}>DONATE NOW</button>
          </CardActions>
        </Card>

        <Card className='card' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={environment}
              alt="Environment analyses image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Environmental Analyzes
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Support environmental analysis to safeguard our planet. Your donation helps fund crucial studies on air, water, and soil quality, guiding sustainable practices and conservation efforts. Together, we can address pollution and protect our environment for future generations.
              </Typography>
              <LinearProgress variant="determinate" value={65} sx={{ marginTop: 2 }} />
              <Typography variant="caption" color="text.secondary" sx={{ marginTop: 1 }}>
                {65}% funded
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <button className='btn-donate' onClick={handleOpen}>DONATE NOW</button>
          </CardActions>
        </Card>
      </div>
      <section className='section3'>
        <div className='section3-content'>
            <span className='section31'>Donate for a better future for everyone</span>
            <button className='btn' onClick={handleOpen}>DONATE NOW</button>
        </div>
      </section>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="donation-form-modal"
        aria-describedby="donation-form-description"
        closeAfterTransition
      >
        <Slide direction="top" in={open} mountOnEnter unmountOnExit>
          <Box sx={modalStyle}>
            <DonationForm />
          </Box>
        </Slide>
      </Modal>
    </div>
  );
}
