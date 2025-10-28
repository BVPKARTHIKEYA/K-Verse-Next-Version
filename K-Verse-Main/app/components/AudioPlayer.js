// 'use client';

// import React, { forwardRef, useImperativeHandle, useRef } from 'react';

// // forwardRef allows parent to call playAudio() method
// const AudioPlayer = forwardRef((props, ref) => {
//   const audioRef = useRef(null);

//   useImperativeHandle(ref, () => ({
//     playAudio: () => {
//       if (audioRef.current) {
//         audioRef.current.play().catch(err => {
//           console.log("Audio playback failed:", err);
//         });
//       }
//     }
//   }));

//   return <audio ref={audioRef} src="/audio/intro.mp3" hidden />;
// });

// export default AudioPlayer;
