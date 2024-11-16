import React, { useState } from "react";
import "./Gallery.css";

const galleryImages = [
  {
    id: 1,
    src: "http://hasan.themexlab.com/new/charity-home-html/img/gallery/s1.jpg",
    alt: "Image 1",
    des: "image1",
  },
  {
    id: 2,
    src: "http://hasan.themexlab.com/new/charity-home-html/img/gallery/s2.jpg",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "http://hasan.themexlab.com/new/charity-home-html/img/blog-page/2.jpg",
    alt: "Image 3",
  },
  {
    id: 3,
    src: "http://hasan.themexlab.com/new/charity-home-html/img/gallery/s4.jpg",
    alt: "Image 4",
  },
  {
    id: 3,
    src: "http://hasan.themexlab.com/new/charity-home-html/img/gallery/s5.jpg",
    alt: "Image 5",
  },
  {
    id: 3,
    src: "http://hasan.themexlab.com/new/charity-home-html/img/gallery/s6.jpg",
    alt: "Image 6",
  },
  {
    id: 3,
    src: "http://hasan.themexlab.com/new/charity-home-html/img/gallery/s7.jpg",
    alt: "Image 7",
  },
  {
    id: 3,
    src: "http://hasan.themexlab.com/new/charity-home-html/img/gallery/s8.jpg",
    alt: "Image 8",
  },
  {
    id: 3,
    src: "http://hasan.themexlab.com/new/charity-home-html/img/gallery/s9.jpg",
    alt: "Image 9",
  },
  {
    id: 3,
    src: "http://hasan.themexlab.com/new/charity-home-html/img/gallery/s10.jpg",
    alt: "Image 10",
  },
  {
    id: 3,
    src: "http://hasan.themexlab.com/new/charity-home-html/img/gallery/s12.jpg",
    alt: "Image 11",
  },
  {
    id: 3,
    src: "http://hasan.themexlab.com/new/charity-home-html/img/gallery/s11.jpg",
    alt: "Image 12",
  },
  // Add more images as needed
];

