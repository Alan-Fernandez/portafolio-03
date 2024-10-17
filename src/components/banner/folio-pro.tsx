'use client';

import { useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function FolioProBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="banner">
      <div className="banner-wrap">
        <p className="banner-desc">
          <span className="banner-card">Notice</span> We are working on fixing
          bugs.
        </p>
        {/* Botón de eliminar */}
        <button className="close-btn" onClick={handleCloseBanner}>
          X
        </button>
        <a
          href="https://porfolio-alan.netlify.app"
          target="_blank"
          className="banner-btn"
        >
          Previous Portfolio <IoIosArrowRoundForward />
        </a>
      </div>
    </div>
  );
}
