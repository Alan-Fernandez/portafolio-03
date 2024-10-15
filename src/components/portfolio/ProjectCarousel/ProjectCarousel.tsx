// ProjectCarousel.tsx
import React from 'react';
import Slider from 'react-slick';

// Estilos para el carrusel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProjectCarousel.css'; // Asegúrate de crear este archivo CSS

interface ProjectCarouselProps {
  images: string[];
  description: string;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  images,
  description,
}) => {
  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="project-carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Project slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="project-description">
        <h3>Project Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCarousel;
