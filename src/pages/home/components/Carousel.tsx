import React, { useState, useEffect } from 'react';
import { CarouselProps } from '../../../interfaces';
import './Carousel.css';

export const Carousel: React.FC<CarouselProps> = ({ slides, autoPlay = true }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [activeSlide, autoPlay, slides.length]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev + slides.length - 1) % slides.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-slides">
        {slides.map((slide, index) => (
          <div
            className={`carousel-slide ${
              index === activeSlide ? "active" : ""
            }`}
            key={index}
          >
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control carousel-control-prev" onClick={prevSlide}>
        <span className="carousel-control-icon">&lt;</span>
      </button>
      <button className="carousel-control carousel-control-next" onClick={nextSlide}>
        <span className="carousel-control-icon">&gt;</span>
      </button>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${
              index === activeSlide ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};