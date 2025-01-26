// import React from "react";
// import "./CampaignCard.css";

// const CampaignCard = ({ image, status, progress, totalSlots }) => {
//   return (
//     <div className="campaign-card">
//       <img src={image} alt="Campaign" className="campaign-image" />
//       <div className="campaign-details">
//         <span className={`status ${status.toLowerCase()}`}>{status}</span>
//         <div className="progress-bar">
//           <div
//             className="progress"
//             style={{ width: `${(progress / totalSlots) * 100}%` }}
//           ></div>
//         </div>
//         <p>
//           {progress}/{totalSlots} Hired
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CampaignCard;

import React from 'react';
import './CampaignCard.css';

function CampaignCard({ brand, image, description, payout, progress, slots }) {
  return (
    <div className="campaign-card">
      <img src={image} alt={`${brand}`} className="campaign-image" />
      <div className="campaign-content">
        <h3 className="brand-name">{brand}</h3>
        <p className="campaign-description">{description}</p>
        <p className="payout">{payout}</p>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="slots">{slots}</p>
      </div>
    </div>
  );
}

export default CampaignCard;

