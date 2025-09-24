import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      url: 'https://github.com/zedlink-dz/PICS/blob/main/istanbul.337Z.png?raw=true',
      title: 'Turkey'
    },
    {
      url: 'https://github.com/zedlink-dz/PICS/blob/main/MALAYSIA.566Z.png?raw=true',
      title: 'Malaysia'
    },
    {
      url: 'https://github.com/zedlink-dz/PICS/blob/main/EGYPT-PYRAMIDS.597Z.png?raw=true',
      title: 'Egypt Cairo'
    },
    {
      url: 'https://github.com/zedlink-dz/PICS/blob/main/EGYPT-SHARM%20EL%20SHEIKH.816Z.png?raw=true',
      title: 'Egypt Sharm El Sheikh'
    },
    {
      url: 'https://github.com/zedlink-dz/PICS/blob/main/DUBAI.406Z.png?raw=true',
      title: 'Dubai'
    },
    {
      url: 'https://github.com/zedlink-dz/PICS/blob/main/TUNISIA.929Z.png?raw=true',
      title: 'Tunisia'
    },
    {
      url: 'https://github.com/zedlink-dz/PICS/blob/main/ZANZIBAR.681Z.png?raw=true',
      title: 'Zanzibar'
    },
    {
      url: 'https://github.com/zedlink-dz/PICS/blob/main/SAHARA%20ALGERIA.805Z.png?raw=true',
      title: 'Algeria Sahara'
    },
    {
      url: 'https://github.com/zedlink-dz/PICS/blob/main/ORAN.626Z.png?raw=true',
      title: 'Algeria Oran'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[70vh] overflow-hidden rounded-2xl shadow-2xl">
      {/* Images */}
      <div className="flex transition-transform duration-500 ease-in-out h-full" 
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-2xl font-bold">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;