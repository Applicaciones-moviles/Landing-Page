import React from 'react';
import '../styles/AboutTeam.css';

const AboutTeam = () => {
  return (
    <section id="about-team" className="about-team-section">
      <h2>Acerca del equipo</h2>
      <div className="team-video-container">
        <iframe
          className="team-video"
          src="https://www.youtube.com/embed/UIcePCgBmmQ" // Reemplaza VIDEO_ID con el ID de tu video de YouTube
          title="About the Team Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default AboutTeam;
