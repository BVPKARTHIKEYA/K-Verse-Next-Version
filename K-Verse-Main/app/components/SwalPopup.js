'use client';

import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const SwalPopup = () => {
  useEffect(() => {
    Swal.fire({
      title: 'Welcome to my Digital Space 🌟',
      text: 'Grab your headphones & explore the rhythm of innovation 🎸💻🎧',
      imageUrl: '/profile3.jpg',
      imageAlt: 'Title Logo',
      showConfirmButton: true,
      confirmButtonText: "Explore 🚀",
      background: `
        rgba(0, 0, 3, 0.8)
        url("/popupbg.jpg")
        center center
        no-repeat
      `,
      // Attach audio directly to the confirm button click
      preConfirm: () => {
        const audio = new Audio("/audio/intro.mp3");
        return audio.play().catch((err) => {
          console.log("Audio playback failed:", err);
        });
      }
    });
  }, []);

  return null;
};

export default SwalPopup;
