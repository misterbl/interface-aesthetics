import React from "react";
import jamesSpeech from "../assets/james_speech.jpg";
import home2 from "../assets/home2.jpg";
import bottoxForhead from "../assets/bottox_forhead.jpg";
import fillersCheeks from "../assets/fillers_cheeks.jpg";
import group2 from "../assets/group2.jpg";

const PhotoGallery = () => (
  <div className="photo-gallery">
    <img className="james-speech" src={jamesSpeech} alt="James Olding" />
    <div className="d-flex flex-wrap">
      <img src={home2} alt="Interface Aesthetics training" />
      <img src={bottoxForhead} alt="Botox training" />
      <img src={fillersCheeks} alt="fillers for cheeks" />
      <img src={group2} alt="Interface Aesthetics training certification" />
    </div>
  </div>
);

export default PhotoGallery;
