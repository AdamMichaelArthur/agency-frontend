import React from 'react';
import './VerticalVideo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

function VerticalVideo() {
  const videoId = "DhfKSsWOHy0"; // Static Video ID
  const navigate = useNavigate();

  return (

    <div>
    <div className="back-button" onClick={() => navigate(-1)}>
        <i className="fas fa-arrow-left"></i>
      </div> Go Back
    <div className="video-container">
      <iframe 
        className="video-iframe" 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
        frameBorder="0" 
        allowFullScreen
        allow="autoplay; fullscreen"
        title="Vertical Video"
      ></iframe>
    </div>
    </div>
  );
}

export default VerticalVideo;
