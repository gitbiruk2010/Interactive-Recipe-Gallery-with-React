// importing react and state hook
import React, { useState } from 'react';
// importing the images array from the imageList file
import { images } from './imageList';

// defining the gallery component
const Gallery = () => {
  // setting the initial state for the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // function to go to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
  };

  // rendering the gallery component
  return (
    <div className="Gallery">
      <div className="ImageContainer">
        <img src={images[currentIndex].url} alt={images[currentIndex].description} />
        <p>{images[currentIndex].description}</p>
      </div>
      <button onClick={goToPrevious}>Previous</button>
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

// exporting the gallery component for use in other parts of the application
export default Gallery;
