// importing react, state and effect hooks
import React, { useState, useEffect } from 'react';
// importing banner images array from bannerImages file
import { bannerImages } from './bannerImages';

// defining the banner component
const Banner = () => {
  // initializing state to keep track of the current index for the banner images
  const [currentIndex, setCurrentIndex] = useState(0);

  // setting up an effect for the rotating banner
  useEffect(() => {
    // creating an interval to change the current image every 4 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 4000);

    // cleaning up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // empty dependency array means this effect runs once on mount

  // rendering the banner component with the current image and its description
  return (
    <div className="Banner">
      <img src={bannerImages[currentIndex].url} alt={bannerImages[currentIndex].description} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
      <p className="Banner-description">{bannerImages[currentIndex].description}</p>
    </div>
  );
};

// exporting the banner component for use in other parts of the application
export default Banner;
