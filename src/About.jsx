import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className='about-wrapper'>
    <div className="App">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="j1">About<span className="s1"> Us</span></h1>
          <p><span className="s1">"Alone</span> we can do so little; <span className="s1">together</span> we can do so much."</p>
        </div>
      </section>
      <section className="about1">
        <h2>Welcome To <span className="s1">Hearts Of Hope</span></h2>
        <div className="about1-content">
        <div class="text-content animate_animated animate_fadeInUp">
          <div className="about1-text">
            <p>At Hearts of Hope, we believe in the power of compassion and the strength of community. Our mission is to bring hope and support to those in need, creating a world where kindness and generosity are the foundations of every interaction.</p>
            <p>Our team is committed to transparency, efficiency, and making a real impact. We believe that together, we can achieve great things and create a brighter future for everyone.</p>
          </div>
          </div>
          <div className="about1-image-container">
            <img src="https://th.bing.com/th/id/R.9226e5738875ce75307e86a7807e4432?rik=JoKppCe2P4dLkw&riu=http%3a%2f%2fdonorbox.org%2fnonprofit-blog%2fwp-content%2fuploads%2f2018%2f02%2fhow-to-get-donations.jpg&ehk=PFSaNy2t87ALBc0f1A4aU5hc268dpXBiHL%2blex30%2fow%3d&risl=&pid=ImgRaw&r=0cd" alt="Team" />
          </div>
        </div>
      </section>

      <section className="what-we-do">
      <h2>What We Do</h2>
      <div className="services1">
        <div className="service1" data-aos="fade-up" data-aos-delay="100">
          <h3 class="w1">01. <span class="w2">We</span> Find & Fund</h3>
          <p>We actively seek out and financially support innovative projects and initiatives that address critical community needs. Our funding empowers organizations to create meaningful and sustainable change.</p>
        </div>
        <div className="service1" data-aos="fade-up" data-aos-delay="200">
          <h3 class="w1">02. <span class="w2">We </span>Build Networks</h3>
          <p> We connect individuals, organizations, and resources to foster a collaborative and supportive community. Our networks strengthen collective efforts and amplify the impact of charitable actions.</p>
        </div>
        <div className="service1" data-aos="fade-up" data-aos-delay="300">
          <h3 class="w1">03. <span class="w2">We</span> Strengthen</h3>
          <p> We provide essential resources and support to enhance the capabilities and resilience of local organizations. Our efforts ensure that these organizations can effectively serve their communities.</p>
        </div>
        <div className="service1" data-aos="fade-up" data-aos-delay="400">
          <h3 class="w1">04. <span class="w2">We</span> Educate</h3>
          <p>We offer educational programs and resources to empower individuals with knowledge and skills. Our initiatives focus on building awareness and fostering personal and community growth.</p>
        </div>
        <div className="service1" data-aos="fade-up" data-aos-delay="500">
          <h3 class="w1">05. <span class="w2">We</span> Provide Care</h3>
          <p>We deliver essential care and support services to those in need, ensuring their well-being and dignity. Our compassionate approach addresses immediate needs and promotes long-term health and stability.</p>
        </div>
        <div className="service1" data-aos="fade-up" data-aos-delay="600">
          <h3 class="w1">06. <span class ="w2">We</span> Consult</h3>
          <p>We offer expert guidance and consulting services to help organizations optimize their operations and achieve their goals. Our consultancy strengthens the effectiveness and impact of charitable initiatives.</p>
        </div>
      </div>
    </section>


    <section className="what-we-care">
      <h2>What We Care For!</h2>
      <div className="care-cards">
        <div className="care-card" data-animation="fade-in">
          <img src="https://websitedemos.net/charity-02/wp-content/uploads/sites/173/2020/01/home-image-08.jpg" alt="Bringing Dreams within Reach for Children" />
          <h3>Bringing Dreams within Reach for Children</h3>
          <p> "Bringing Dreams within Reach for Children" is an initiative dedicated to empowering and supporting children to realize their full potential. This program aims to break down the barriers that prevent children from achieving their dreams, providing them with the resources, guidance, and opportunities they need to succeed."</p>
        </div>
        <div className="care-card" data-animation="fade-in" data-delay="100">
          <img src="https://websitedemos.net/charity-02/wp-content/uploads/sites/173/2020/01/who-we-are-image-01.jpg" alt="The Keys to a New Future for Exploited Children" />
          <h3>The Keys to a New Future for Exploited Children</h3>
          <p> "The Keys to a New Future for Exploited Children" is a transformative initiative aimed at rescuing, rehabilitating, and empowering children who have been victims of exploitation. This program is dedicated to providing these children with a safe environment, emotional support, education, and opportunities for a brighter future."</p>
        </div>
        <div className="care-card" data-animation="fade-in" data-delay="200">
          <img src="https://websitedemos.net/charity-02/wp-content/uploads/sites/173/2020/01/home-image-05.jpg" alt="Boys Rise to Greatness in Burkina Faso" />
          <h3>Boys Rise to Greatness in Burkina Faso</h3>
          <p>"Boys Rise to Greatness in Burkina Faso" is a transformative program designed to uplift and empower boys in Burkina Faso, enabling them to overcome socio-economic challenges and achieve their full potential. This initiative focuses on providing comprehensive support in education, health, personal development, and community engagement."</p>
        </div>
        <div className="care-card" data-animation="fade-in">
          <img src="https://websitedemos.net/charity-02/wp-content/uploads/sites/173/2018/02/stories-img-04-free-img.jpg" />
          <h3>Finding a New Life—in a New Land</h3>
          <p>"Finding a New Life—in a New Land" is an initiative focused on helping individuals and families who are relocating to a new country in search of better opportunities, safety, and a fresh start. This program aims to support newcomers as they navigate the challenges of adjusting to a new culture, finding employment, and integrating into their new communities."</p>
        </div>
        <div className="care-card" data-animation="fade-in" data-delay="100">
          <img src="https://websitedemos.net/charity-02/wp-content/uploads/sites/173/2020/01/home-image-06.jpg" />
          <h3>The Children who Break New Ground</h3>
          <p>""The Children Who Break New Ground" is an inspiring initiative aimed at recognizing and nurturing the pioneering spirit in children. This program celebrates young trailblazers who show remarkable courage, creativity, and determination in various fields, from science and technology to arts and social activism."</p>
        </div>
        <div className="care-card" data-animation="fade-in" data-delay="200">
          <img src="https://websitedemos.net/charity-02/wp-content/uploads/sites/173/2018/02/stories-img-05-free-img.jpg" />
          <h3>Bringing Dreams within Reach</h3>
          <p>"Bringing Dreams within Reach" is a comprehensive program designed to empower individuals, particularly children and young adults, to achieve their aspirations by providing the necessary resources, support, and opportunities. This initiative focuses on breaking down barriers and creating pathways to success, ensuring that dreams are not limited by socioeconomic status."</p>
        </div>


      </div>
    </section>

    <section class="donate-section">
    <div class="overlay"></div>
    <div class="content">
      <h3>Support Us and Change the Course of a Child's Life Today!</h3>
      <p>"The simplest acts of kindness are by far more powerful than a thousand heads bowing in prayer."</p>
      <a href="#" class="donate-button">Donate</a>
    </div>
  </section>
  {/* <footer>
    <p>Copyright © 2024 Charity</p>
    <p>Powered by Charity</p>
  </footer> */}

    </div>
    </div>
  );
}

export default About;