const blogPosts = [
  {
    id: 1,
    title: "Blog Post 1",
    date: "August 11, 2024",
    excerpt: "This is a short excerpt of the first blog post.",
    content: "This is the full content of the first blog post.",
  },
  {
    id: 2,
    title: "Blog Post 2",
    date: "August 10, 2024",
    excerpt: "This is a short excerpt of the second blog post.",
    content: "This is the full content of the second blog post.",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <div className="combined-page">
      <section className="gl-gallery-hero">
        <div className="gl-gallery-hero-content">
          <h1 className="gl-Gallery-j1">
            GALLERY<span className="gl-gallery-s1"> </span>
          </h1>
        </div>
      </section>
      <section className="gl-gallery-section">
        <h2>Gallery</h2>
        <div className="gl-gallery-grid">
          {galleryImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="gl-gallery-image"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>

        {selectedImage && (
          <div className="gl-gallery-modal" onClick={closeModal}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="gl-gallery-modal-image"
            />
          </div>
        )}
      </section>
      <section>
        <div>
          <h1 className="bl-blogs-title">BLOGS</h1>
          <div className="bl-blog-post">
            <img
              src="http://hasan.themexlab.com/new/charity-home-html/img/blog-page/1.jpg"
              alt="Crying child"
              className="bl-blog-image"
            />
            <div className="bl-blog-content">
              <div className="bl-blog-date">
                <div className="bl-date-box">
                  <span className="bl-date-day">12</span>
                  <br />
                  <span className="bl-date-month">AUG</span>
                </div>
              </div>
              <h2 className="bl-blog-title">
                Tragedy of Hunger: Countless Children Perish Due to Starvation
              </h2>
              <p className="bl-blog-description">
                In New Delhi , India .. a world where resources are plentiful,
                the silent crisis of child hunger continues to claim innocent
                lives. Every day, millions of children succumb to malnutrition,
                their small bodies unable to withstand the devastating effects
                of starvation. Despite global advancements, these preventable
                deaths often go unnoticed, a stark reminder of the urgent need
                for action to combat this ongoing tragedy. The loss of these
                young lives underscores the critical necessity for more robust
                efforts to eradicate hunger and ensure that no child suffers
                such a fate.
              </p>
            </div>
          </div>
          <div className="bl-blog-post">
            <img
              src="https://th.bing.com/th/id/OIP.luWuB6uHIPvuHNf4nmNPewHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Crying child"
              className="bl-blog-image"
            />
            <div className="bl-blog-content">
              <div className="bl-blog-date">
                <div className="bl-date-box">
                  <span className="bl-date-day">4</span>
                  <br />
                  <span className="bl-date-month">JUL</span>
                </div>
              </div>
              <h2 className="bl-blog-title">
                "Fading Light: A Child's Final Battle"
              </h2>
              <p className="bl-blog-description">
                "A young child, frail and pale, lies in a hospital bed,
                surrounded by medical equipment. Their small body is weak,
                ravaged by a relentless disease. The child’s breathing is
                shallow, and their eyes, once bright and full of life, are now
                tired and half-closed. A loving parent sits beside them, holding
                their tiny hand, offering comfort in the final moments. The room
                is filled with an overwhelming sense of sorrow, as the family
                silently prays for peace and an end to the suffering. The
                child’s struggle slowly fades, and a serene calm settles in as
                they take their last breath, leaving behind a profound sense of
                loss and grief."
              </p>
            </div>
          </div>
          <div className="bl-blog-post">
            <img
              src="https://th.bing.com/th/id/OIP.PVyuzRUCdwKtJR_CXbOE1wHaE8?w=273&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Crying child"
              className="bl-blog-image"
            />
            <div className="bl-blog-content">
              <div className="bl-blog-date">
                <div className="bl-date-box">
                  <span className="bl-date-day">2</span>
                  <br />
                  <span className="bl-date-month">AUG</span>
                </div>
              </div>
              <h2 className="bl-blog-title">
                The Impact of Food Scarcity on Children
              </h2>
              <p className="bl-blog-description">
                Food scarcity, or the lack of adequate access to nutritious
                food, is a critical issue that disproportionately affects
                children worldwide. When children do not receive enough food, or
                the right kind of food, it can lead to severe health problems,
                including malnutrition, stunted growth, weakened immune systems,
                and developmental delays.In regions experiencing food scarcity,
                children are particularly vulnerable due to their need for
                sufficient nutrients for proper growth and development.
                Malnourished children are more likely to suffer from diseases,
                perform poorly in school, and face long-term health issues that
                can affect their ability to lead productive lives.
              </p>
              
            </div>
          </div>
          <div className="bl-blog-post">
            <img
              src="https://th.bing.com/th/id/R.d67d321d9fa23f395d16bb5aa3e5ff2a?rik=ExbJuIPMQ4vsNQ&riu=http%3a%2f%2fo.aolcdn.com%2fdims-shared%2fdims3%2fGLOB%2fcrop%2f3136x2089%2b0%2b0%2fresize%2f900x600!%2fformat%2fjpg%2fquality%2f85%2fhttp%3a%2f%2fo.aolcdn.com%2fhss%2fstorage%2fmidas%2f251e7cf2755f40b3d002c5767a9ffc2b%2f203926379%2fstock-photo-poor-sad-little-child-girl-sitting-against-the-concrete-wall-105554129.jpg&ehk=o1E9NnD%2b3WtZvXyHaAAiSdyTrIbNsJtTyPcAb3PoPW8%3d&risl=&pid=ImgRaw&r=0"
              alt="Crying child"
              className="bl-blog-image"
            />
            <div className="bl-blog-content">
              <div className="bl-blog-date">
                <div className="bl-date-box">
                  <span className="bl-date-day">14</span>
                  <br />
                  <span className="bl-date-month">MAR</span>
                </div>
              </div>
              <h2 className="bl-blog-title">
                The Impact of Leaving Children in Orphanages
              </h2>
              <p className="bl-blog-description">
                Children in orphanages may face emotional and psychological
                struggles due to the lack of individual attention, familial
                bonds, and the instability of life in an institution. While
                orphanages aim to provide care and protection, the absence of a
                permanent family can lead to feelings of abandonment and
                loneliness. It's crucial for society to address the underlying
                issues that lead to children being placed in orphanages and to
                seek solutions that prioritize the well-being and development of
                every child, including adoption, foster care, and community
                support programs.
              </p>
             
            </div>
          </div>
          <div className="bl-blog-post">
            <img
              src="https://th.bing.com/th/id/OIP.lBI0gzlfWizzPBr4x22RvgHaE7?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Crying child"
              className="bl-blog-image"
            />
            <div className="bl-blog-content">
              <div className="bl-blog-date">
                <div className="bl-date-box">
                  <span className="bl-date-day">7</span>
                  <br />
                  <span className="bl-date-month">MAY</span>
                </div>
              </div>
              <h2 className="bl-blog-title">
                "Fading Light: A Child's Final Battle{" "}
              </h2>
              <p className="bl-blog-description">
                "A young child, frail and pale, lies in a hospital bed,
                surrounded by medical equipment. Their small body is weak,
                ravaged by a relentless disease. The child’s breathing is
                shallow, and their eyes, once bright and full of life, are now
                tired and half-closed. A loving parent sits beside them, holding
                their tiny hand, offering comfort in the final moments. The room
                is filled with an overwhelming sense of sorrow, as the family
                silently prays for peace and an end to the suffering. The
                child’s struggle slowly fades, and a serene calm settles in as
                they take their last breath, leaving behind a profound sense of
                loss and grief."
              </p>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;