// // src/components/ScrollingText.jsx

// import React from "react";

// export default function ScrollingText() {
//   return (
//     <div className="scrolling-text-container">
//       <p id="scrolling-text">
//         📸 Toutes vos envies en image ! Mariages, événements, portraits ... Nous réalisons votre projet photo sur-mesure. Contactez-nous !
//       </p>
//     </div>
//   );
// }

// src/components/ScrollingText.jsx

import { SCROLLING_BANNER_TEXT } from "../constants/texts";

export default function ScrollingText() {
  return (
    <div className="scrolling-text-container">
      <p id="scrolling-text">{SCROLLING_BANNER_TEXT}</p>
    </div>
  );
}

