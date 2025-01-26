// import React from "react";
// import Sidebar from "./component/Sidebar";
// import CampaignCard from "./component/CampaignCard";
// import Navbar from "./component/Navbar";
// import "./App.css";

// const campaigns = [
//   {
//     image: "https://via.placeholder.com/300",
//     status: "Profile Pending",
//     progress: 0,
//     totalSlots: 30,
//   },
//   {
//     image: "https://via.placeholder.com/300",
//     status: "Active",
//     progress: 10,
//     totalSlots: 30,
//   },
// ];

// function App() {
//   return (
//     <div className="App">
//       <Sidebar />
//       <div className="main-content">
//         {campaigns.map((campaign, index) => (
//           <CampaignCard key={index} {...campaign} />
//         ))}
//       </div>
//       <Navbar />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import CampaignCard from './component/CampaignCard';
import './App.css';

const campaigns = [
  {
    id: 1,
    brand: 'Vintage 1968',
    image: 'https://i.pinimg.com/736x/95/ec/bc/95ecbc2d5f14fbbd2ccc45170e693984.jpg',
    description: 'Promote our latest product launch.',
    payout: 'Fixed Pay: Rs 1400',
    progress: 60,
    slots: '6/10 hired',
  },
  {
    id: 2,
    brand: 'Kimmy design',
    image: 'https://i.pinimg.com/280x280_RS/95/4c/16/954c1662440913277b1ec78847777ae1.jpg',
    description: 'Showcase our new apparel line.',
    payout: 'Barter: Free Products',
    progress: 30,
    slots: '3/10 hired',
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <h1>Active Campaigns</h1>
        <div className="campaigns-container">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

