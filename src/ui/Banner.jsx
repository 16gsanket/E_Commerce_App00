import React, { useState, useEffect } from "react";

const images = [
  "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"

];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain start-0 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
